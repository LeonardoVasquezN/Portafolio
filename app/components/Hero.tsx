"use client";
import { useLanguage } from "./LanguageContext";

export default function Hero() {
  const { language } = useLanguage();

  const translations = {
    es: {
      greeting: "Hola, soy Leonardo.",
      title: "DESARROLLADOR DE SOFTWARE",
      description:
        "Construyo aplicaciones web modernas con React, Next.js y TypeScript, enfocadas en crear soluciones prácticas y centradas en el usuario.",
      work: "Ver mis proyectos",
      github: "GitHub ↗",
    },

    en: {
      greeting: "Hi, I'm Leonardo.",
      title: "SOFTWARE DEVELOPER",
      description:
        "I build modern web applications with React, Next.js and TypeScript, focused on creating practical and user-centered solutions.",
      work: "View my work",
      github: "GitHub ↗",
    },
  };

  const t = translations[language];

  return (
    <section
      id="home"
      className="mx-auto flex min-h-screen max-w-6xl items-center px-6 pt-20"
    >
      <div className="max-w-4xl">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
          {t.greeting}
        </p>

        <h1 className="text-6xl font-bold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
          {t.title}
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
          {t.description}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-violet-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-violet-400"
          >
            {t.work}
          </a>

          <a
            href="https://github.com/LeonardoVasquezN"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium text-zinc-300 transition hover:border-zinc-500 hover:text-white"
          >
            {t.github}
          </a>
        </div>
      </div>
    </section>
  );
}