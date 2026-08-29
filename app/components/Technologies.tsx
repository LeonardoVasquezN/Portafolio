"use client";

import { useLanguage } from "./LanguageContext";
import Reveal from "./Reveal";

const technologies = {
  frontend: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
  backend: ["Prisma", "Supabase"],
  tools: ["Git", "GitHub", "Vercel"],
};

export default function Technologies() {
  const { language } = useLanguage();

  const translations = {
    es: {
      section: "Tecnologías",
      frontend: "Frontend",
      backend: "Backend & Base de datos",
      tools: "Herramientas",
    },

    en: {
      section: "Technologies",
      frontend: "Frontend",
      backend: "Backend & Database",
      tools: "Tools",
    },
  };

  const t = translations[language];

  return (
    <section id="technologies" className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-24 md:py-32">
        <div className="grid gap-8 md:grid-cols-[200px_1fr] md:gap-12">
          <Reveal>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
                {t.section}
              </p>
            </div>
          </Reveal>

          <div className="grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <Reveal delay={0.1}>
              <div>
                <h3 className="mb-5 text-sm font-medium text-white">
                  {t.frontend}
                </h3>

                <ul className="space-y-3">
                  {technologies.frontend.map((technology) => (
                    <li
                      key={technology}
                      className="text-zinc-400 transition-colors hover:text-white"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div>
                <h3 className="mb-5 text-sm font-medium text-white">
                  {t.backend}
                </h3>

                <ul className="space-y-3">
                  {technologies.backend.map((technology) => (
                    <li
                      key={technology}
                      className="text-zinc-400 transition-colors hover:text-white"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div>
                <h3 className="mb-5 text-sm font-medium text-white">
                  {t.tools}
                </h3>

                <ul className="space-y-3">
                  {technologies.tools.map((technology) => (
                    <li
                      key={technology}
                      className="text-zinc-400 transition-colors hover:text-white"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}