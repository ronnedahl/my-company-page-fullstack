import type { Metadata } from "next";
import ServiceHeader from "@/components/layout/ServiceHeader";
import Footer from "@/components/layout/Footer";
import ServiceHero from "@/components/bokning-online/ServiceHero";
import IntroSection from "@/components/bokning-online/IntroSection";
import ProcessSection from "@/components/bokning-online/ProcessSection";
import FeaturesSection from "@/components/bokning-online/FeaturesSection";
import CtaSection from "@/components/bokning-online/CtaSection";

export const metadata: Metadata = {
  title: "Bokningssystem Online",
  description:
    "Låt dina kunder boka tid direkt på nätet. Smidiga bokningssystem som sparar tid och ökar försäljningen.",
  alternates: { canonical: "/bokning-online" },
  openGraph: {
    title: "Bokningssystem Online | Webbkraft",
    description:
      "Låt dina kunder boka tid direkt på nätet. Smidiga bokningssystem som sparar tid och ökar försäljningen.",
  },
};

export default function BokningOnlinePage() {
  return (
    <>
      <ServiceHeader />
      <main>
        <ServiceHero />
        <IntroSection />
        <ProcessSection />
        <FeaturesSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
