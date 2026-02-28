import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeRegular } from "@/lib/icons";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navLinks = [
  { href: "#home", label: "Hem" },
  { href: "#service", label: "Tjänster" },
  { href: "#work", label: "Projekt" },
  { href: "#pricing", label: "Priser" },
  { href: "#about", label: "Om Oss" },
  { href: "#contact", label: "Kontakt" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-[1000] bg-bg/95 backdrop-blur-sm py-5">
      <div className="max-w-[1200px] mx-auto px-5">
        <nav className="flex justify-between items-center">
          <a href="#home" className="flex items-center">
            <Image
              src="/images/logo-webb.png"
              alt="Växtkraft Webb"
              width={350}
              height={120}
              className="h-24 md:h-30 w-auto logo-auto"
              priority
            />
          </a>
          <ul className="hidden md:flex gap-7 text-sm font-medium text-gray-text">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-text">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="#contact"
              className="border border-border px-5 py-2 rounded-lg text-sm font-semibold hover:bg-text hover:text-white hover:border-text"
            >
              Kontakta Oss{" "}
              <FontAwesomeIcon icon={faEnvelopeRegular} className="ml-1" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
