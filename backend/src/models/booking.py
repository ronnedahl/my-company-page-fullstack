"""SQLAlchemy ORM models for the booking system."""

from sqlalchemy import Column, String, Date, Time, Text, Enum, TIMESTAMP, Index
from sqlalchemy.orm import DeclarativeBase
from sqlalchemy.sql import func
import enum


class Base(DeclarativeBase):
    pass


class BookingStatus(str, enum.Enum):
    confirmed = "confirmed"
    cancelled = "cancelled"


class ServiceType(str, enum.Enum):
    ai_consultation = "ai-consultation"
    web_development = "web-development"


class Booking(Base):
    __tablename__ = "bookings"

    id = Column(String(36), primary_key=True)
    booking_date = Column(Date, nullable=False, index=True)
    start_time = Column(Time, nullable=False)
    end_time = Column(Time, nullable=False)
    client_name = Column(String(255), nullable=False)
    client_email = Column(String(255), nullable=False)
    client_phone = Column(String(50), nullable=True)
    service_type = Column(Enum("ai-consultation", "web-development", name="servicetype"), nullable=False)
    description = Column(Text, nullable=True)
    status = Column(Enum("confirmed", "cancelled", name="bookingstatus"), nullable=False, default="confirmed", index=True)
    meeting_link = Column(String(500), nullable=True)
    created_at = Column(TIMESTAMP, server_default=func.now())
    updated_at = Column(TIMESTAMP, server_default=func.now(), onupdate=func.now())


class BlockedTime(Base):
    __tablename__ = "blocked_times"

    id = Column(String(36), primary_key=True)
    blocked_date = Column(Date, nullable=False, index=True)
    start_time = Column(Time, nullable=False)
    end_time = Column(Time, nullable=False)
    reason = Column(String(255), nullable=True)
    created_at = Column(TIMESTAMP, server_default=func.now())
