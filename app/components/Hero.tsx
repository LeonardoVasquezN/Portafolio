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
      className="mx-auto flex min-h-screen max-w-6xl items-center px-5 pt-20 sm:px-6"
    >
      <div className="max-w-4xl text-center md:text-left">
        <p className="animate-[heroFade_0.7s_ease-out_both] mb-6 text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
          {t.greeting}
        </p>

        <h1 className="animate-[heroFade_0.7s_ease-out_0.15s_both] text-4xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-8xl">
          {t.title}
        </h1>

        <p className="animate-[heroFade_0.7s_ease-out_0.3s_both] mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl md:mx-0">
          {t.description}
        </p>

        <div className="animate-[heroFade_0.7s_ease-out_0.45s_both] mt-10 flex flex-wrap justify-center gap-4 md:justify-start">
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