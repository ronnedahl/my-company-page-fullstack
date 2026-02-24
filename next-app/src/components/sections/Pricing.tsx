import type { PricingCardData } from "@/types";
import PricingCard from "./PricingCard";
import SectionHeader from "@/components/ui/SectionHeader";

const packages: PricingCardData[] = [
  {
    name: "Startpaketet",
    price: "4 900",
    features: [
      "Landningssida",
      "Mobilanpassad design",
      "Kontaktformulär",
      "Grundläggande SEO",
    ],
  },
  {
    name: "Tillväxtpaketet",
    price: "12 900",
    features: [
      "Företagswebbplats (flersidig)",
      "Bokningssystem",
      "SEO-optimering",
      "Google-anslutning",
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
    <section id="pricing" className="py-10 sm:py-20">
      <div className="max-w-[1200px] mx-auto px-5">
        <SectionHeader
          title="Våra Paket"
          subtitle="Transparenta priser utan dolda kostnader. Välj det paket som passar ditt företag bäst."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[400px] md:max-w-none mx-auto">
          {packages.map((pkg) => (
            <PricingCard key={pkg.name} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}
