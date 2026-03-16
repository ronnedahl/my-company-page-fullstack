import {
  faBolt,
  faLayerGroup,
  faMobileScreen,
  faChartLine,
  faCode,
  faShieldHalved,
} from "@/lib/icons";
import type { FeatureData } from "@/types";
import FeatureItem from "../webbutveckling/FeatureItem";

const features: FeatureData[] = [
  {
    icon: faBolt,
    title: "Bildoptimering",
    description:
      "Vi komprimerar och konverterar bilder till moderna format som WebP och AVIF utan synlig kvalitetsförlust.",
  },
  {
    icon: faLayerGroup,
    title: "Smart Caching",
    description:
      "Rätt caching-strategi gör att återkommande besökare upplever sidan som nästan omedelbar.",
  },
  {
    icon: faCode,
    title: "Kodoptimering",
    description:
      "Vi minifierar CSS och JavaScript, tar bort oanvänd kod och optimerar laddningsordningen för snabbare rendering.",
  },
  {
    icon: faChartLine,
    title: "Core Web Vitals",
    description:
      "Vi optimerar LCP, FID och CLS — de tre mätvärdena Google använder för att bedöma din sidas upplevelse.",
  },
  {
    icon: faMobileScreen,
    title: "Mobilprestanda",
    description:
      "Mobila enheter har begränsad kraft. Vi optimerar specifikt för mobil så att sidan flyger även på äldre telefoner.",
  },
  {
    icon: faShieldHalved,
    title: "Övervakning",
    description:
      "Vi sätter upp automatisk övervakning som varnar om prestandan försämras så att du alltid ligger i framkant.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-15">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-10">
          <h2 className="text-[1.8rem] md:text-[2.2rem] font-semibold mb-5 text-accent-green">
            Vad vi optimerar
          </h2>
          <p className="text-gray-text">
            En komplett prestandaoptimering som täcker alla delar av din
            hemsida.
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
