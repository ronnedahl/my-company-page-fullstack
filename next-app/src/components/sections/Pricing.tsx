import type { PricingCardData } from "@/types";
import PricingCard from "./PricingCard";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeInUp from "@/components/ui/FadeInUp";

const packages: PricingCardData[] = [
  {
    name: "Startpaketet",
    price: "4 900",
    features: [
      "Landningssida",
      "Mobilanpassad design",
      "Kontaktformulär",
      "Grundläggande SEO",
      "Responsiv på alla enheter",
    ],
  },
  {
    name: "Tillväxtpaketet",
    price: "12 900",
    features: [
      "Flersidig webbplats",
      "Bokningssystem",
      "SEO-optimering",
      "Google-anslutning",
      "Anpassad design",
    ],
    featured: true,
    badge: "Populärast",
  },
  {
    name: "Premiumpaketet",
    price: "24 900",
    features: [
      "Allt i Tillväxtpaketet",
      "AI-chatbot",
      "Löpande support",
      "Prestandaoptimering",
      "Analys & uppföljning",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-28">
      <div className="max-w-[1200px] mx-auto px-5">
        <FadeInUp>
          <SectionHeader
            title="Våra Paket"
            subtitle="Transparenta priser utan dolda kostnader. Välj det paket som passar ditt företag bäst."
          />
        </FadeInUp>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[400px] md:max-w-none mx-auto">
          {packages.map((pkg, i) => (
            <FadeInUp key={pkg.name} delay={i * 150}>
              <PricingCard {...pkg} />
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
