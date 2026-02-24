"use client";

import Link from "next/link";
import type { BookingConfirmation as BookingConfirmationType } from "@/types";

interface BookingConfirmationProps {
  booking: BookingConfirmationType;
}

const SERVICE_LABELS: Record<string, string> = {
  "ai-consultation": "AI-konsultation",
  "web-development": "Webbutveckling",
};

export default function BookingConfirmation({ booking }: BookingConfirmationProps) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-light-green rounded-full flex items-center justify-center mx-auto mb-4">
        <span className="text-3xl">✓</span>
      </div>

      <h2 className="text-xl font-semibold mb-2">Bokningen är bekräftad!</h2>
      <p className="text-gray-text mb-8">
        Vi ser fram emot att träffa dig.
      </p>

      <div className="bg-white rounded-xl p-6 max-w-md mx-auto text-left space-y-3 border border-gray-200">
        <div className="flex justify-between">
          <span className="text-gray-text text-sm">Tjänst</span>
          <span className="font-medium text-sm">
            {SERVICE_LABELS[booking.service_type] || booking.service_type}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-text text-sm">Datum</span>
          <span className="font-medium text-sm">{booking.booking_date}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-text text-sm">Tid</span>
          <span className="font-medium text-sm">
            {booking.start_time} – {booking.end_time}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-text text-sm">Namn</span>
          <span className="font-medium text-sm">{booking.client_name}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-text text-sm">E-post</span>
          <span className="font-medium text-sm">{booking.client_email}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-text text-sm">Boknings-ID</span>
          <span className="font-mono text-xs text-gray-text">{booking.id.slice(0, 8)}</span>
        </div>
      </div>

      <Link
        href="/"
        className="inline-block mt-8 bg-accent-green text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
      >
        Tillbaka till startsidan
      </Link>
    </div>
  );
}
