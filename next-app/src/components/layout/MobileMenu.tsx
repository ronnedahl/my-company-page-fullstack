"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faEnvelopeRegular } from "@/lib/icons";

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
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-[9998] md:hidden transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[280px] bg-bg border-r border-white/[0.08] z-[9999] md:hidden flex flex-col transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b border-white/[0.08]">
          <span className="text-text font-medium text-lg">Meny</span>
          <button
            onClick={() => setOpen(false)}
            className="text-text text-2xl p-2"
            aria-label="Stäng meny"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        <nav className="flex-1 flex flex-col p-5">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 px-4 text-text text-base font-medium rounded-lg hover:bg-white/[0.04] hover:text-accent-green transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-auto bg-accent-green text-white px-6 py-3 rounded-lg font-semibold text-center hover:opacity-90 transition-all"
          >
            Kontakta Oss{" "}
            <FontAwesomeIcon icon={faEnvelopeRegular} className="ml-1" />
          </a>
        </nav>
      </div>
    </>
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
