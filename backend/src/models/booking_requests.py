"""Pydantic request models for the booking API."""

from pydantic import BaseModel, EmailStr, Field
from typing import Optional


class CreateBookingRequest(BaseModel):
    date: str = Field(..., description="Booking date YYYY-MM-DD", pattern=r"^\d{4}-\d{2}-\d{2}$")
    start_time: str = Field(..., description="Start time HH:MM", pattern=r"^\d{2}:\d{2}$")
    client_name: str = Field(..., min_length=2, max_length=255)
    client_email: EmailStr
    client_phone: Optional[str] = Field(None, max_length=50)
    service_type: str = Field(..., pattern=r"^(ai-consultation|web-development)$")
    description: Optional[str] = None
