import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="py-15">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-15 items-center">
          <div className="relative rounded-[20px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
            <Image
              src="/images/speed-site.jpg"
              alt="Snabb server och prestanda"
              width={600}
              height={400}
              className="w-full h-auto rounded-[20px]"
            />
          </div>
          <div>
            <h2 className="text-[1.6rem] md:text-[2.2rem] font-semibold mb-5 text-accent-green">
              Långsamma sidor kostar pengar
            </h2>
            <p className="text-gray-text mb-5">
              53% av mobilanvändare lämnar en sida som tar längre än 3 sekunder
              att ladda. Varje sekund extra laddtid minskar konverteringen med
              upp till 7%.
            </p>
            <p className="text-gray-text mb-5">
              <strong>Google straffar långsamma sidor.</strong> Sedan 2021
              är Core Web Vitals en rankingfaktor. Det betyder att en snabbare
              sida inte bara ger bättre upplevelse — den syns också högre i
              sökresultaten.
            </p>
            <p className="text-gray-text mb-5">
              Vi analyserar din sida på djupet och optimerar allt från bilder
              och kod till serverns svarstid. Resultatet? En sida som laddar på
              under en sekund.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
