import type { CaseStudyData } from "@/types";
import CaseStudy from "./CaseStudy";

const caseStudies: CaseStudyData[] = [
  {
    tag: "Synlighet Online",
    title: "88% av konsumenter söker online innan de gör ett köp lokalt",
    description:
      "Utan en professionell hemsida missar du majoriteten av dina potentiella kunder redan innan de bestämt sig.",
    imageUrl:
      "/images/lokal-soksynlighet-google-karlstad.webp",
    imageAlt: "Hand håller mobil med Google Maps och lokal söksynlighet för företag i Karlstad",
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
      "/images/snabb-hemsida-laddtid-karlstad.webp",
    imageAlt: "Laptop med hastighetsmätare som visar snabb laddtid för hemsidor i Karlstad",
    statValue: "50%",
    statLabel: "Lägre Avvisning",
    statPosition: "bottom-right",
    reverse: true,
  },
  {
    tag: "Snabb Respons",
    title: "Företag som svarar inom 5 minuter har 9 gånger högre chans att få kunden",
    description:
      "Med ett smart kontaktformulär eller bokningssystem kan du fånga kunden direkt — även utanför kontorstid.",
    imageUrl:
      "/images/bokningssystem-foretag-karlstad.webp",
    imageAlt: "Laptop med bokningssystem och kaffekopp för företag i Karlstad",
    statValue: "9x",
    statLabel: "Högre Chans",
    statPosition: "left",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-10 sm:py-20">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-15 gap-5">
          <div>
            <h2 className="text-[1.5rem] md:text-[2.5rem] font-semibold mb-2.5">
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
