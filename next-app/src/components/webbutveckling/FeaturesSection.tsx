import {
  faLeaf,
  faLayerGroup,
  faCalendarDays,
  faMobileScreen,
  faBolt,
  faPenRuler,
} from "@/lib/icons";
import type { FeatureData } from "@/types";
import FeatureItem from "./FeatureItem";

const features: FeatureData[] = [
  {
    icon: faLeaf,
    title: "Landningssidor",
    description:
      "Enkla, snygga sidor designade för att konvertera besökare till kunder. Perfekt för kampanjer eller mindre lokala firmor.",
  },
  {
    icon: faLayerGroup,
    title: "Företagswebbplatser",
    description:
      "Kompletta hemsidor med flera undersidor, blogg, kontaktformulär och integrationer mot sociala medier.",
  },
  {
    icon: faCalendarDays,
    title: "Bokningssystem",
    description:
      "Vi bygger in smarta kalendrar där dina kunder kan boka tider direkt. Synkas automatiskt med din telefon.",
  },
  {
    icon: faMobileScreen,
    title: "Mobilanpassat (Responsive)",
    description:
      "Över 60% av dina kunder surfar i mobilen. Våra sidor ser fantastiska ut på alla skärmar, från iPhone till desktop.",
  },
  {
    icon: faBolt,
    title: "Blixtsnabb laddning",
    description:
      "Vi optimerar koden så att dina kunder slipper vänta. Detta är avgörande för både användarupplevelse och SEO.",
  },
  {
    icon: faPenRuler,
    title: "Enkel redigering",
    description:
      "Du ska inte behöva oss för att byta en text. Vi bygger system där du enkelt kan uppdatera innehåll själv om du vill.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-15">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-10">
          <h2 className="text-[1.8rem] md:text-[2.2rem] font-semibold mb-5 text-accent-green">
            Vad vi kan bygga åt dig
          </h2>
          <p className="text-gray-text">
            Oavsett storlek på ditt företag har vi en lösning som passar.
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
