import type { Metadata } from "next";
import ServiceHeader from "@/components/layout/ServiceHeader";
import Footer from "@/components/layout/Footer";
import BookingWizard from "@/components/booking/BookingWizard";

export const metadata: Metadata = {
  title: "Demo Bokningssystem | Växtkraft Webb",
  description: "Se hur ett smart bokningssystem fungerar i praktiken. Testa att boka en tid hos en exempelverkstad.",
};

export default function BookingPage() {
  return (
    <>
      <ServiceHeader />
      <main className="max-w-[1200px] mx-auto px-5 py-10 min-h-[70vh]">
        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-4xl font-semibold mb-3">
            Demo Bokningssystem
          </h1>
          <p className="text-gray-text max-w-lg mx-auto">
            Så här enkelt kan det se ut för dina kunder. Testa att boka en tid hos en exempelverkstad.
          </p>
        </div>
        <BookingWizard />
      </main>
      <Footer />
    </>
  );
}
