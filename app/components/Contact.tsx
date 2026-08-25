"use client";
import { useLanguage } from "./LanguageContext";

export default function Contact() {
  const { language } = useLanguage();

  const translations = {
    es: {
      section: "Contacto",
      title: "Construyamos algo juntos.",
      description:
        "Estoy abierto a oportunidades de desarrollo de software, proyectos freelance y colaboraciones interesantes.",
      email: "Contáctame ↗",
      linkedin: "LinkedIn ↗",
    },

    en: {
      section: "Let's connect",
      title: "Let's build something together.",
      description:
        "I'm open to software development opportunities, freelance projects and interesting collaborations.",
      email: "Get in touch ↗",
      linkedin: "LinkedIn ↗",
    },
  };

  const t = translations[language];

  return (
    <section id="contact" className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
            {t.section}
          </p>

          <h2 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">
            {t.title}
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            {t.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="mailto:TU_EMAIL@gmail.com"
              className="rounded-full bg-violet-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-violet-400"
            >
              {t.email}
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium text-zinc-300 transition hover:border-zinc-500 hover:text-white"
            >
              {t.linkedin}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}