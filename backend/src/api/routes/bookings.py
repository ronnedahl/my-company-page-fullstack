"""Booking API endpoints."""

from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.ext.asyncio import AsyncSession
from src.services.database import get_db
from src.services.booking_service import BookingService
from src.models.booking_requests import CreateBookingRequest
from src.models.booking_responses import AvailableSlotsResponse, BookingConfirmation, CancelBookingResponse

router = APIRouter(prefix="/api/bookings", tags=["bookings"])


@router.get("/available-slots", response_model=AvailableSlotsResponse)
async def get_available_slots(
    date: str = Query(..., pattern=r"^\d{4}-\d{2}-\d{2}$"),
    db: AsyncSession = Depends(get_db),
):
    service = BookingService(db)
    try:
        return await service.get_available_slots(date)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))


@router.post("/create", response_model=BookingConfirmation)
async def create_booking(
    req: CreateBookingRequest,
    db: AsyncSession = Depends(get_db),
):
    service = BookingService(db)
    try:
        return await service.create_booking(req)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))


@router.delete("/cancel/{booking_id}", response_model=CancelBookingResponse)
async def cancel_booking(
    booking_id: str,
    db: AsyncSession = Depends(get_db),
):
    service = BookingService(db)
    try:
        return await service.cancel_booking(booking_id)
    except ValueError as e:
        raise HTTPException(status_code=404, detail=str(e))
