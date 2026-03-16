import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="py-15">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-15 items-center">
          <div className="relative rounded-[20px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
            <Image
              src="/images/seo-connections.webp"
              alt="Google sökresultat"
              width={600}
              height={400}
              className="w-full h-auto rounded-[20px]"
            />
          </div>
          <div>
            <h2 className="text-[1.5rem] md:text-[2.2rem] font-semibold mb-5 text-accent-green">
              93% av alla onlineupplevelser börjar med en sökning
            </h2>
            <p className="text-gray-text mb-5">
              Om ditt företag inte syns på första sidan i Google finns du i
              princip inte. De flesta klickar aldrig vidare till sida två.
            </p>
            <p className="text-gray-text mb-5">
              <strong>Lokal SEO är din superkraft.</strong> När någon i Karlstad
              söker efter din typ av tjänst ska ditt företag dyka upp — med rätt
              information, bra recensioner och en hemsida som Google älskar.
            </p>
            <p className="text-gray-text mb-5">
              Vi kombinerar teknisk optimering med smart innehållsstrategi för
              att ge dig en hållbar position i sökresultaten. Inga genvägar,
              bara metoder som fungerar långsiktigt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
