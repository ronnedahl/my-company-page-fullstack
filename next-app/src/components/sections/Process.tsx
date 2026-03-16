import ProcessCard from "./ProcessCard";

const steps = [
  {
    step: 1,
    title: "Syftet med din hemsida",
    imageUrl:
      "/images/question.webp",
    imageAlt: "Frågetecken och planering",
    subtitle: "Vad är syftet med din hemsida?",
    description:
      "Innan vi börjar är det viktigt att definiera vad hemsidan ska uppnå.",
  },
  {
    step: 2,
    title: "UI / UX - Design",
    imageUrl:
      "/images/design-web.webp",
    imageAlt: "Webbdesign på laptop",
    subtitle: "Designen är hjärtat i hemsidan",
    description:
      "– här tar vi fram funktion, användarvänlighet och estetik.",
  },
  {
    step: 3,
    title: "Programmering",
    imageUrl:
      "/images/code.webp",
    imageAlt: "Kod på en skärm",
    subtitle: "Programmering och utveckling",
    description:
      "När designen är på plats tar våra erfarna programmerare över.",
  },
  {
    step: 4,
    title: "Ny eller befintlig domän",
    imageUrl: "/images/domain.webp",
    imageAlt: "HTTPS och domännamn",
    subtitle: "Ny eller befintlig domän",
    description:
      "Har företaget redan en domän? Perfekt! Vi bygger din nya hemsida i en dold testmiljö. Din nuvarande sida är live och rullar på som vanligt tills vi är redo att byta. Saknar ni domän hjälper vi er givetvis att registrera en.",
  },
  {
    step: 5,
    title: "Lansering online",
    imageUrl:
      "/images/live.webp",
    imageAlt: "Google på en surfplatta",
    subtitle: "Nu är det dags att gå live",
    description:
      "När du har köpt din domän och vi har kopplat den till din hemsida är det dags att gå live.",
  },
  {
    step: 6,
    title: "Grattis - Du gjorde det",
    imageUrl: "/images/thumbs-up.webp",
    imageAlt: "Glad person vid laptop",
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
