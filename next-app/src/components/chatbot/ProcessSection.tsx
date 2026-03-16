import type { StepData } from "@/types";
import StepCard from "../webbutveckling/StepCard";

const steps: StepData[] = [
  {
    number: "01",
    title: "Kunskapsinsamling",
    description:
      "Vi går igenom ditt företag tillsammans — tjänster, priser, vanliga frågor och tonalitet. Chatboten ska låta som dig, inte som en robot.",
  },
  {
    number: "02",
    title: "Träning & Anpassning",
    description:
      "Vi tränar AI:n på ditt material och finjusterar svaren tills de känns naturliga. Du godkänner allt innan vi går vidare.",
  },
  {
    number: "03",
    title: "Design & Integration",
    description:
      "Chatboten designas i dina färger och placeras på din hemsida. Den smälter in sömlöst utan att störa besökarens upplevelse.",
  },
  {
    number: "04",
    title: "Lansering & Uppföljning",
    description:
      "Vi går live och övervakar hur chatboten presterar. Du får statistik på vanliga frågor och vi justerar svaren löpande.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-card-bg py-20 my-15 rounded-[30px]">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-15">
          <h2 className="text-[1.5rem] md:text-[2.5rem] font-semibold mb-4">
            Från idé till intelligent kundtjänst
          </h2>
          <p className="max-w-[600px] mx-auto text-gray-text">
            Fyra steg till en chatbot som förstår ditt företag och hjälper dina
            kunder dygnet runt.
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
