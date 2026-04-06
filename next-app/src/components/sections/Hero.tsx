import { faArrowRight, faArrowDown } from "@/lib/icons";
import ButtonPrimary from "@/components/ui/ButtonPrimary";
import ButtonOutline from "@/components/ui/ButtonOutline";

export default function Hero() {
  return (
    <section id="home" className="relative h-[85vh] min-h-[500px] flex items-end overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for text readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, #000000 0%, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 pb-15 w-full">
        <div className="uppercase tracking-[2px] text-gray-text mb-3 flex items-center gap-4 font-semibold text-sm">
          <span className="w-10 h-px bg-accent-green/50" />
          Din Lokala Partner
        </div>

        <h1 className="text-[2rem] md:text-[3.5rem] font-semibold mb-5 tracking-tight leading-tight max-w-[700px] text-white">
          Vi hjälper Karlstads företag att växa digitalt
        </h1>

        <p className="max-w-[550px] mb-8 text-white/80">
          Oavsett om du behöver fixa din nuvarande sida eller bygga nytt från
          grunden, gör vi det snabbare och billigare med hjälp av modern
          AI-teknik – utan att tumma på kvaliteten.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <ButtonPrimary href="#contact" icon={faArrowRight}>
            Gratis Analys Av Din Sida
          </ButtonPrimary>
          <ButtonOutline href="#pricing" icon={faArrowDown}>
            Se Våra Paket
          </ButtonOutline>
        </div>
      </div>
    </section>
  );
}
