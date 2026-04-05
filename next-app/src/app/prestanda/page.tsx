import type { Metadata } from "next";
import ServiceHeader from "@/components/layout/ServiceHeader";
import Footer from "@/components/layout/Footer";
import ServiceHero from "@/components/prestanda/ServiceHero";
import IntroSection from "@/components/prestanda/IntroSection";
import ProcessSection from "@/components/prestanda/ProcessSection";
import FeaturesSection from "@/components/prestanda/FeaturesSection";
import CtaSection from "@/components/prestanda/CtaSection";

export const metadata: Metadata = {
  title: "Hastighet & Prestanda",
  description:
    "Vi optimerar din hemsida för blixtsnabba laddtider som ger bättre Google-ranking och nöjdare besökare.",
  alternates: { canonical: "/prestanda" },
  openGraph: {
    title: "Hastighet & Prestanda | Webbkraft",
    description:
      "Vi optimerar din hemsida för blixtsnabba laddtider som ger bättre Google-ranking och nöjdare besökare.",
  },
};

export default function PrestandaPage() {
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
