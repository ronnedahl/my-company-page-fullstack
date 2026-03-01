import Image from "next/image";
import ButtonPrimary from "@/components/ui/ButtonPrimary";
import { faArrowRight } from "@/lib/icons";

export default function Who() {
  return (
    <section id="who" className="py-10 sm:py-20">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-center text-center md:text-left">
          <div className="relative aspect-square max-w-[300px] md:max-w-none mx-auto md:mx-0">
            <Image
              src="/images/peter-smile.png"
              alt="Grundare av Växtkraft Webb"
              fill
              className="object-cover rounded-[20px] brightness-50 object-[center_25%]"
            />
          </div>
          <div>
            <h2 className="text-[1.8rem] md:text-[2.5rem] font-semibold mb-5">
              Vem står bakom Växtkraft Webb?
            </h2>
            <p className="text-gray-text mb-5">
              Jag heter Peter och driver Växtkraft Webb från Karlstad. Med en
              passion för modern teknik och ett genuint intresse för lokala
              företag hjälper jag dig att ta steget in i den digitala världen.
            </p>
            <p className="text-gray-text mb-5">
              Som din lokala partner finns jag alltid nära till hands. Ingen stor
              anonym byrå — utan en personlig kontakt som förstår ditt företag
              och dina behov. Jag kombinerar AI-verktyg med kreativt hantverk för
              att leverera snabbare, smartare och till ett bättre pris.
            </p>
            <ButtonPrimary
              href="#contact"
              icon={faArrowRight}
              className="justify-center md:justify-start"
            >
              Hör av dig
            </ButtonPrimary>
          </div>
        </div>
      </div>
    </section>
  );
}
