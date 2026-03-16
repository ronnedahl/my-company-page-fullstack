import {
  faRobot,
  faClock,
  faChartLine,
  faMobileScreen,
  faShieldHalved,
  faGear,
} from "@/lib/icons";
import type { FeatureData } from "@/types";
import FeatureItem from "../webbutveckling/FeatureItem";

const features: FeatureData[] = [
  {
    icon: faRobot,
    title: "Naturliga Svar",
    description:
      "AI:n förstår frågor formulerade på olika sätt och svarar med en mänsklig ton — anpassad efter ditt varumärke.",
  },
  {
    icon: faClock,
    title: "Tillgänglig Dygnet Runt",
    description:
      "Chatboten tar aldrig ledigt. Dina kunder får svar oavsett om det är mitt i natten eller på en helgdag.",
  },
  {
    icon: faChartLine,
    title: "Statistik & Insikter",
    description:
      "Se vilka frågor som ställs mest, när kunderna är aktiva och vilka ämnen som behöver bättre svar.",
  },
  {
    icon: faMobileScreen,
    title: "Fungerar Överallt",
    description:
      "Chatboten anpassar sig automatiskt till mobil, surfplatta och desktop. Samma smidiga upplevelse överallt.",
  },
  {
    icon: faShieldHalved,
    title: "GDPR-Anpassad",
    description:
      "All data hanteras enligt GDPR. Inga personuppgifter lagras utan samtycke och du har full kontroll.",
  },
  {
    icon: faGear,
    title: "Enkel Uppdatering",
    description:
      "Ändra priser, öppettider eller lägg till nya svar när som helst. Du behöver ingen teknisk kunskap.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-15">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-10">
          <h2 className="text-[1.5rem] md:text-[2.2rem] font-semibold mb-5 text-accent-green">
            Vad din chatbot kan göra
          </h2>
          <p className="text-gray-text">
            En smart assistent som gör mer än att bara svara på frågor.
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
