import type { StepData } from "@/types";
import StepCard from "../webbutveckling/StepCard";

const steps: StepData[] = [
  {
    number: "01",
    title: "Behovsanalys",
    description:
      "Vi kartlägger din verksamhet — vilka tjänster du erbjuder, hur lång tid de tar och vilka tider som passar. Vi anpassar bokningssystemet efter just ditt flöde.",
  },
  {
    number: "02",
    title: "Design & Integration",
    description:
      "Vi bygger in bokningskalendern direkt på din hemsida med samma färger och stil. Besökaren behöver aldrig lämna din sida för att boka.",
  },
  {
    number: "03",
    title: "Automatisering",
    description:
      "Bekräftelsemail, påminnelser och synkning med din kalender sätts upp automatiskt. Du slipper manuellt arbete för varje bokning.",
  },
  {
    number: "04",
    title: "Lansering & Support",
    description:
      "Vi testar allt noggrant innan vi går live. Efter lansering får du en genomgång så du kan hantera bokningar med självförtroende.",
  },
];

export default function ProcessSection() {
  return (
    <section className="glass-card py-20 my-15 rounded-[30px]">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-15">
          <h2 className="text-[1.5rem] md:text-[2.5rem] font-semibold mb-4">
            Från telefonkaos till smart bokning
          </h2>
          <p className="max-w-[600px] mx-auto text-gray-text">
            Fyra steg till ett bokningssystem som sparar tid åt dig och gör det
            enklare för dina kunder.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <StepCard key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
