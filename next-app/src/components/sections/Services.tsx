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
import FadeInUp from "@/components/ui/FadeInUp";

const services: ServiceCardData[] = [
  {
    icon: faLaptopCode,
    title: "Ny eller Befintlig Hemsida",
    description:
      "Vi bygger nya moderna sidor eller fräschar upp din gamla – snabbt, prisvärt och mobilanpassat.",
    href: "/webbutveckling",
    imageUrl: "/images/laptop-analytics-webbutveckling-redesign-karlstad.webp",
    imageAlt: "Laptop med analytics dashboard för webbutveckling och redesign av hemsida i Karlstad",
  },
  {
    icon: faCalendarCheck,
    title: "Slipp Telefonkrångel – Boka Online",
    description:
      "Låt kunderna boka tid direkt på nätet. Vi integrerar smidiga bokningssystem så du slipper sitta i telefon.",
    href: "/bokning-online",
    imageUrl: "/images/onlinebokningssystem-foretag-karlstad.webp",
    imageAlt: "Händer vid kassaterminal med onlinebokningssystem för företag i Karlstad",
  },
  {
    icon: faRobot,
    title: "Automatisk Kundtjänst / Chatbot",
    description:
      "Installera en smart AI-chattbot som svarar på dina kunders frågor dygnet runt, direkt på hemsidan.",
    href: "/chatbot",
    imageUrl: "/images/chatbot.png",
    imageAlt: "AI-chatbot på en hemsida",
  },
  {
    icon: faGoogle,
    title: "Syns på Google (SEO)",
    description:
      "Vi hjälper dig klättra i sökresultaten så lokala kunder hittar ditt företag först.",
    href: "/seo",
    imageUrl: "/images/seo-connections.webp",
    imageAlt: "Visualisering av SEO-kopplingar och sökmotoroptimering för lokala företag",
  },
  {
    icon: faMagnifyingGlassChart,
    title: "Snabbanalys & Åtgärd",
    description:
      "En snabb analys av din nuvarande sida med konkreta förslag på förbättringar.",
    href: "/snabbanalys",
    imageUrl: "/images/webbanalys-hemsida-atgard-karlstad.webp",
    imageAlt: "Webbanalys och data för hemsidor i Karlstad",
  },
  {
    icon: faBolt,
    title: "Hastighet & Prestanda",
    description:
      "Ingen gillar långsamma sidor. Vi optimerar din kod och dina bilder så att sidan laddar blixtsnabbt.",
    href: "/prestanda",
    imageUrl: "/images/speed-site.webp",
    imageAlt: "Närbild på hastighetsmätare som symboliserar snabb webbprestanda och laddtid",
  },
];

export default function Services() {
  return (
    <section id="service" className="py-16 sm:py-28">
      <div className="max-w-[1200px] mx-auto px-5 mb-14">
        <FadeInUp>
          <h2 className="text-[1.5rem] md:text-[2.5rem] font-semibold mb-2.5">
            Våra Tjänster
          </h2>
          <p className="text-gray-text max-w-[500px]">
            Från enkla förbättringar till avancerade AI-system. Vi skräddarsyr
            lösningen efter dina behov och budget.
          </p>
        </FadeInUp>
      </div>
      <div className="max-w-[1200px] mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <FadeInUp key={service.title} delay={i * 100}>
            <ServiceCard {...service} />
          </FadeInUp>
        ))}
      </div>
    </section>
  );
}
