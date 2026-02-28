"use client";

import { useEffect, useState } from "react";
import { format } from "date-fns";
import { sv } from "date-fns/locale";
import { fetchAvailableSlots } from "@/lib/bookingApi";
import type { TimeSlot } from "@/types";

interface TimeSlotPickerProps {
  date: Date;
  selected: string | null;
  onSelect: (time: string) => void;
}

export default function TimeSlotPicker({ date, selected, onSelect }: TimeSlotPickerProps) {
  const [slots, setSlots] = useState<TimeSlot[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const dateStr = format(date, "yyyy-MM-dd");
  const dateLabel = format(date, "EEEE d MMMM", { locale: sv });

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchAvailableSlots(dateStr)
      .then((res) => setSlots(res.slots))
      .catch(() => setError("Kunde inte hämta lediga tider."))
      .finally(() => setLoading(false));
  }, [dateStr]);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2 text-center">Välj tid</h2>
      <p className="text-gray-text text-center mb-8 capitalize">{dateLabel}</p>

      {loading && (
        <p className="text-center text-gray-text">Laddar tider...</p>
      )}

      {error && (
        <p className="text-center text-red-600">{error}</p>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-lg mx-auto">
          {slots.map((slot) => (
            <button
              key={slot.start_time}
              disabled={!slot.available}
              onClick={() => onSelect(slot.start_time)}
              className={`py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                !slot.available
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed line-through"
                  : selected === slot.start_time
                    ? "bg-accent-green text-white"
                    : "bg-card-bg border border-border hover:border-accent-green cursor-pointer"
              }`}
            >
              {slot.start_time}
            </button>
          ))}
        </div>
      )}

      {!loading && !error && slots.every((s) => !s.available) && (
        <p className="text-center text-gray-text mt-4">
          Inga lediga tider denna dag. Välj ett annat datum.
        </p>
      )}
    </div>
  );
}
