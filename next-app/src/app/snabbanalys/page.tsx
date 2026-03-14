import type { Metadata } from "next";
import ServiceHeader from "@/components/layout/ServiceHeader";
import Footer from "@/components/layout/Footer";
import ServiceHero from "@/components/snabbanalys/ServiceHero";
import IntroSection from "@/components/snabbanalys/IntroSection";
import ProcessSection from "@/components/snabbanalys/ProcessSection";
import FeaturesSection from "@/components/snabbanalys/FeaturesSection";
import CtaSection from "@/components/snabbanalys/CtaSection";

export const metadata: Metadata = {
  title: "Snabbanalys & Åtgärd - Växtkraft Webb",
  description:
    "Vi gör en blixtsnabb analys av din nuvarande sida och ger förslag på direkta förbättringar för ökad försäljning.",
};

export default function SnabbanalysPage() {
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
