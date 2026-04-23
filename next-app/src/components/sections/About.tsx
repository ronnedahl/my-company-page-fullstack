import Image from "next/image";
import FadeInUp from "@/components/ui/FadeInUp";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-28">
      <div className="max-w-[1200px] mx-auto px-5">
        <FadeInUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-15">
            <div>
              <h2 className="text-[1.5rem] md:text-[2.5rem] font-semibold mb-5">Om Oss</h2>
              <p className="text-gray-text mb-5">
                Vi är en nystartad byrå med ett tydligt mål: att ge lokala företag
                tillgång till samma avancerade teknik som de stora jättarna, men
                till en bråkdel av priset.
              </p>
              <p className="text-gray-text">
                Genom att använda AI i vår utvecklingsprocess kan vi skapa allt
                från bokningssystem till kundsupportlösningar mycket snabbare än
                traditionella byråer. Det betyder lägre kostnader för dig och
                snabbare leverans, så att du kan fokusera på din verksamhet.
              </p>
            </div>
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden">
              <Image
                src="/images/webbutveckling-programmering-karlstad.webp"
                alt="Skärm med kod och webbutveckling för företag i Karlstad"
                fill
                className="object-cover brightness-75"
              />
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
