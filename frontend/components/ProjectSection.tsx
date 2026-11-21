"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import {
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Code2,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";
import { Reveal } from "./Reveal";

const projects = [
  {
    number: "01",
    title: "Product Management RESTful API",
    category: "Backend Development",
    description:
      "Developed a RESTful API using ASP.NET Core 8 to manage product operations with secure authentication and role-based access control.",
    impact: [
      "Implemented JWT authentication with refresh tokens and role-based authorization.",
      "Built a layered architecture with Entity Framework Core and SQL Server.",
      "Added FluentValidation, API versioning and automated testing with 12 test cases.",
    ],
    technologies: [
      "C#",
      ".NET 8",
      "ASP.NET Core",
      "Entity Framework Core",
      "SQL Server",
      "JWT",
      "Docker",
      "xUnit",
    ],
    github:
      "https://github.com/mdanasalam24/ProductManagement-RESTful-API",
    githubLabel: "View Source Code",
    private: false,
  },
  {
    number: "02",
    title: "Personal Developer Portfolio",
    category: "Full-Stack Development",
    description:
      "Designed and developed a responsive personal portfolio to showcase my technical skills, education, experience and software projects.",
    impact: [
      "Built a responsive interface for desktop, tablet and mobile devices.",
      "Implemented reusable React components and interactive UI animations.",
      "Developed Anas AI portfolio assistant with a .NET backend.",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Motion",
      "ASP.NET Core",
      "C#",
    ],
    github: "https://github.com/mdanasalam24/Anas-fullstack-portfolio.git",
    githubLabel: "GitHub Profile",
    private: false,
  },
  {
    number: "03",
    title: "Industrial Preventive Maintenance System",
    category: "Industrial Software",
    description:
      "Developed a Windows-based application to monitor machine activity and support preventive maintenance operations.",
    impact: [
      "Implemented time-based and production-count-based maintenance tracking.",
      "Integrated machine data using FANUC FOCAS communication.",
      "Added automated cycle and production count monitoring using signal transitions.",
    ],
    technologies: [
      "C#",
      ".NET",
      "WinForms",
      "SQL Server",
      "FANUC FOCAS",
    ],
    github: "",
    githubLabel: "",
    private: true,
  },
];

export default function ProjectSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeProject = projects[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((previous) =>
      previous === 0 ? projects.length - 1 : previous - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((previous) =>
      previous === projects.length - 1 ? 0 : previous + 1
    );
  };

  return (
    <section
      id="projects"
      className="
        relative w-full
        bg-transparent
        px-4 py-12
        sm:px-6 sm:py-16
        lg:px-10 lg:py-20
      "
    >
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/[0.07] blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/[0.06] blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        <Reveal className="mb-10 max-w-3xl sm:mb-12">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-9 bg-cyan-400" />
            <p className="section-label">Selected Work</p>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Projects I've{" "}
            <span className="gradient-text">Built.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            A selection of projects demonstrating my work
            across backend engineering, full-stack development
            and industrial software.
          </p>
        </Reveal>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.article
              key={activeProject.number}
              initial={{ opacity: 0, x: 45 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -45 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="
                group relative isolate
                min-h-[650px] overflow-hidden
                rounded-3xl border border-white/10
                bg-slate-950/55
                p-5 shadow-2xl shadow-black/10
                backdrop-blur-xl
                transition-all duration-300
                hover:border-cyan-400/25
                sm:min-h-[590px] sm:p-8
                lg:min-h-[510px] lg:p-10
              "
            >
              {/* Glass Highlight */}
              <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-white/[0.06] via-transparent to-cyan-400/[0.04]" />

              {/* Hover Glow */}
              <div className="pointer-events-none absolute -right-20 -top-24 -z-10 h-72 w-72 rounded-full bg-cyan-400/[0.08] blur-[100px] transition-all duration-500 group-hover:bg-cyan-400/[0.15]" />

              <div className="relative grid gap-8 lg:grid-cols-[1fr_220px] lg:gap-12">
                <div className="flex flex-col">
                  <div className="mb-6 flex flex-wrap items-center gap-3">
                    <span className="text-sm font-bold tracking-widest text-cyan-400">
                      {activeProject.number}
                    </span>

                    <span className="h-px w-8 bg-white/20" />

                    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-cyan-300">
                      {activeProject.category}
                    </span>
                  </div>

                  <h3 className="max-w-3xl text-2xl font-bold leading-tight text-white transition-colors duration-300 group-hover:text-cyan-300 sm:text-3xl lg:text-4xl">
                    {activeProject.title}
                  </h3>

                  <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
                    {activeProject.description}
                  </p>

                  <div className="mt-7">
                    <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-300">
                      Key Contributions
                    </h4>

                    <ul className="space-y-3">
                      {activeProject.impact.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-sm leading-6 text-slate-400"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-7">
                    <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                      Technologies
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {activeProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-white/10 bg-white/[0.045] px-3 py-1.5 text-xs font-medium text-slate-300 backdrop-blur-md transition-all duration-200 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* GitHub Panel */}
                <div className="flex flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 lg:flex-col lg:items-end lg:justify-start lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                    <Code2 size={17} className="text-cyan-400" />
                    PROJECT
                    <span className="text-cyan-400">
                      {activeProject.number}
                    </span>
                  </div>

                  {activeProject.github ? (
                    <a
                      href={activeProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${activeProject.title} on GitHub`}
                      className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/25 bg-cyan-400/[0.07] px-4 py-3 text-sm font-semibold text-cyan-300 backdrop-blur-lg transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/15 hover:shadow-lg hover:shadow-cyan-500/10"
                    >
                      <FaGithub size={19} />
                      {activeProject.githubLabel}
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs font-medium text-slate-500">
                      <FaGithub size={17} />
                      Private Project
                    </span>
                  )}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full" />
            </motion.article>
          </AnimatePresence>

          {/* Slider Controls */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-400">
              <span className="text-lg font-bold text-cyan-400">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
              <span className="text-slate-600">/</span>
              <span>{String(projects.length).padStart(2, "0")}</span>
              <span className="ml-2 hidden text-xs text-slate-500 sm:inline">
                Projects
              </span>
            </div>

            <div className="flex items-center gap-2">
              {projects.map((project, index) => (
                <button
                  key={project.number}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show project ${index + 1}`}
                  aria-current={activeIndex === index ? "true" : undefined}
                  className={`
                    h-2 rounded-full transition-all duration-300
                    ${
                      activeIndex === index
                        ? "w-8 bg-cyan-400"
                        : "w-2 bg-white/20 hover:bg-cyan-400/50"
                    }
                  `}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={goToPrevious}
                aria-label="Previous project"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300 active:scale-95"
              >
                <ChevronLeft size={21} />
              </button>

              <button
                type="button"
                onClick={goToNext}
                aria-label="Next project"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/10 transition-all duration-300 hover:bg-cyan-300 active:scale-95"
              >
                <ChevronRight size={21} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}