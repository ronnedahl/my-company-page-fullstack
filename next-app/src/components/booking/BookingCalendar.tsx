"use client";

import { DayPicker } from "react-day-picker";
import { sv } from "date-fns/locale";
import { addDays, addWeeks, isWeekend, isBefore, startOfDay } from "date-fns";
import "react-day-picker/style.css";

interface BookingCalendarProps {
  selected: Date | undefined;
  onSelect: (date: Date | undefined) => void;
}

export default function BookingCalendar({ selected, onSelect }: BookingCalendarProps) {
  const today = new Date();
  const minDate = addDays(today, 1);
  const maxDate = addWeeks(today, 4);

  const isDisabled = (date: Date) => {
    return (
      isWeekend(date) ||
      isBefore(startOfDay(date), startOfDay(minDate)) ||
      isBefore(startOfDay(maxDate), startOfDay(date))
    );
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2 text-center">Välj datum</h2>
      <p className="text-gray-text text-center mb-8">
        Vardagar, minst 24h framåt, max 4 veckor
      </p>
      <div className="flex justify-center">
        <DayPicker
          mode="single"
          locale={sv}
          selected={selected}
          onSelect={onSelect}
          disabled={isDisabled}
          fromMonth={minDate}
          toMonth={maxDate}
        />
      </div>
    </div>
  );
}
