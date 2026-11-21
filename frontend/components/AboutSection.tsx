
"use client";

import {
  GraduationCap,
  Code2,
  Database,
  Workflow,
  Globe,
  Monitor,
  ChevronDown,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

import { Reveal } from "./Reveal";

const education = [
  {
    degree: "B.Tech — Computer Science (AI & ML)",
    institution: "I.K. Gujral Punjab Technical University",
    level: "Undergraduate",
    number: "01",
  },
  {
    degree: "Intermediate",
    institution: "S.R.K.G. College, Sitamarhi",
    level: "Higher Secondary",
    number: "02",
  },
  {
    degree: "Matriculation",
    institution: "Ram Janki High School, Gopalganj",
    level: "Secondary",
    number: "03",
  },
];

const socialLinks = [
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/mdanasalam24",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    href: "https://linkedin.com/in/md-anas-alam-b75508263",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/itss_anas_alam/",
  },
  {
    name: "X",
    icon: FaXTwitter,
    href: "",
  },
];

const focusAreas = [
  {
    title: "Backend Development",
    description: "C#, ASP.NET Core and REST APIs",
    icon: Code2,
  },
  {
    title: "Frontend Development",
    description: "React, Next.js and TypeScript",
    icon: Monitor,
  },
  {
    title: "Database & Systems",
    description: "SQL Server and application architecture",
    icon: Database,
  },
  {
    title: "Full-Stack Development",
    description: "Building complete web applications",
    icon: Globe,
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden py-14 sm:py-16 lg:py-20"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-cyan-500/[0.055] blur-[130px]" />

      <div className="pointer-events-none absolute -left-40 bottom-20 h-80 w-80 rounded-full bg-blue-500/[0.035] blur-[120px]" />

      <div className="portfolio-container relative z-10">

        {/* ABOUT INTRODUCTION */}
        <Reveal className="glass-panel group relative max-w-4xl overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:border-cyan-400/25 sm:p-8 lg:p-10">

          <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-cyan-400/[0.045] blur-[75px]" />

          <div className="relative z-10">

            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-cyan-400" />

              <p className="section-label">
                01 / ABOUT ME
              </p>
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
              A Developer Building
              <br />
              <span className="gradient-text">
                Beyond Boundaries.
              </span>
            </h2>

            <p className="mt-7 text-sm leading-8 text-slate-400 sm:text-base">
              I'm a software developer passionate about building
              reliable applications, solving problems through code,
              and exploring modern technologies. My primary
              foundation is in C#, .NET and backend development.
            </p>

            <p className="mt-4 text-sm leading-8 text-slate-400 sm:text-base">
              My interests extend beyond backend engineering.
              I'm continuously expanding my knowledge of frontend
              technologies like React, Next.js and TypeScript,
              with the goal of becoming a full-stack developer
              capable of building complete, scalable web
              applications.
            </p>

            <p className="mt-4 text-sm leading-8 text-slate-400 sm:text-base">
              I also have exposure to industrial software
              development, where I've explored how software
              interacts with real-world machines and operational
              systems.
            </p>

          </div>

          {/* Bottom accent */}
          <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

        </Reveal>

        {/* SOCIAL MEDIA */}
        <Reveal delay={0.05}>
          <div className="mt-7 flex flex-wrap items-center gap-3">

            <span className="mr-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
              Connect
            </span>

            {socialLinks.map((social) => {
              const Icon = social.icon;

              return social.href ? (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.name}
                  aria-label={social.name}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-slate-400 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-400 hover:shadow-[0_5px_25px_rgba(34,211,238,0.10)]"
                >
                  <Icon size={18} />
                </a>
              ) : (
                <span
                  key={social.name}
                  title="X profile coming soon"
                  aria-label="X profile coming soon"
                  className="flex h-11 w-11 cursor-default items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-slate-600"
                >
                  <Icon size={18} />
                </span>
              );
            })}

          </div>
        </Reveal>

        {/* EDUCATION */}
        <Reveal className="glass-panel relative mt-16 overflow-hidden rounded-3xl p-6 sm:mt-20 sm:p-8 lg:p-9">

          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/[0.045] blur-[100px]" />

          <div className="relative z-10">

            <div className="mb-8 flex items-center gap-4">

              <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-3">
                <GraduationCap
                  size={23}
                  className="text-cyan-400"
                />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white sm:text-2xl">
                  Education
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Academic background
                </p>
              </div>

            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

              {education.map((item) => (
                <article
                  key={item.number}
                  className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.025] p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan-400/30 hover:bg-cyan-400/[0.045] hover:shadow-[0_12px_35px_rgba(0,0,0,0.20)] sm:p-6"
                >

                  <div className="flex items-center justify-between">

                    <GraduationCap
                      size={22}
                      className="text-cyan-400 transition-transform duration-300 group-hover:scale-110"
                    />

                    <span className="text-xs font-semibold tracking-widest text-slate-600">
                      {item.number}
                    </span>

                  </div>

                  <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-400">
                    {item.level}
                  </p>

                  <h4 className="mt-3 text-base font-semibold leading-6 text-white">
                    {item.degree}
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {item.institution}
                  </p>

                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full" />

                </article>
              ))}

            </div>

          </div>
        </Reveal>

        {/* CURRENT FOCUS */}
        <Reveal delay={0.05}>
          <div className="glass-panel relative mt-10 overflow-hidden rounded-3xl p-5 sm:p-7 lg:p-8">

            <div className="pointer-events-none absolute -bottom-28 right-0 h-64 w-64 rounded-full bg-cyan-500/[0.045] blur-[100px]" />

            <div className="relative z-10 flex items-start gap-4">

              <div className="shrink-0 rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-3">
                <Workflow
                  size={23}
                  className="text-cyan-400"
                />
              </div>

              <div className="min-w-0 flex-1">

                <h3 className="text-lg font-semibold text-white sm:text-xl">
                  What I'm Focused On
                </h3>

                <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
                  Expanding my skills across the full-stack
                  development ecosystem, strengthening my
                  backend expertise while building modern,
                  responsive and interactive frontend
                  applications. My focus is on developing
                  complete web solutions with clean architecture,
                  reliable APIs and intuitive user experiences.
                </p>

                {/* FOCUS AREAS */}
                <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">

                  {focusAreas.map((area) => {
                    const Icon = area.icon;

                    return (
                      <div
                        key={area.title}
                        className="group flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-3.5 backdrop-blur-lg transition-all duration-300 hover:border-cyan-400/25 hover:bg-cyan-400/[0.045]"
                      >

                        <div className="shrink-0 rounded-lg border border-cyan-400/10 bg-cyan-400/[0.08] p-2 transition-colors group-hover:bg-cyan-400/15">

                          <Icon
                            size={18}
                            className="text-cyan-400"
                          />

                        </div>

                        <div className="min-w-0">

                          <h4 className="text-xs font-semibold text-slate-200 sm:text-sm">
                            {area.title}
                          </h4>

                          <p className="mt-1 text-[11px] leading-5 text-slate-500">
                            {area.description}
                          </p>

                        </div>

                      </div>
                    );
                  })}

                </div>

              </div>
            </div>

          </div>
        </Reveal>

      </div>

      {/* SECTION DIVIDER — ABOUT TO EXPERIENCE */}
      <div className="portfolio-container relative z-10 mt-16 sm:mt-20">

        <a
          href="#experience"
          className="group flex items-center gap-4 border-t border-white/[0.10] pt-6 transition-all duration-300 hover:border-cyan-400/30"
        >

          <span className="text-xs font-bold tracking-widest text-cyan-400">
            02
          </span>

          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500 transition-colors group-hover:text-cyan-400">
            Professional Experience
          </span>

          <span className="h-px flex-1 bg-gradient-to-r from-cyan-400/30 via-white/10 to-transparent transition-all duration-500 group-hover:via-cyan-400/40" />

          <ChevronDown
            size={18}
            className="text-cyan-400 transition-transform duration-300 group-hover:translate-y-1"
          />

        </a>

      </div>

    </section>
  );
}
