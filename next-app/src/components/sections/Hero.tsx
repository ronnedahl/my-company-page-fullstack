import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowDown, faChartLine } from "@/lib/icons";
import ButtonPrimary from "@/components/ui/ButtonPrimary";
import ButtonOutline from "@/components/ui/ButtonOutline";

export default function Hero() {
  return (
    <section id="home" className="text-center pt-15 pb-10">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="uppercase tracking-[2px] text-gray-text mb-2.5 flex items-center justify-center gap-4 font-semibold text-sm">
          <span className="w-10 h-px bg-border" />
          Din Lokala Partner
          <span className="w-10 h-px bg-border" />
        </div>

        <h1 className="text-2xl md:text-[3.5rem] font-semibold mb-5 tracking-tight leading-tight">
          Vi hjälper Karlstads företag att växa digitalt
        </h1>

        <p className="max-w-[600px] mx-auto mb-8 text-gray-text">
          Vi hjälper lokala företag i Karlstad att växa digitalt. Oavsett om du
          behöver fixa din nuvarande sida eller bygga nytt från grunden, gör vi
          det snabbare och billigare med hjälp av modern AI-teknik – utan att
          tumma på kvaliteten.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <ButtonPrimary href="/booking" icon={faArrowRight}>
            Boka Gratis Rådgivning
          </ButtonPrimary>
          <ButtonOutline href="#pricing" icon={faArrowDown}>
            Se Våra Paket
          </ButtonOutline>
        </div>

        <div className="relative rounded-[20px] overflow-hidden h-[500px]">
          <Image
            src="/images/karlstad-city.png"
            alt="Karlstad"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute top-10 left-10 bg-white/60 backdrop-blur-[10px] px-6 py-4 rounded-xl text-black flex items-center gap-4 border border-white/30">
            <div className="bg-white/30 w-10 h-10 rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon={faChartLine} />
            </div>
            <div>
              <div className="font-semibold text-[0.9rem]">ÖKA DIN</div>
              <div className="text-[0.8rem] opacity-80">FÖRSÄLJNING</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
