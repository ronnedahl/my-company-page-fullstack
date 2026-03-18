import ProcessCard from "./ProcessCard";

const steps = [
  {
    step: 1,
    title: "Syftet med din hemsida",
    imageUrl:
      "/images/question.webp",
    imageAlt: "En man håller fram ett stort Frågetecken på vit bakgrund över ansiktet",
    subtitle: "Vad är syftet med din hemsida?",
    description:
      "Innan vi börjar är det viktigt att definiera vad hemsidan ska uppnå.",
  },
  {
    step: 2,
    title: "UI / UX - Design",
    imageUrl:
      "/images/ui-ux-design-hemsida-karlstad.webp",
    imageAlt: "Surfplatta med wireframes och UI UX design för hemsidor i Karlstad",
    subtitle: "Designen är hjärtat i hemsidan",
    description:
      "– här tar vi fram funktion, användarvänlighet och estetik.",
  },
  {
    step: 3,
    title: "Programmering",
    imageUrl:
      "/images/webbutveckling-programmering-karlstad.webp",
    imageAlt: "Skärm med kod och webbutveckling för företag i Karlstad",
    subtitle: "Programmering och utveckling",
    description:
      "När designen är på plats tar våra erfarna programmerare över.",
  },
  {
    step: 4,
    title: "Ny eller befintlig domän",
    imageUrl: "/images/https-doman-hemsida-karlstad.webp",
    imageAlt: "Mörk bakgrund med HTTPS text för säker domän och hemsida i Karlstad",
    subtitle: "Ny eller befintlig domän",
    description:
      "Har företaget redan en domän? Perfekt! Vi bygger din nya hemsida i en dold testmiljö. Din nuvarande sida är live och rullar på som vanligt tills vi är redo att byta. Saknar ni domän hjälper vi er givetvis att registrera en.",
  },
  {
    step: 5,
    title: "Lansering online",
    imageUrl:
      "/images/lansering-hemsida-online-karlstad.webp",
    imageAlt: "Mobil med Google sökning vid lansering av hemsida online i Karlstad",
    subtitle: "Nu är det dags att gå live",
    description:
      "När du har köpt din domän och vi har kopplat den till din hemsida är det dags att gå live.",
  },
  {
    step: 6,
    title: "Grattis - Du gjorde det",
    imageUrl: "/images/nojd-kund-hemsida-klar-karlstad.webp",
    imageAlt: "Nöjd man ger tummen upp framför ritningar när hemsidan är klar i Karlstad",
    subtitle: "Din hemsida är nu färdig",
    description:
      "– och redo att användas för att representera ditt företag online.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-10 sm:py-20">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-[1.5rem] md:text-[2.5rem] font-semibold text-center mb-12">
          Så här går processen till
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step) => (
            <ProcessCard key={step.step} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
