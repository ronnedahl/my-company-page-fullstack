"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faEnvelopeRegular } from "@/lib/icons";
import ThemeToggle from "@/components/ui/ThemeToggle";

interface NavLink {
  href: string;
  label: string;
}

export default function MobileMenu({ navLinks }: { navLinks: NavLink[] }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const menu = (
    <div
      className={`fixed inset-0 bg-card-bg z-[9999] md:hidden flex flex-col transition-opacity duration-300 ${
        open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      }`}
    >
      <div className="flex justify-between items-center p-5">
        <ThemeToggle />
        <button
          onClick={() => setOpen(false)}
          className="text-text text-2xl p-2"
          aria-label="Stäng meny"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>

      <nav className="flex-1 flex flex-col items-center justify-center">
        <ul className="flex flex-col items-center gap-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 px-6 text-text text-xl font-medium rounded-lg hover:text-accent-green transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="mt-10 bg-accent-green text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
        >
          Kontakta Oss{" "}
          <FontAwesomeIcon icon={faEnvelopeRegular} className="ml-1" />
        </a>
      </nav>
    </div>
  );

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="md:hidden text-text text-xl p-2"
        aria-label="Öppna meny"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      {mounted && createPortal(menu, document.body)}
    </>
  );
}
