"use client";

import {
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
  Code2,
  Database,
  Cpu,
  Wrench,
  FileSpreadsheet,
  Workflow,
  Monitor,
  ChevronDown,
} from "lucide-react";

import { Reveal } from "./Reveal";

const responsibilities = [
  {
    icon: Code2,
    title: "Application Development",
    description:
      "Developed C#/.NET applications for production tracking, preventive maintenance and machine-monitoring workflows, implementing backend business logic and SQL Server data access.",
  },
  {
    icon: Workflow,
    title: "Production & Work Order Management",
    description:
      "Built modules for work order management, maintenance scheduling and task tracking, using timer-driven background processing for periodic data refresh and event handling.",
  },
  {
    icon: Cpu,
    title: "Industrial Machine Integration",
    description:
      "Integrated Siemens SINUMERIK ONE and CMVM services with ReadMicro to retrieve CNC machine data and utilize it within application workflows.",
  },
  {
    icon: Monitor,
    title: "Windows HMI Development",
    description:
      "Developed custom C#/.NET WinForms HMI modules for industrial and CNC applications, deployed across approximately 20 CNC machines.",
  },
  {
    icon: FileSpreadsheet,
    title: "Report Generation & Data Handling",
    description:
      "Used OpenXML for maintenance and production report generation, along with handling user authentication-related data.",
  },
  {
    icon: Wrench,
    title: "Engineering Collaboration",
    description:
      "Collaborated with a team of engineers on industrial software development and Industry 4.0-related applications.",
  },
];

const technologies = [
  "C#",
  ".NET",
  "SQL Server",
  "WinForms",
  "Siemens SINUMERIK ONE",
  "Siemens CMVM",
  "ReadMicro",
  "OpenXML",
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
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

      <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-blue-500/[0.05] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <Reveal className="mb-10 max-w-3xl sm:mb-12">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-cyan-400" />
            <p className="section-label">
              02 / PROFESSIONAL EXPERIENCE
            </p>
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            Where I've
            <br />
            <span className="gradient-text">
              Made an Impact.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-8 text-slate-400 sm:text-base">
            My professional journey, responsibilities and
            experience building software solutions in
            real-world engineering environments.
          </p>
        </Reveal>

        {/* Experience Card */}
        <Reveal>
          <article
            className="
              group relative overflow-hidden
              rounded-3xl border border-white/10
              bg-slate-950/55
              p-5 shadow-2xl shadow-black/10
              backdrop-blur-xl
              transition-all duration-500
              hover:border-cyan-400/25
              sm:p-8 lg:p-10
            "
          >
            {/* Glass Highlight */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.055] via-transparent to-cyan-400/[0.035]" />

            {/* Top Accent */}
            <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-cyan-400 via-cyan-400/30 to-transparent" />

            {/* Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-400/[0.08] blur-[100px] transition-all duration-500 group-hover:bg-cyan-400/[0.15]" />

            {/* Company Header */}
            <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.08] shadow-[0_0_25px_rgba(34,211,238,0.07)] transition-all duration-300 group-hover:border-cyan-400/40">
                  <BriefcaseBusiness size={25} className="text-cyan-400" />
                </div>

                <div className="min-w-0">
                  <h3 className="text-xl font-bold text-white sm:text-2xl">
                    Assistant Software Engineer
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-cyan-400">
                    Bestek Engineering Pvt. Ltd.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-xs text-slate-400">
                    <span className="inline-flex items-center gap-2">
                      <CalendarDays size={14} className="text-cyan-400" />
                      June 2025 – Present
                    </span>

                    <span className="inline-flex items-center gap-2">
                      <MapPin size={14} className="text-cyan-400" />
                      India
                    </span>
                  </div>
                </div>
              </div>

              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3.5 py-2 backdrop-blur-xl">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                  <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
                </span>

                <span className="text-xs font-medium text-emerald-400">
                  Currently Working
                </span>
              </div>
            </div>

            <div className="my-8 h-px bg-gradient-to-r from-cyan-400/25 via-white/[0.08] to-transparent" />

            {/* Responsibilities */}
            <div className="relative">
              <div className="mb-7 flex items-center gap-3">
                <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/[0.08] p-2.5">
                  <Code2 size={20} className="text-cyan-400" />
                </div>

                <div>
                  <h4 className="text-base font-semibold text-white">
                    Key Responsibilities & Contributions
                  </h4>

                  <p className="mt-1 text-xs text-slate-500">
                    Work, development and technical contributions
                  </p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {responsibilities.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="
                        group/item relative flex h-full
                        min-h-[190px] items-start gap-4
                        overflow-hidden rounded-2xl
                        border border-white/[0.09]
                        bg-slate-950/55
                        p-4 backdrop-blur-xl
                        transition-all duration-300
                        hover:-translate-y-1
                        hover:border-cyan-400/30
                        hover:bg-slate-900/70
                        sm:min-h-[175px] sm:p-5
                      "
                    >
                      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-400/[0.08] blur-3xl opacity-0 transition-opacity duration-300 group-hover/item:opacity-100" />

                      <div className="relative shrink-0 pt-1">
                        <span className="text-xs font-bold tracking-widest text-cyan-400/70">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <div className="relative shrink-0 rounded-xl border border-cyan-400/20 bg-cyan-400/[0.08] p-2.5 transition-all duration-300 group-hover/item:border-cyan-400/40 group-hover/item:bg-cyan-400/[0.15]">
                        <Icon size={19} className="text-cyan-400" strokeWidth={1.7} />
                      </div>

                      <div className="relative min-w-0">
                        <h5 className="text-sm font-semibold leading-6 text-slate-200 transition-colors group-hover/item:text-cyan-300">
                          {item.title}
                        </h5>

                        <p className="mt-2 text-xs leading-7 text-slate-400 sm:text-sm">
                          {item.description}
                        </p>
                      </div>

                      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-cyan-400 transition-all duration-500 group-hover/item:w-full" />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Technologies */}
            <div className="relative mt-9 border-t border-white/[0.09] pt-7">
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/[0.08] p-2.5">
                  <Database size={19} className="text-cyan-400" />
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Technologies & Tools
                  </h4>

                  <p className="mt-1 text-xs text-slate-500">
                    Technologies used in professional work
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="
                      rounded-xl border border-white/[0.10]
                      bg-slate-950/60 px-3.5 py-2.5
                      text-xs font-medium text-slate-300
                      backdrop-blur-xl
                      transition-all duration-300
                      hover:-translate-y-0.5
                      hover:border-cyan-400/35
                      hover:bg-cyan-400/[0.08]
                      hover:text-cyan-300
                    "
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <div className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-0 bg-cyan-400 transition-all duration-700 group-hover:w-full" />
          </article>
        </Reveal>
      </div>

      {/* Next Section */}
      <div className="relative z-10 mx-auto mt-16 max-w-7xl sm:mt-20">
        <a
          href="#technology"
          className="group flex items-center gap-4 border-t border-white/[0.10] pt-6 transition-all duration-300 hover:border-cyan-400/30"
        >
          <span className="text-xs font-bold tracking-widest text-cyan-400">
            03
          </span>

          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500 transition-colors group-hover:text-cyan-400">
            Technology Stack
          </span>

          <span className="h-px flex-1 bg-gradient-to-r from-cyan-400/30 via-white/10 to-transparent" />

          <ChevronDown size={18} className="text-cyan-400 transition-transform duration-300 group-hover:translate-y-1" />
        </a>
      </div>
    </section>
  );
}