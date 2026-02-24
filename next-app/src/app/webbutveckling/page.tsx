import type { Metadata } from "next";
import ServiceHeader from "@/components/layout/ServiceHeader";
import Footer from "@/components/layout/Footer";
import ServiceHero from "@/components/webbutveckling/ServiceHero";
import IntroSection from "@/components/webbutveckling/IntroSection";
import ProcessSection from "@/components/webbutveckling/ProcessSection";
import FeaturesSection from "@/components/webbutveckling/FeaturesSection";
import CtaSection from "@/components/webbutveckling/CtaSection";

export const metadata: Metadata = {
  title: "Webbutveckling & Redesign - Växtkraft Webb",
  description:
    "Vi bygger moderna webbplatser med hjälp av AI utan att tappa din Google-ranking.",
};

export default function WebbutvecklingPage() {
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
