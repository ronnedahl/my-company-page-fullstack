"""Data models for API requests and responses."""

from .requests import ChatRequest, DocumentRequest, SearchRequest
from .responses import ChatResponse, DocumentResponse, SearchResponse, SearchResult, ErrorResponse
from .booking import Booking, BlockedTime, BookingStatus, ServiceType
from .booking_requests import CreateBookingRequest
from .booking_responses import TimeSlot, AvailableSlotsResponse, BookingConfirmation, CancelBookingResponse

__all__ = [
    "ChatRequest",
    "DocumentRequest",
    "SearchRequest",
    "ChatResponse",
    "DocumentResponse",
    "SearchResponse",
    "SearchResult",
    "ErrorResponse",
    "Booking",
    "BlockedTime",
    "BookingStatus",
    "ServiceType",
    "CreateBookingRequest",
    "TimeSlot",
    "AvailableSlotsResponse",
    "BookingConfirmation",
    "CancelBookingResponse",
]