import type { CaseStudyData } from "@/types";
import CaseStudy from "./CaseStudy";
import ButtonOutline from "@/components/ui/ButtonOutline";

const caseStudies: CaseStudyData[] = [
  {
    tag: "SEO & Optimering",
    title: "Ökade bordsbokningarna med 50% för lokal restaurang",
    description:
      "Genom att optimera restaurangens gamla sida för Google och lägga till menyer som laddar snabbt i mobilen, ökade vi antalet besökare med 50%.",
    imageUrl:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Office work",
    statValue: "+50%",
    statLabel: "Organisk Trafik",
    statPosition: "left",
  },
  {
    tag: "Bokningssystem",
    title: "75% fler bokningar för frisörsalongen",
    description:
      "Vi byggde en ny hemsida med integrerat bokningssystem. Det minskade tiden i telefon och fyllde kalendern automatiskt.",
    imageUrl:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Creative meeting",
    statValue: "+75%",
    statLabel: "Fler Bokningar",
    statPosition: "bottom-right",
    reverse: true,
  },
  {
    tag: "AI & Varumärke",
    title: "50% fler leads med AI-assistent för byggfirma",
    description:
      "Med en AI-assistent på hemsidan kan byggfirman nu svara på offertförfrågningar dygnet runt, vilket ökade inkommande leads markant.",
    imageUrl:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Brand strategy",
    statValue: "+50%",
    statLabel: "Fler Leads",
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
              Tidigare Projekt
            </h2>
            <p className="text-gray-text max-w-[400px]">
              Se hur vi har hjälpt andra lokala företag att modernisera sin
              närvaro och öka sin försäljning.
            </p>
          </div>
          <ButtonOutline href="#">Se Fler Case &gt;</ButtonOutline>
        </div>

        {caseStudies.map((study) => (
          <CaseStudy key={study.title} {...study} />
        ))}
      </div>
    </section>
  );
}
