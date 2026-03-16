import type { StepData } from "@/types";
import StepCard from "../webbutveckling/StepCard";

const steps: StepData[] = [
  {
    number: "01",
    title: "Prestandatest",
    description:
      "Vi kör din sida genom Google Lighthouse, PageSpeed Insights och WebPageTest. Du får en tydlig bild av nuläget med poäng och flaskhalsar.",
  },
  {
    number: "02",
    title: "Optimeringsplan",
    description:
      "Vi prioriterar åtgärderna efter störst effekt. Ofta kan enkla förändringar som bildoptimering och caching ge dramatiska förbättringar.",
  },
  {
    number: "03",
    title: "Implementation",
    description:
      "Vi optimerar bilder, minifierar kod, konfigurerar caching och förbättrar serverresponsen. Allt utan att ändra design eller funktionalitet.",
  },
  {
    number: "04",
    title: "Verifiering & Övervakning",
    description:
      "Vi kör nya tester för att verifiera förbättringarna och sätter upp övervakning så att prestandan inte försämras över tid.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-card-bg py-20 my-15 rounded-[30px]">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-15">
          <h2 className="text-[1.5rem] md:text-[2.5rem] font-semibold mb-4">
            Från långsam till blixtsnabb
          </h2>
          <p className="max-w-[600px] mx-auto text-gray-text">
            Vår beprövade process för att göra din hemsida snabbare utan att
            kompromissa med design eller funktionalitet.
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
