import {
  faMagnifyingGlassChart,
  faLocationDot,
  faBolt,
  faChartLine,
  faMobileScreen,
  faPenRuler,
} from "@/lib/icons";
import type { FeatureData } from "@/types";
import FeatureItem from "../webbutveckling/FeatureItem";

const features: FeatureData[] = [
  {
    icon: faMagnifyingGlassChart,
    title: "Nyckelordsanalys",
    description:
      "Vi hittar de sökord som dina kunder faktiskt använder och optimerar ditt innehåll för att ranka på dem.",
  },
  {
    icon: faLocationDot,
    title: "Lokal SEO",
    description:
      "Google My Business, lokala sökord och kartresultat. Vi ser till att du syns när någon i närheten söker.",
  },
  {
    icon: faBolt,
    title: "Teknisk SEO",
    description:
      "Snabba laddtider, ren kod, rätt metadata och strukturerad data. Allt som Google behöver för att älska din sida.",
  },
  {
    icon: faChartLine,
    title: "Månadsrapporter",
    description:
      "Tydliga rapporter med ranking, trafik och konverteringar. Du ser exakt vilka resultat vårt arbete ger.",
  },
  {
    icon: faMobileScreen,
    title: "Mobiloptimering",
    description:
      "Google prioriterar mobilanpassade sidor. Vi ser till att din sida fungerar perfekt på alla enheter.",
  },
  {
    icon: faPenRuler,
    title: "Innehållsstrategi",
    description:
      "Vi hjälper dig skapa innehåll som både Google och dina kunder älskar — blogginlägg, tjänstesidor och FAQ.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-15">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-10">
          <h2 className="text-[1.5rem] md:text-[2.2rem] font-semibold mb-5 text-accent-green">
            Vad ingår i vår SEO-tjänst
          </h2>
          <p className="text-gray-text">
            Allt du behöver för att klättra i sökresultaten och stanna kvar där.
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
