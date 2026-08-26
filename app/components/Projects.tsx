"use client";
import { useLanguage } from "./LanguageContext";
import { useState } from "react";

import Image from "next/image";

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Prisma",
  "Supabase",
];

const projectImages = [
  {
    src: "/projects/caprichosshop/Dashboard General.png",
    alt: "Menú de mantenimientos de CaprichosShop",
  },
  {
    src: "/projects/caprichosshop/Menú de mantenimientos.png",
    alt: "Menú de mantenimientos de CaprichosShop",
  },
  {
    src: "/projects/caprichosshop/Detalle de producto.png",
    alt: "Detalle de producto de CaprichosShop",
  },
  {
    src: "/projects/caprichosshop/Dashboard de ventas.png",
    alt: "Dashboard de ventas de CaprichosShop",
  },
  {
    src: "/projects/caprichosshop/Historialtabla de ventas.png",
    alt: "Historial de ventas de CaprichosShop",
  },
  {
    src: "/projects/caprichosshop/Nota de venta.png",
    alt: "Nota de venta de CaprichosShop",
  },
  {
    src: "/projects/caprichosshop/Impresión.png",
    alt: "Impresión de nota de venta de CaprichosShop",
  },
];

export default function Projects() {
  const { language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(projectImages[0].src);

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
          <div className="relative aspect-video bg-zinc-900">
            <Image
              src={selectedImage}
              alt="CaprichosShop"
              fill
              className="object-contain"
            />
          </div>

          <div className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-3">
            {projectImages.map((image) => (
              <button
                key={image.src}
                onClick={() => setSelectedImage(image.src)}
                className={`relative aspect-video overflow-hidden rounded-lg bg-zinc-900 transition ${
                  selectedImage === image.src
                    ? "ring-2 ring-violet-500"
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
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