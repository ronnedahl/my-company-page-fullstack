import type { Metadata } from "next";
import ServiceHeader from "@/components/layout/ServiceHeader";
import Footer from "@/components/layout/Footer";
import ServiceHero from "@/components/chatbot/ServiceHero";
import IntroSection from "@/components/chatbot/IntroSection";
import ProcessSection from "@/components/chatbot/ProcessSection";
import FeaturesSection from "@/components/chatbot/FeaturesSection";
import CtaSection from "@/components/chatbot/CtaSection";

export const metadata: Metadata = {
  title: "AI-Chatbot & Kundtjänst - Växtkraft Webb",
  description:
    "Installera en smart AI-chattbot som svarar på dina kunders frågor dygnet runt, direkt på hemsidan.",
};

export default function ChatbotPage() {
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
