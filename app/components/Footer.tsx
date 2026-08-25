"use client";
import { useLanguage } from "./LanguageContext";

export default function Footer() {
  const { language } = useLanguage();

  const translations = {
    es: {
      copyright: "© 2026 Leonardo Vásquez",
      back: "Volver arriba ↑",
    },

    en: {
      copyright: "© 2026 Leonardo Vásquez",
      back: "Back to top ↑",
    },
  };

  const t = translations[language];

  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>{t.copyright}</p>

        <div className="flex gap-6">
          <a
            href="https://github.com/LeonardoVasquezN"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            GitHub
          </a>

          <a
            href="#home"
            className="transition-colors hover:text-white"
          >
            {t.back}
          </a>
        </div>
      </div>
    </footer>
  );
}