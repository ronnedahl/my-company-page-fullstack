import type { StepData } from "@/types";
import StepCard from "../webbutveckling/StepCard";

const steps: StepData[] = [
  {
    number: "01",
    title: "SEO-Analys",
    description:
      "Vi granskar din hemsida med professionella verktyg — teknisk status, nyckelord, konkurrenter och Google-ranking. Du får en tydlig bild av nuläget.",
  },
  {
    number: "02",
    title: "Nyckelordsstrategi",
    description:
      "Vi identifierar vilka sökord dina kunder faktiskt använder och bygger en strategi kring de mest lönsamma. Lokala sökord prioriteras.",
  },
  {
    number: "03",
    title: "Optimering",
    description:
      "Vi optimerar sidans teknik, innehåll och struktur. Snabbare laddtider, bättre rubriker, rätt metadata och mobilanpassning.",
  },
  {
    number: "04",
    title: "Uppföljning & Rapport",
    description:
      "Du får månatliga rapporter med ranking, trafik och konverteringar. Vi justerar strategin baserat på faktiska resultat.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-card-bg py-20 my-15 rounded-[30px]">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-15">
          <h2 className="text-[1.5rem] md:text-[2.5rem] font-semibold mb-4">
            Så tar vi dig till toppen av Google
          </h2>
          <p className="max-w-[600px] mx-auto text-gray-text">
            En beprövad process som ger resultat — steg för steg mot bättre
            synlighet och fler kunder.
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
