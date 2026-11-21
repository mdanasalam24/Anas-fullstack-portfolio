
"use client";

import { Workflow } from "lucide-react";
import { Reveal } from "./Reveal";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-transparent"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-cyan-500/[0.045] blur-[130px]" />

      <div className="portfolio-container relative z-10">

        {/* About Introduction */}
        <Reveal className="max-w-3xl">

          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-10 bg-cyan-400" />

            <p className="section-label">
              01 / ABOUT ME
            </p>
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            Software Engineering
            <br />
            <span className="gradient-text">
              Beyond the Code.
            </span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            I'm a C#/.NET Backend Developer focused on
            building reliable backend applications,
            RESTful APIs and scalable software solutions.
          </p>

          <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            My professional experience involves developing
            software for real-world industrial environments,
            working with backend business logic, database
            operations and application workflows.
          </p>

          <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            I also enjoy exploring modern backend technologies
            and independently building projects to strengthen
            my understanding of API development, authentication,
            software architecture and database management.
          </p>

        </Reveal>

        {/* Career Focus */}
        <Reveal className="mt-7 sm:mt-8">

          <div className="flex items-start gap-4">

            <Workflow
              size={21}
              className="mt-1 shrink-0 text-cyan-400"
            />

            <div>

              <h3 className="font-semibold text-white">
                What I'm Focused On
              </h3>

              <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
                Growing as a backend engineer by building
                reliable APIs, improving database and
                application design, strengthening problem-solving
                skills and developing maintainable software
                solutions using the .NET ecosystem.
              </p>

            </div>
          </div>

        </Reveal>

      </div>
    </section>
  );
}
