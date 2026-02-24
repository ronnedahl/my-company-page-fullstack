import type { TestimonialData } from "@/types";
import TestimonialCard from "./TestimonialCard";
import SectionHeader from "@/components/ui/SectionHeader";

const testimonials: TestimonialData[] = [
  {
    text: "Sedan vi fick vår nya hemsida har bordsbokningarna ökat med 50%. Peter förstod exakt vad vi behövde och levererade snabbt.",
    authorName: "Anna L.",
    authorCompany: "Restaurang Smak",
  },
  {
    text: "Bokningssystemet har förändrat vår vardag. Vi slipper sitta i telefon och kalendern fylls på automatiskt. Fantastiskt!",
    authorName: "Erik B.",
    authorCompany: "Klipp & Trim",
  },
  {
    text: "AI-assistenten på vår hemsida svarar på offertförfrågningar dygnet runt. Vi har fått 50% fler leads sedan lanseringen.",
    authorName: "Sara M.",
    authorCompany: "Bygg & Montage AB",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-10 sm:py-20">
      <div className="max-w-[1200px] mx-auto px-5">
        <SectionHeader
          title="Vad våra kunder säger"
          subtitle="Vi låter resultaten och våra kunder tala för sig själva."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.authorName} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
