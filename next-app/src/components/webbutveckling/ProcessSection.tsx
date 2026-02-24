import type { StepData } from "@/types";
import StepCard from "./StepCard";

const steps: StepData[] = [
  {
    number: "01",
    title: "SEO-Analys & Kartläggning",
    description:
      "Innan vi skriver en rad kod använder vi AI för att skanna din nuvarande sida. Vi kartlägger alla dina URL:er, nyckelord och vilket innehåll som driver trafik idag. Vi sparar \"DNA:t\" från din gamla sida.",
  },
  {
    number: "02",
    title: "Spegling av Struktur",
    description:
      "När vi bygger den nya designen behåller vi i största möjliga mån samma URL-struktur (t.ex. /tjanster/klippning). Om en adress måste bytas skapar vi vattentäta \"301 redirects\" så att ingen hamnar på en felsida.",
  },
  {
    number: "03",
    title: "Prestanda-optimering",
    description:
      "Google älskar snabba sidor. Vi bygger den nya sidan med renare kod och optimerade bilder. Ofta ser våra kunder en ranking-boost strax efter lansering bara för att den nya sidan är snabbare.",
  },
  {
    number: "04",
    title: "Stegvis Lansering",
    description:
      "Vi trycker inte bara på en knapp. Vi lanserar, övervakar i realtid via Google Search Console och justerar omedelbart om vi ser några dippar. Vi släpper inte din hand förrän trafiken är stabil eller ökande.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-white py-20 my-15 rounded-[30px]">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-15">
          <h2 className="text-[1.8rem] md:text-[2.5rem] font-semibold mb-4">
            Så säkrar vi din Google-ranking
          </h2>
          <p className="max-w-[600px] mx-auto text-gray-text">
            Att byta hemsida ska öka trafiken, inte döda den. Här är vår process
            för att migrera befintliga sidor säkert.
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
