import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShapes, faEnvelopeRegular } from "@/lib/icons";

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
          <div className="font-extrabold text-xs md:text-[1.2rem] flex items-center gap-2.5">
            <FontAwesomeIcon icon={faShapes} className="text-lg" />
            Växtkraft Webb
          </div>
          <ul className="hidden md:flex gap-7 text-sm font-medium text-gray-text">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-text">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="border border-[#ccc] px-5 py-2 rounded-lg text-sm font-semibold hover:bg-text hover:text-white hover:border-text"
          >
            Kontakta Oss{" "}
            <FontAwesomeIcon icon={faEnvelopeRegular} className="ml-1" />
          </a>
        </nav>
      </div>
    </header>
  );
}
