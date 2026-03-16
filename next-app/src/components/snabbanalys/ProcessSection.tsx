import type { StepData } from "@/types";
import StepCard from "../webbutveckling/StepCard";

const steps: StepData[] = [
  {
    number: "01",
    title: "Skicka Din URL",
    description:
      "Du skickar länken till din hemsida. Det är allt vi behöver för att komma igång. Ingen installation, inget krångel.",
  },
  {
    number: "02",
    title: "Vi Analyserar",
    description:
      "Vi granskar prestanda, SEO, mobilanpassning, säkerhet och användarupplevelse med professionella verktyg och AI.",
  },
  {
    number: "03",
    title: "Du Får Rapporten",
    description:
      "Inom 24 timmar får du en tydlig rapport med poäng, problem och konkreta åtgärdsförslag — sorterade efter prioritet.",
  },
  {
    number: "04",
    title: "Vi Fixar (Om Du Vill)",
    description:
      "Vill du att vi åtgärdar problemen? Vi ger dig ett fast pris och sätter igång. Annars tar du listan och gör det i din takt.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-card-bg py-20 my-15 rounded-[30px]">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-15">
          <h2 className="text-[1.5rem] md:text-[2.5rem] font-semibold mb-4">
            Från analys till resultat
          </h2>
          <p className="max-w-[600px] mx-auto text-gray-text">
            Fyra enkla steg till en hemsida som presterar bättre och ger fler
            kunder.
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
