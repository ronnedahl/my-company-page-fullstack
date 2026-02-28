import ProcessCard from "./ProcessCard";

const steps = [
  {
    step: 1,
    title: "Syftet med din hemsida",
    imageUrl:
      "https://images.unsplash.com/photo-1633613286991-611fe299c4be?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Frågetecken och planering",
    subtitle: "Vad är syftet med din hemsida?",
    description:
      "Innan vi börjar är det viktigt att definiera vad hemsidan ska uppnå.",
  },
  {
    step: 2,
    title: "UI / UX - Design",
    imageUrl:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Webbdesign på laptop",
    subtitle: "Designen är hjärtat i hemsidan",
    description:
      "– här tar vi fram funktion, användarvänlighet och estetik.",
  },
  {
    step: 3,
    title: "Programmering",
    imageUrl:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Kod på en skärm",
    subtitle: "Programmering och utveckling",
    description:
      "När designen är på plats tar våra erfarna programmerare över.",
  },
  {
    step: 4,
    title: "Dags att köpa en domän",
    imageUrl:
      "https://images.unsplash.com/photo-1563986768609-322da13575f2?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "HTTPS och domännamn",
    subtitle: "Vad är en domän?",
    description:
      "För att din hemsida ska synas online behöver du en domän.",
  },
  {
    step: 5,
    title: "Lansering online",
    imageUrl:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Google på en surfplatta",
    subtitle: "Nu är det dags att gå live",
    description:
      "När du har köpt din domän och vi har kopplat den till din hemsida är det dags att gå live.",
  },
  {
    step: 6,
    title: "Grattis - Du gjorde det",
    imageUrl:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Glad person vid laptop",
    subtitle: "Din hemsida är nu färdig",
    description:
      "– och redo att användas för att representera ditt företag online.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-10 sm:py-20 bg-[#0b131e]">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-[1.8rem] md:text-[2.5rem] font-semibold text-white text-center mb-12">
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
