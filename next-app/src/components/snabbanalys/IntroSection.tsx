import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="py-15">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-15 items-center">
          <div className="relative rounded-[20px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
              alt="Webbanalys och data"
              width={600}
              height={400}
              className="w-full h-auto rounded-[20px]"
            />
          </div>
          <div>
            <h2 className="text-[1.5rem] md:text-[2.2rem] font-semibold mb-5 text-accent-green">
              Din hemsida kan mer än du tror
            </h2>
            <p className="text-gray-text mb-5">
              De flesta hemsidor har dolda problem som kostar pengar — långsam
              laddtid, dålig mobilupplevelse, saknad SEO eller otydliga
              uppmaningar. Små saker som gör att besökare lämnar istället för
              att bli kunder.
            </p>
            <p className="text-gray-text mb-5">
              <strong>Vår snabbanalys avslöjar allt.</strong> Vi granskar din
              sida med samma verktyg som de stora byråerna använder och ger dig
              en prioriterad lista på åtgärder — från snabba vinster till
              långsiktiga förbättringar.
            </p>
            <p className="text-gray-text mb-5">
              Du bestämmer sedan om du vill att vi fixar det, eller om du tar
              listan och gör det själv. Ingen press, bara ärlig rådgivning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
