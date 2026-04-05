import type { Metadata } from "next";
import ServiceHeader from "@/components/layout/ServiceHeader";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Integritetspolicy",
  description:
    "Läs om hur Webbkraft hanterar dina personuppgifter i enlighet med GDPR.",
  alternates: { canonical: "/integritetspolicy" },
  openGraph: {
    title: "Integritetspolicy | Webbkraft",
    description:
      "Läs om hur Webbkraft hanterar dina personuppgifter i enlighet med GDPR.",
  },
};

export default function IntegritetspolicyPage() {
  return (
    <>
      <ServiceHeader />
      <main className="max-w-[800px] mx-auto px-5 py-15">
        <h1 className="text-[2rem] md:text-[3rem] font-semibold mb-8">
          Integritetspolicy
        </h1>
        <p className="text-gray-text mb-4">
          Senast uppdaterad: 2026-03-16
        </p>

        <h2 className="text-[1.5rem] font-semibold mb-4 mt-10">
          1. Vem är ansvarig?
        </h2>
        <p className="text-gray-text mb-4">
          Webbkraft, med säte i Karlstad, är personuppgiftsansvarig för
          behandlingen av dina personuppgifter. Du når oss på{" "}
          <a href="mailto:info@webbkraft.net" className="text-accent-green hover:underline">
            info@webbkraft.net
          </a>{" "}
          eller 070-489 30 20.
        </p>

        <h2 className="text-[1.5rem] font-semibold mb-4 mt-10">
          2. Vilka uppgifter samlar vi in?
        </h2>
        <p className="text-gray-text mb-4">
          Vi samlar in uppgifter som du frivilligt lämnar via vårt
          kontaktformulär:
        </p>
        <ul className="text-gray-text mb-4 list-disc pl-6 flex flex-col gap-2">
          <li>Namn</li>
          <li>E-postadress</li>
          <li>Meddelande</li>
        </ul>

        <h2 className="text-[1.5rem] font-semibold mb-4 mt-10">
          3. Varför behandlar vi dina uppgifter?
        </h2>
        <p className="text-gray-text mb-4">
          Vi behandlar dina personuppgifter för att:
        </p>
        <ul className="text-gray-text mb-4 list-disc pl-6 flex flex-col gap-2">
          <li>Besvara din förfrågan via kontaktformuläret</li>
          <li>Ge dig en offert eller rådgivning om våra tjänster</li>
        </ul>
        <p className="text-gray-text mb-4">
          Rättslig grund: Berättigat intresse (att kunna besvara förfrågningar).
        </p>

        <h2 className="text-[1.5rem] font-semibold mb-4 mt-10">
          4. Hur länge sparar vi dina uppgifter?
        </h2>
        <p className="text-gray-text mb-4">
          Vi sparar dina uppgifter så länge det behövs för att hantera din
          förfrågan, dock maximalt 12 månader efter senaste kontakt.
        </p>

        <h2 className="text-[1.5rem] font-semibold mb-4 mt-10">
          5. Dina rättigheter
        </h2>
        <p className="text-gray-text mb-4">
          Enligt GDPR har du rätt att:
        </p>
        <ul className="text-gray-text mb-4 list-disc pl-6 flex flex-col gap-2">
          <li>Begära tillgång till dina personuppgifter</li>
          <li>Begära rättelse av felaktiga uppgifter</li>
          <li>Begära radering av dina uppgifter</li>
          <li>Invända mot behandling</li>
          <li>Lämna klagomål till Integritetsskyddsmyndigheten (IMY)</li>
        </ul>

        <h2 className="text-[1.5rem] font-semibold mb-4 mt-10">
          6. Cookies
        </h2>
        <p className="text-gray-text mb-4">
          Vår webbplats använder inga spårningscookies. Vi använder inga
          tredjepartsanalysverktyg som samlar personuppgifter.
        </p>

        <h2 className="text-[1.5rem] font-semibold mb-4 mt-10">
          7. Kontakt
        </h2>
        <p className="text-gray-text mb-4">
          Har du frågor om hur vi hanterar dina personuppgifter? Kontakta oss
          på{" "}
          <a href="mailto:info@webbkraft.net" className="text-accent-green hover:underline">
            info@webbkraft.net
          </a>.
        </p>
      </main>
      <Footer />
    </>
  );
}
