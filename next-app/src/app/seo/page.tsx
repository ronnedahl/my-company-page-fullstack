import type { Metadata } from "next";
import ServiceHeader from "@/components/layout/ServiceHeader";
import Footer from "@/components/layout/Footer";
import ServiceHero from "@/components/seo/ServiceHero";
import IntroSection from "@/components/seo/IntroSection";
import ProcessSection from "@/components/seo/ProcessSection";
import FeaturesSection from "@/components/seo/FeaturesSection";
import CtaSection from "@/components/seo/CtaSection";

export const metadata: Metadata = {
  title: "SEO & Synlighet på Google - Växtkraft Webb",
  description:
    "Vi hjälper dig att klättra i sökresultaten så att lokala kunder hittar just ditt företag före konkurrenternas.",
};

export default function SeoPage() {
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
