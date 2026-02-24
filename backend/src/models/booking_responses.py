"""Pydantic response models for the booking API."""

from pydantic import BaseModel
from typing import Optional


class TimeSlot(BaseModel):
    start_time: str
    end_time: str
    available: bool


class AvailableSlotsResponse(BaseModel):
    date: str
    weekday: str
    slots: list[TimeSlot]
    total_available: int


class BookingConfirmation(BaseModel):
    id: str
    booking_date: str
    start_time: str
    end_time: str
    client_name: str
    client_email: str
    service_type: str
    meeting_link: Optional[str]
    status: str


class CancelBookingResponse(BaseModel):
    id: str
    status: str
    message: str
