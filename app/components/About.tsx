"use client";

import { useLanguage } from "./LanguageContext";
import Reveal from "./Reveal";

export default function About() {
  const { language } = useLanguage();

  const translations = {
    es: {
      title: "Sobre mí",
      paragraphs: [
        "Soy Leonardo Vásquez, Ingeniero de sistemas enfocado en el desarrollo de aplicaciones web modernas y en resolver problemas prácticos mediante la tecnología.",
        "Trabajo principalmente con React, Next.js, TypeScript y JavaScript, con especial interés en el desarrollo frontend y las aplicaciones web full-stack.",
        "Me interesa crear soluciones web funcionales, escalables y centradas en las necesidades de los usuarios y los negocios.",
      ],
    },

    en: {
      title: "About",
      paragraphs: [
        "I'm Leonardo Vásquez, a Systems Engineering focused on building modern web applications and solving practical problems through technology.",
        "I primarily work with React, Next.js, TypeScript and JavaScript, with a strong interest in frontend development and full-stack web applications.",
        "I'm interested in building functional, scalable web solutions focused on the needs of users and businesses.",
      ],
    },
  };

  const t = translations[language];

  return (
    <section id="about" className="border-t border-white/10">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-20 sm:gap-10 sm:px-6 sm:py-24 md:grid-cols-[200px_1fr] md:gap-12 md:py-32">
        <Reveal>
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
              {t.title}
            </p>
          </div>
        </Reveal>

        <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-zinc-400">
          {t.paragraphs.map((paragraph, index) => (
            <Reveal key={paragraph} delay={index * 0.1}>
              <p>{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}