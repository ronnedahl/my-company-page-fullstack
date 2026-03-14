import {
  faBolt,
  faMagnifyingGlassChart,
  faMobileScreen,
  faShieldHalved,
  faChartLine,
  faCheck,
} from "@/lib/icons";
import type { FeatureData } from "@/types";
import FeatureItem from "../webbutveckling/FeatureItem";

const features: FeatureData[] = [
  {
    icon: faBolt,
    title: "Prestandaanalys",
    description:
      "Vi mäter laddtider, renderingshastighet och Core Web Vitals. Du ser exakt vad som gör din sida långsam.",
  },
  {
    icon: faMagnifyingGlassChart,
    title: "SEO-Granskning",
    description:
      "Metadata, rubriker, bildtexter och strukturerad data — vi kontrollerar allt som påverkar din ranking på Google.",
  },
  {
    icon: faMobileScreen,
    title: "Mobilupplevelse",
    description:
      "Vi testar hur din sida fungerar på mobil och surfplatta. Knappar, text, bilder och navigation granskas.",
  },
  {
    icon: faShieldHalved,
    title: "Säkerhetskontroll",
    description:
      "SSL-certifikat, uppdateringar och kända sårbarheter. Vi ser till att din sida inte är en risk för dina besökare.",
  },
  {
    icon: faChartLine,
    title: "Konverteringsanalys",
    description:
      "Hittar besökarna kontaktformuläret? Är uppmaningarna tydliga? Vi analyserar hur bra din sida konverterar.",
  },
  {
    icon: faCheck,
    title: "Åtgärdslista",
    description:
      "Du får en prioriterad lista med konkreta åtgärder — från snabba vinster du kan fixa idag till större förbättringar.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-15">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-10">
          <h2 className="text-[1.8rem] md:text-[2.2rem] font-semibold mb-5 text-accent-green">
            Vad vi granskar
          </h2>
          <p className="text-gray-text">
            En komplett genomgång av allt som påverkar din hemsidas
            prestanda och försäljning.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureItem key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
