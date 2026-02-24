"""Business logic for the booking system."""

import uuid
from datetime import date, time, datetime, timedelta
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from src.models.booking import Booking, BlockedTime
from src.models.booking_requests import CreateBookingRequest
from src.models.booking_responses import (
    TimeSlot,
    AvailableSlotsResponse,
    BookingConfirmation,
    CancelBookingResponse,
)
import structlog

logger = structlog.get_logger()

WEEKDAYS_SV = {
    0: "Måndag",
    1: "Tisdag",
    2: "Onsdag",
    3: "Torsdag",
    4: "Fredag",
    5: "Lördag",
    6: "Söndag",
}

# Working hours: 08-17, lunch 12-13, 1h slots
SLOT_START_HOURS = [8, 9, 10, 11, 13, 14, 15, 16]


class BookingService:
    def __init__(self, db: AsyncSession):
        self.db = db

    async def get_available_slots(self, date_str: str) -> AvailableSlotsResponse:
        target_date = date.fromisoformat(date_str)
        weekday = target_date.weekday()

        # Weekend — no slots
        if weekday >= 5:
            return AvailableSlotsResponse(
                date=date_str,
                weekday=WEEKDAYS_SV[weekday],
                slots=[],
                total_available=0,
            )

        # Must be at least 24h in advance and within 4 weeks
        now = datetime.now()
        target_dt = datetime.combine(target_date, time(8, 0))
        min_dt = now + timedelta(hours=24)
        max_dt = now + timedelta(weeks=4)

        if target_dt < min_dt or target_dt > max_dt:
            return AvailableSlotsResponse(
                date=date_str,
                weekday=WEEKDAYS_SV[weekday],
                slots=[],
                total_available=0,
            )

        # Get existing bookings for this date
        result = await self.db.execute(
            select(Booking).where(
                Booking.booking_date == target_date,
                Booking.status == "confirmed",
            )
        )
        bookings = result.scalars().all()
        booked_starts = {b.start_time for b in bookings}

        # Get blocked times for this date
        result = await self.db.execute(
            select(BlockedTime).where(BlockedTime.blocked_date == target_date)
        )
        blocked = result.scalars().all()
        blocked_starts = {b.start_time for b in blocked}

        taken = booked_starts | blocked_starts

        slots = []
        for hour in SLOT_START_HOURS:
            start = time(hour, 0)
            end = time(hour + 1, 0)
            slot_dt = datetime.combine(target_date, start)
            available = start not in taken and slot_dt > min_dt
            slots.append(
                TimeSlot(
                    start_time=start.strftime("%H:%M"),
                    end_time=end.strftime("%H:%M"),
                    available=available,
                )
            )

        return AvailableSlotsResponse(
            date=date_str,
            weekday=WEEKDAYS_SV[weekday],
            slots=slots,
            total_available=sum(1 for s in slots if s.available),
        )

    async def create_booking(self, req: CreateBookingRequest) -> BookingConfirmation:
        target_date = date.fromisoformat(req.date)
        start = time.fromisoformat(req.start_time)
        end_hour = start.hour + 1
        end = time(end_hour, 0)

        # Validate the slot is available
        slots = await self.get_available_slots(req.date)
        matching = [s for s in slots.slots if s.start_time == req.start_time]
        if not matching or not matching[0].available:
            raise ValueError("Den valda tiden är inte tillgänglig.")

        booking_id = str(uuid.uuid4())
        booking = Booking(
            id=booking_id,
            booking_date=target_date,
            start_time=start,
            end_time=end,
            client_name=req.client_name,
            client_email=req.client_email,
            client_phone=req.client_phone,
            service_type=req.service_type,
            description=req.description,
            status="confirmed",
        )

        self.db.add(booking)
        await self.db.commit()
        await self.db.refresh(booking)

        logger.info("booking_created", id=booking_id, date=req.date, time=req.start_time)

        return BookingConfirmation(
            id=booking_id,
            booking_date=req.date,
            start_time=start.strftime("%H:%M"),
            end_time=end.strftime("%H:%M"),
            client_name=req.client_name,
            client_email=req.client_email,
            service_type=req.service_type,
            meeting_link=None,
            status="confirmed",
        )

    async def cancel_booking(self, booking_id: str) -> CancelBookingResponse:
        result = await self.db.execute(
            select(Booking).where(Booking.id == booking_id)
        )
        booking = result.scalar_one_or_none()

        if not booking:
            raise ValueError("Bokningen hittades inte.")

        if booking.status == "cancelled":
            raise ValueError("Bokningen är redan avbokad.")

        booking.status = "cancelled"
        await self.db.commit()

        logger.info("booking_cancelled", id=booking_id)

        return CancelBookingResponse(
            id=booking_id,
            status="cancelled",
            message="Bokningen har avbokats.",
        )
