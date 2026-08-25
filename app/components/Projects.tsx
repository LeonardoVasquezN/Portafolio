"use client";
import { useLanguage } from "./LanguageContext";

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Prisma",
  "Supabase",
];

export default function Projects() {
  const { language } = useLanguage();

  const translations = {
    es: {
      section: "Proyecto destacado",
      title: "CaprichosShop",
      projectTitle: "Sistema de gestión de ventas e inventario",
      description:
        "Sistema full-stack desarrollado para gestionar las operaciones diarias de un negocio, incluyendo productos, inventario, ventas, clientes y facturación electrónica.",
      image: "Captura del sistema de gestión CaprichosShop",
      demo: "Ver proyecto ↗",
      github: "GitHub ↗",
      screenshot: "Captura del proyecto",
    },

    en: {
      section: "Selected Project",
      title: "CaprichosShop",
      projectTitle: "Sales & Inventory Management System",
      description:
        "Full-stack system built to manage day-to-day business operations, including products, inventory, sales, customers and electronic invoicing.",
      image: "CaprichosShop management system screenshot",
      demo: "Live Demo ↗",
      github: "GitHub ↗",
      screenshot: "Project screenshot",
    },
  };

  const t = translations[language];

  return (
    <section id="projects" className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-24 md:py-32">
        <div className="mb-10 sm:mb-12 md:mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
            {t.section}
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            {t.title}
          </h2>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111111]">
          <div className="flex aspect-video items-center justify-center bg-zinc-900">
            <p className="text-sm text-zinc-500">
              {t.screenshot}
            </p>
          </div>

          <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-[1fr_auto] md:gap-10 md:p-10">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-semibold">
                {t.projectTitle}
              </h3>

              <p className="mt-4 leading-relaxed text-zinc-400">
                {t.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-zinc-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 md:flex-col">
              <a
                href="https://caprichos-shop.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-violet-500 px-5 py-2.5 text-center text-sm font-medium text-white transition hover:bg-violet-400 md:min-w-[130px]"
              >
                {t.demo}
              </a>

              <a
                href="https://github.com/LeonardoVasquezN/CaprichosShop"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-zinc-700 px-5 py-2.5 text-center text-sm font-medium text-zinc-300 transition hover:border-zinc-500 hover:text-white md:min-w-[130px]"
              >
                {t.github}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}