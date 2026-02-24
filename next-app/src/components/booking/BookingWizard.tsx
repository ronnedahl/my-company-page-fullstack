"use client";

import { useState } from "react";
import { format } from "date-fns";
import { createBooking } from "@/lib/bookingApi";
import type { BookingConfirmation as BookingConfirmationType } from "@/types";
import StepIndicator from "./StepIndicator";
import ServicePicker from "./ServicePicker";
import BookingCalendar from "./BookingCalendar";
import TimeSlotPicker from "./TimeSlotPicker";
import BookingForm, { type BookingFormData } from "./BookingForm";
import BookingConfirmation from "./BookingConfirmation";

export default function BookingWizard() {
  const [step, setStep] = useState(1);
  const [service, setService] = useState<"ai-consultation" | "web-development" | null>(null);
  const [date, setDate] = useState<Date | undefined>();
  const [time, setTime] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [confirmation, setConfirmation] = useState<BookingConfirmationType | null>(null);

  const handleServiceSelect = (s: "ai-consultation" | "web-development") => {
    setService(s);
    setStep(2);
  };

  const handleDateSelect = (d: Date | undefined) => {
    if (d) {
      setDate(d);
      setTime(null);
      setStep(3);
    }
  };

  const handleTimeSelect = (t: string) => {
    setTime(t);
    setStep(4);
  };

  const handleFormSubmit = async (formData: BookingFormData) => {
    if (!service || !date || !time) return;
    setLoading(true);
    setError(null);

    try {
      const result = await createBooking({
        date: format(date, "yyyy-MM-dd"),
        start_time: time,
        client_name: formData.name,
        client_email: formData.email,
        client_phone: formData.phone || undefined,
        service_type: service,
        description: formData.description || undefined,
      });
      setConfirmation(result);
      setStep(5);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Något gick fel.");
    } finally {
      setLoading(false);
    }
  };

  const goBack = () => {
    if (step > 1 && step < 5) {
      setStep(step - 1);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <StepIndicator currentStep={step} />

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 text-center text-sm">
          {error}
        </div>
      )}

      {step === 1 && (
        <ServicePicker selected={service} onSelect={handleServiceSelect} />
      )}

      {step === 2 && (
        <BookingCalendar selected={date} onSelect={handleDateSelect} />
      )}

      {step === 3 && date && (
        <TimeSlotPicker date={date} selected={time} onSelect={handleTimeSelect} />
      )}

      {step === 4 && (
        <BookingForm onSubmit={handleFormSubmit} loading={loading} />
      )}

      {step === 5 && confirmation && (
        <BookingConfirmation booking={confirmation} />
      )}

      {step > 1 && step < 5 && (
        <div className="text-center mt-8">
          <button
            onClick={goBack}
            className="text-sm text-gray-text hover:text-text transition-colors cursor-pointer"
          >
            ← Tillbaka
          </button>
        </div>
      )}
    </div>
  );
}
