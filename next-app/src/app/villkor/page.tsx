import type { Metadata } from "next";
import ServiceHeader from "@/components/layout/ServiceHeader";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Allmänna Villkor",
  description:
    "Läs Webbkrafts allmänna villkor för tjänster inom webbutveckling och digital marknadsföring.",
  alternates: { canonical: "/villkor" },
  openGraph: {
    title: "Allmänna Villkor | Webbkraft",
    description:
      "Läs Webbkrafts allmänna villkor för tjänster inom webbutveckling och digital marknadsföring.",
  },
};

export default function VillkorPage() {
  return (
    <>
      <ServiceHeader />
      <main className="max-w-[800px] mx-auto px-5 py-15">
        <h1 className="text-[2rem] md:text-[3rem] font-semibold mb-8">
          Allmänna Villkor
        </h1>
        <p className="text-gray-text mb-4">
          Senast uppdaterad: 2026-03-16
        </p>

        <h2 className="text-[1.5rem] font-semibold mb-4 mt-10">
          1. Allmänt
        </h2>
        <p className="text-gray-text mb-4">
          Dessa villkor gäller för alla tjänster som levereras av Webbkraft,
          med säte i Karlstad. Genom att anlita oss godkänner du dessa villkor.
        </p>

        <h2 className="text-[1.5rem] font-semibold mb-4 mt-10">
          2. Tjänster
        </h2>
        <p className="text-gray-text mb-4">
          Vi erbjuder webbutveckling, SEO, AI-chatbotar, bokningssystem,
          prestandaoptimering och webbanalys. Omfattningen av varje uppdrag
          specificeras i en separat offert.
        </p>

        <h2 className="text-[1.5rem] font-semibold mb-4 mt-10">
          3. Priser och betalning
        </h2>
        <p className="text-gray-text mb-4">
          Alla priser anges i svenska kronor (SEK) exklusive moms om inget
          annat anges. Betalning sker enligt överenskommelse i offerten, normalt
          inom 30 dagar efter fakturadatum.
        </p>

        <h2 className="text-[1.5rem] font-semibold mb-4 mt-10">
          4. Leverans
        </h2>
        <p className="text-gray-text mb-4">
          Leveranstider är uppskattningar och kan variera beroende på projektets
          omfattning. Vi håller dig uppdaterad om eventuella förändringar.
        </p>

        <h2 className="text-[1.5rem] font-semibold mb-4 mt-10">
          5. Äganderätt
        </h2>
        <p className="text-gray-text mb-4">
          Efter fullständig betalning övergår äganderätten till den levererade
          hemsidan och dess innehåll till dig som kund. Vi behåller rätten att
          använda projektet som referens i vår portfolio om inget annat avtalats.
        </p>

        <h2 className="text-[1.5rem] font-semibold mb-4 mt-10">
          6. Ändringar och tillägg
        </h2>
        <p className="text-gray-text mb-4">
          Ändringar utöver det som specificerats i offerten kan medföra
          ytterligare kostnader. Vi informerar alltid om detta innan arbetet
          påbörjas.
        </p>

        <h2 className="text-[1.5rem] font-semibold mb-4 mt-10">
          7. Ansvar
        </h2>
        <p className="text-gray-text mb-4">
          Vi ansvarar för att leverera tjänster av hög kvalitet enligt
          överenskommelse. Vi ansvarar inte för skada som uppstår genom
          felaktig användning av den levererade produkten eller för
          tredjepartstjänster som hosting och domänregistrering.
        </p>

        <h2 className="text-[1.5rem] font-semibold mb-4 mt-10">
          8. Avbokning
        </h2>
        <p className="text-gray-text mb-4">
          Du kan avboka ett pågående projekt med 14 dagars varsel. Redan
          utfört arbete debiteras enligt gällande timtaxa.
        </p>

        <h2 className="text-[1.5rem] font-semibold mb-4 mt-10">
          9. Tvist
        </h2>
        <p className="text-gray-text mb-4">
          Eventuella tvister ska i första hand lösas genom dialog. Om
          överenskommelse inte kan nås ska tvisten avgöras i svensk domstol
          med Karlstads tingsrätt som första instans.
        </p>

        <h2 className="text-[1.5rem] font-semibold mb-4 mt-10">
          10. Kontakt
        </h2>
        <p className="text-gray-text mb-4">
          Har du frågor om dessa villkor? Kontakta oss på{" "}
          <a href="mailto:info@webbkraft.net" className="text-accent-green hover:underline">
            info@webbkraft.net
          </a>.
        </p>
      </main>
      <Footer />
    </>
  );
}
