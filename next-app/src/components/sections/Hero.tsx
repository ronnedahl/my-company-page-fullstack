import Image from "next/image";
import { faArrowRight, faArrowDown } from "@/lib/icons";
import ButtonPrimary from "@/components/ui/ButtonPrimary";
import ButtonOutline from "@/components/ui/ButtonOutline";

export default function Hero() {
  return (
    <section id="home" className="relative h-[85vh] min-h-[500px] flex items-end">
      <Image
        src="/images/karlstad-city.png"
        alt="Karlstad"
        fill
        className="object-cover"
        priority
      />

      {/* Gradient overlay — transparent top, solid bg bottom */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, #1A1A1A 0%, rgba(26,26,26,0.7) 40%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 pb-15 w-full">
        <div className="uppercase tracking-[2px] text-gray-text mb-3 flex items-center gap-4 font-semibold text-sm">
          <span className="w-10 h-px bg-border" />
          Din Lokala Partner
        </div>

        <h1 className="text-3xl md:text-[3.5rem] font-semibold mb-5 tracking-tight leading-tight max-w-[700px] text-white">
          Vi hjälper Karlstads företag att växa digitalt
        </h1>

        <p className="max-w-[550px] mb-8 text-white/80">
          Oavsett om du behöver fixa din nuvarande sida eller bygga nytt från
          grunden, gör vi det snabbare och billigare med hjälp av modern
          AI-teknik – utan att tumma på kvaliteten.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <ButtonPrimary href="/booking" icon={faArrowRight}>
            Boka Gratis Rådgivning
          </ButtonPrimary>
          <ButtonOutline href="#pricing" icon={faArrowDown}>
            Se Våra Paket
          </ButtonOutline>
        </div>
      </div>
    </section>
  );
}
