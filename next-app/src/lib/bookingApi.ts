import type { AvailableSlotsResponse, CreateBookingRequest, BookingConfirmation } from "@/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export async function fetchAvailableSlots(date: string): Promise<AvailableSlotsResponse> {
  const res = await fetch(`${API_URL}/api/bookings/available-slots?date=${date}`);
  if (!res.ok) {
    throw new Error("Kunde inte hämta lediga tider.");
  }
  return res.json();
}

export async function createBooking(data: CreateBookingRequest): Promise<BookingConfirmation> {
  const res = await fetch(`${API_URL}/api/bookings/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => null);
    throw new Error(err?.detail || "Kunde inte skapa bokningen.");
  }
  return res.json();
}

export async function cancelBooking(id: string): Promise<void> {
  const res = await fetch(`${API_URL}/api/bookings/cancel/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) {
    throw new Error("Kunde inte avboka.");
  }
}
