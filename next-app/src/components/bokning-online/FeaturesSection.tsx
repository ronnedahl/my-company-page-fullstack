import {
  faCalendarDays,
  faBell,
  faMobileScreen,
  faClock,
  faSliders,
  faChartLine,
} from "@/lib/icons";
import type { FeatureData } from "@/types";
import FeatureItem from "../webbutveckling/FeatureItem";

const features: FeatureData[] = [
  {
    icon: faCalendarDays,
    title: "Smart Kalender",
    description:
      "Visar bara lediga tider baserat på din tillgänglighet. Kunderna ser aldrig tider som redan är bokade.",
  },
  {
    icon: faBell,
    title: "Automatiska Påminnelser",
    description:
      "Kunden får bekräftelse direkt och en påminnelse innan besöket. Färre no-shows, mer intäkter.",
  },
  {
    icon: faMobileScreen,
    title: "Fungerar i Mobilen",
    description:
      "Över 60% bokar via mobilen. Vårt system är byggt mobile-first så att det fungerar smidigt på alla enheter.",
  },
  {
    icon: faClock,
    title: "Öppet Dygnet Runt",
    description:
      "Ditt bokningssystem sover aldrig. Kunder kan boka mitt i natten, på lunchen eller under helgen.",
  },
  {
    icon: faSliders,
    title: "Anpassade Tjänster",
    description:
      "Definiera olika tjänster med olika tider och priser. Kunden väljer vad de behöver och systemet anpassar sig.",
  },
  {
    icon: faChartLine,
    title: "Statistik & Insikter",
    description:
      "Se vilka tider som är populärast, vilka tjänster som bokas mest och hur din beläggning ser ut över tid.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-15">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-10">
          <h2 className="text-[1.5rem] md:text-[2.2rem] font-semibold mb-5 text-accent-green">
            Allt du behöver i ett bokningssystem
          </h2>
          <p className="text-gray-text">
            Funktioner som gör det enkelt för både dig och dina kunder.
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
