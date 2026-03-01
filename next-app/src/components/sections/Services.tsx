import {
  faLaptopCode,
  faCalendarCheck,
  faRobot,
  faMagnifyingGlassChart,
  faBolt,
} from "@/lib/icons";
import { faGoogle } from "@/lib/icons";
import type { ServiceCardData } from "@/types";
import ServiceCard from "./ServiceCard";

const services: ServiceCardData[] = [
  {
    icon: faLaptopCode,
    title: "Ny eller Befintlig Hemsida",
    description:
      "Vi bygger nya moderna sidor eller fräschar upp din gamla. Allt från enkla landningssidor till större plattformar.",
    href: "/webbutveckling",
  },
  {
    icon: faCalendarCheck,
    title: "Slipp Telefonkrångel – Boka Online",
    description:
      "Låt kunderna boka tid direkt på nätet. Vi integrerar smidiga bokningssystem så du slipper sitta i telefon.",
  },
  {
    icon: faRobot,
    title: "Automatisk Kundtjänst / Chatbot",
    description:
      "Installera en smart AI-chattbot som svarar på dina kunders frågor dygnet runt, direkt på hemsidan.",
  },
  {
    icon: faGoogle,
    title: "Syns på Google (SEO)",
    description:
      "Vi hjälper dig att klättra i sökresultaten så att lokala kunder hittar just ditt företag före konkurrenternas.",
  },
  {
    icon: faMagnifyingGlassChart,
    title: "Snabbanalys & Åtgärd",
    description:
      "Vi gör en blixtsnabb analys av din nuvarande sida och ger förslag på direkta förbättringar för ökad försäljning.",
  },
  {
    icon: faBolt,
    title: "Hastighet & Prestanda",
    description:
      "Ingen gillar långsamma sidor. Vi optimerar din kod och dina bilder så att sidan laddar blixtsnabbt.",
  },
];

export default function Services() {
  return (
    <section id="service" className="py-10 sm:py-20">
      <div className="max-w-[1200px] mx-auto px-5 mb-12">
        <h2 className="text-[1.8rem] md:text-[2.5rem] font-semibold mb-2.5">
          Våra Tjänster
        </h2>
        <p className="text-gray-text max-w-[500px]">
          Från enkla förbättringar till avancerade AI-system. Vi skräddarsyr
          lösningen efter dina behov och budget.
        </p>
      </div>
      <div className="max-w-[1200px] mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}
