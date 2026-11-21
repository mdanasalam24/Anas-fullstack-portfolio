"use client";

import { useState } from "react";
import { Layers3 } from "lucide-react";

import { Reveal } from "../Reveal";
import { technologyData } from "./technologyData";
import type { Technology } from "./technologyData";

const categories = [
  {
    name: "Backend Development",
    label: "Backend",
    description:
      "Backend languages, frameworks and API development technologies.",
  },
  {
    name: "Frontend Development",
    label: "Frontend",
    description:
      "Modern technologies used to create responsive and interactive web interfaces.",
  },
  {
    name: "Database & Testing Tools",
    label: "Database & Tools",
    description:
      "Database management, testing, containerization and developer tools.",
  },
  {
    name: "Industrial Software",
    label: "Industrial",
    description:
      "Industrial software, machine integration and CNC application technologies.",
  },
];

const logos: Record<string, string> = {
  "C#": "csharp/csharp-original.svg",
  "ASP.NET Core": "dotnetcore/dotnetcore-original.svg",
  ".NET 8": "dotnetcore/dotnetcore-original.svg",
  Java: "java/java-original.svg",
  HTML5: "html5/html5-original.svg",
  CSS3: "css3/css3-original.svg",
  JavaScript: "javascript/javascript-original.svg",
  TypeScript: "typescript/typescript-original.svg",
  React: "react/react-original.svg",
  "Next.js": "nextjs/nextjs-original.svg",
  "Tailwind CSS": "tailwindcss/tailwindcss-original.svg",
  "SQL Server": "microsoftsqlserver/microsoftsqlserver-original.svg",
  "Entity Framework Core": "dotnetcore/dotnetcore-original.svg",
  xUnit: "dotnetcore/dotnetcore-original.svg",
  Moq: "dotnetcore/dotnetcore-original.svg",
  Docker: "docker/docker-original.svg",
  "Git & GitHub": "git/git-original.svg",
  "Visual Studio": "visualstudio/visualstudio-original.svg",
  Postman: "postman/postman-original.svg",
  "C# WinForms": "csharp/csharp-original.svg",
};

function getInitials(name: string) {
  return name
    .split(/[\s&.]+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
}

function TechnologyTile({
  technology,
}: {
  technology: Technology;
}) {
  const logo = logos[technology.name];

  return (
    <Reveal className="h-full">
      <article
        className="
          group relative flex h-full min-h-[170px]
          flex-col items-center justify-center
          overflow-hidden rounded-2xl
          border border-white/10
          bg-slate-950/50
          p-4 text-center
          shadow-[0_8px_32px_rgba(0,0,0,0.12)]
          backdrop-blur-xl
          transition-all duration-300
          hover:-translate-y-1
          hover:border-cyan-400/30
          hover:bg-slate-900/65
          hover:shadow-[0_12px_35px_rgba(6,182,212,0.08)]
          sm:min-h-[180px] sm:p-5
        "
      >
        {/* Glass Highlight */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.055] via-transparent to-cyan-400/[0.035]" />

        {/* Logo */}
        <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] shadow-inner shadow-white/[0.03] transition-all duration-300 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10">
          <span className="text-sm font-bold text-cyan-300">
            {getInitials(technology.name)}
          </span>

          {logo && (
            <img
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${logo}`}
              alt={`${technology.name} logo`}
              loading="lazy"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
              className="absolute inset-0 m-auto h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-110 sm:h-9 sm:w-9"
            />
          )}
        </div>

        <h3 className="relative mt-4 flex min-h-[40px] items-center justify-center text-sm font-semibold leading-snug text-gray-100 transition-colors group-hover:text-cyan-300 sm:text-base">
          {technology.name}
        </h3>

        <p className="relative mt-2 line-clamp-2 min-h-[34px] text-[10px] leading-relaxed text-gray-400 sm:text-xs">
          {technology.usage}
        </p>

        <div className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-cyan-400 transition-all duration-300 group-hover:w-1/2" />
      </article>
    </Reveal>
  );
}

export default function TechnologyStack() {
  const [activeCategory, setActiveCategory] = useState(
    "Backend Development"
  );

  const selectedCategory = categories.find(
    (category) => category.name === activeCategory
  )!;

  const filteredTechnologies = technologyData.filter(
    (technology) => technology.category === activeCategory
  );

  return (
    <section
      id="technology"
      className="
        relative w-full
        bg-transparent
        px-4 py-12
        sm:px-6 sm:py-14
        lg:px-10 lg:py-16
      "
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-cyan-500/[0.06] blur-[110px]" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-blue-500/[0.05] blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <Reveal className="mb-8 max-w-3xl sm:mb-10">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-9 bg-cyan-400" />

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Technical Expertise
            </p>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Technologies I{" "}
            <span className="text-cyan-400">
              Work With.
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Explore the technologies and tools I use
            to build backend applications, modern web
            interfaces and industrial software solutions.
          </p>
        </Reveal>

        {/* Categories */}
        <Reveal delay={0.1}>
          <div className="mb-7 overflow-x-auto pb-2">
            <div
              className="flex min-w-max items-center gap-2 sm:gap-3"
              role="tablist"
              aria-label="Technology categories"
            >
              {categories.map((category) => {
                const isActive =
                  activeCategory === category.name;

                const count = technologyData.filter(
                  (technology) =>
                    technology.category === category.name
                ).length;

                return (
                  <button
                    key={category.name}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() =>
                      setActiveCategory(category.name)
                    }
                    className={`
                      inline-flex items-center gap-2
                      rounded-xl border px-4 py-3
                      text-xs font-semibold
                      backdrop-blur-xl
                      transition-all duration-300
                      sm:px-5 sm:text-sm
                      ${
                        isActive
                          ? "border-cyan-400/50 bg-cyan-400/15 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.08)]"
                          : "border-white/10 bg-slate-950/60 text-gray-400 hover:border-cyan-400/30 hover:bg-slate-900/70 hover:text-white"
                      }
                    `}
                  >
                    {category.label}

                    <span className="text-[10px] opacity-70">
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Selected Category */}
        <Reveal delay={0.1}>
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-bold text-white sm:text-xl">
                {selectedCategory.label}
              </h3>

              <p className="mt-1 max-w-2xl text-xs leading-6 text-gray-400 sm:text-sm">
                {selectedCategory.description}
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-2 text-xs text-cyan-400">
              <Layers3 size={15} />
              {filteredTechnologies.length} Technologies
            </div>
          </div>
        </Reveal>

        {/* Technology Grid */}
        <div
          key={activeCategory}
          role="tabpanel"
          className="
            grid auto-rows-fr grid-cols-2 gap-3
            sm:grid-cols-3 sm:gap-4
            md:grid-cols-4
            lg:grid-cols-5
            xl:grid-cols-6
          "
        >
          {filteredTechnologies.map((technology) => (
            <TechnologyTile
              key={technology.name}
              technology={technology}
            />
          ))}
        </div>
      </div>
    </section>
  );
}