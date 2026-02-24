import type { Metadata } from "next";
import ServiceHeader from "@/components/layout/ServiceHeader";
import Footer from "@/components/layout/Footer";
import BookingWizard from "@/components/booking/BookingWizard";

export const metadata: Metadata = {
  title: "Boka Rådgivning | Växtkraft Webb",
  description: "Boka en kostnadsfri rådgivning med Växtkraft Webb. Välj mellan AI-konsultation och webbutveckling.",
};

export default function BookingPage() {
  return (
    <>
      <ServiceHeader />
      <main className="max-w-[1200px] mx-auto px-5 py-10 min-h-[70vh]">
        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-4xl font-semibold mb-3">
            Boka Gratis Rådgivning
          </h1>
          <p className="text-gray-text max-w-lg mx-auto">
            Välj en tjänst, ett datum och en tid som passar dig. Vi återkommer med en bekräftelse.
          </p>
        </div>
        <BookingWizard />
      </main>
      <Footer />
    </>
  );
}
