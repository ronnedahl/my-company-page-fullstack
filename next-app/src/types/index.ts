import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface ServiceCardData {
  icon: IconDefinition;
  title: string;
  description: string;
  href?: string;
}

export interface CaseStudyData {
  tag: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  statValue: string;
  statLabel: string;
  statPosition: "left" | "bottom-right";
  reverse?: boolean;
}

export interface PricingCardData {
  name: string;
  price: string;
  features: string[];
  featured?: boolean;
  badge?: string;
}

export interface TestimonialData {
  text: string;
  authorName: string;
  authorCompany: string;
}

export interface StepData {
  number: string;
  title: string;
  description: string;
}

export interface FeatureData {
  icon: IconDefinition;
  title: string;
  description: string;
}

// Booking system types
export interface TimeSlot {
  start_time: string;
  end_time: string;
  available: boolean;
}

export interface AvailableSlotsResponse {
  date: string;
  weekday: string;
  slots: TimeSlot[];
  total_available: number;
}

export interface CreateBookingRequest {
  date: string;
  start_time: string;
  client_name: string;
  client_email: string;
  client_phone?: string;
  service_type: "ai-consultation" | "web-development";
  description?: string;
}

export interface BookingConfirmation {
  id: string;
  booking_date: string;
  start_time: string;
  end_time: string;
  client_name: string;
  client_email: string;
  service_type: string;
  meeting_link: string | null;
  status: string;
}
