"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageContext";

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const translations = {
    es: {
      about: "Sobre mí",
      projects: "Proyectos",
      technologies: "Tecnologías",
      contact: "Contacto",
    },
    en: {
      about: "About",
      projects: "Projects",
      technologies: "Technologies",
      contact: "Contact",
    },
  };

  const t = translations[language];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-6">
        <a
          href="#home"
          onClick={closeMenu}
          className="text-sm font-medium tracking-tight text-white"
        >
          Leonardo Vásquez
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#about"
            className="text-sm text-zinc-400 transition-colors hover:text-white"
          >
            {t.about}
          </a>

          <a
            href="#projects"
            className="text-sm text-zinc-400 transition-colors hover:text-white"
          >
            {t.projects}
          </a>

          <a
            href="#technologies"
            className="text-sm text-zinc-400 transition-colors hover:text-white"
          >
            {t.technologies}
          </a>

          <a
            href="#contact"
            className="text-sm text-zinc-400 transition-colors hover:text-white"
          >
            {t.contact}
          </a>

          <a
            href="https://github.com/LeonardoVasquezN"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-400 transition-colors hover:text-white"
          >
            GitHub ↗
          </a>

          <div className="flex items-center gap-1 text-sm">
            <button
              onClick={() => setLanguage("es")}
              className={
                language === "es"
                  ? "font-medium text-white"
                  : "text-zinc-500 transition-colors hover:text-white"
              }
            >
              ES
            </button>

            <span className="text-zinc-700">/</span>

            <button
              onClick={() => setLanguage("en")}
              className={
                language === "en"
                  ? "font-medium text-white"
                  : "text-zinc-500 transition-colors hover:text-white"
              }
            >
              EN
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <div className="flex items-center gap-1 text-sm">
            <button
              onClick={() => setLanguage("es")}
              className={
                language === "es"
                  ? "font-medium text-white"
                  : "text-zinc-500 transition-colors hover:text-white"
              }
            >
              ES
            </button>

            <span className="text-zinc-700">/</span>

            <button
              onClick={() => setLanguage("en")}
              className={
                language === "en"
                  ? "font-medium text-white"
                  : "text-zinc-500 transition-colors hover:text-white"
              }
            >
              EN
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-zinc-300 transition-colors hover:text-white"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
          >
            <span className="text-2xl">{menuOpen ? "×" : "☰"}</span>
          </button>
        </div>
      </nav>
      
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#0a0a0a]/95 px-5 py-6 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-5">
            <a
              href="#about"
              onClick={closeMenu}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {t.about}
            </a>

            <a
              href="#projects"
              onClick={closeMenu}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {t.projects}
            </a>

            <a
              href="#technologies"
              onClick={closeMenu}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {t.technologies}
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {t.contact}
            </a>

            <a
              href="https://github.com/LeonardoVasquezN"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}