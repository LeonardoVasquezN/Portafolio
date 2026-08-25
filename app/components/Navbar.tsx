"use client";
import { useLanguage } from "./LanguageContext";

export default function Navbar() {
  const { language, setLanguage } = useLanguage();

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

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <a
          href="#home"
          className="text-sm font-medium tracking-tight text-white"
        >
          Leonardo Vásquez
        </a>

        <div className="flex items-center gap-8">
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
          </div>

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
      </nav>
    </header>
  );
}