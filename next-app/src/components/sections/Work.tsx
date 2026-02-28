import type { CaseStudyData } from "@/types";
import CaseStudy from "./CaseStudy";

const caseStudies: CaseStudyData[] = [
  {
    tag: "Synlighet Online",
    title: "88% av konsumenter söker online innan de gör ett köp lokalt",
    description:
      "Utan en professionell hemsida missar du majoriteten av dina potentiella kunder redan innan de bestämt sig.",
    imageUrl:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Person som söker på mobilen",
    statValue: "88%",
    statLabel: "Söker Online Först",
    statPosition: "left",
  },
  {
    tag: "Prestanda",
    title: "Hemsidor som laddar på under 2 sekunder har 50% lägre avvisningsfrekvens",
    description:
      "Hastighet avgör om besökaren stannar eller lämnar. En snabb hemsida behåller fler kunder och rankas högre på Google.",
    imageUrl:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Snabb webbupplevelse",
    statValue: "50%",
    statLabel: "Lägre Avvisning",
    statPosition: "bottom-right",
    reverse: true,
  },
  {
    tag: "Snabb Respons",
    title: "Företag som svarar på leads inom 5 minuter har 9 gånger högre chans att få kunden",
    description:
      "Med ett smart kontaktformulär eller bokningssystem kan du fånga kunden direkt — även utanför kontorstid.",
    imageUrl:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Snabb kundkontakt",
    statValue: "9x",
    statLabel: "Högre Chans",
    statPosition: "left",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-20">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-15 gap-5">
          <div>
            <h2 className="text-[1.8rem] md:text-[2.5rem] font-semibold mb-2.5">
              Visste du att...
            </h2>
            <p className="text-gray-text max-w-[400px]">
              Fakta som visar varför en professionell webbnärvaro är avgörande
              för ditt företag.
            </p>
          </div>
        </div>

        {caseStudies.map((study) => (
          <CaseStudy key={study.title} {...study} />
        ))}
      </div>
    </section>
  );
}
