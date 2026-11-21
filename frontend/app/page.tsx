
import Navbar from "../components/Navbar";
import {
  ArrowUpRight,
  Download,
  ChevronDown,
  FileText,
} from "lucide-react";

import NetworkBackground from "../components/NetworkBackground";

import TechnologyStack from "../components/technology/TechnologyStack";
import ExperienceSection from "../components/ExperienceSection";
import AboutSection from "../components/AboutSection";
import ProjectSection from "../components/ProjectSection";
import ContactSection from "../components/ContactSection";
import Chatbot from "../components/chatbot/Chatbot";

// Correct CV file location inside public folder
const CV_FILE_URL =
  "/Anas_Alam_CV.pdf/Anas%20Resume.pdf";

export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-x-clip">

      {/* GLOBAL ANIMATED BACKGROUND */}
      <NetworkBackground />

      {/* WEBSITE CONTENT */}
      <div className="relative z-10">

        <Navbar />

        {/* HERO SECTION */}
        <section
          id="home"
          className="relative flex min-h-[calc(100vh-76px)] flex-col justify-center overflow-hidden"
        >
          {/* Background effects */}
          <div className="hero-grid pointer-events-none absolute inset-0" />

          <div className="hero-glow pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2" />

          {/* Hero content */}
          <div className="portfolio-container relative z-10 grid w-full items-center gap-12 py-4 sm:py-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-8">

            {/* LEFT CONTENT */}
            <div className="max-w-3xl">

              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-cyan-400" />

                <p className="section-label">
                  ASSISTANT SOFTWARE ENGINEER
                </p>
              </div>

              <p className="mb-4 text-sm font-medium tracking-[0.22em] text-slate-400">
                HELLO, I'M
              </p>

              <h1 className="text-5xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
                MD Anas
                <br />
                <span className="gradient-text">Alam.</span>
              </h1>

              <div className="mt-7">
                <h2 className="text-xl font-semibold text-cyan-400 sm:text-2xl">
                  C# / .NET Backend Developer
                </h2>

                <p className="mt-3 text-lg font-medium text-white sm:text-xl">
                  Building Intelligent Systems.
                  <br />
                  Engineering Reliable APIs.
                </p>
              </div>

              <p className="mt-6 max-w-xl text-sm leading-8 text-slate-400 sm:text-base">
                Software developer with professional experience
                building production software, industrial applications
                and RESTful APIs using ASP.NET Core, C# and SQL Server.
                Passionate about developing reliable backend systems
                and maintainable software solutions.
              </p>

              {/* ACTION BUTTONS */}
              <div className="mt-9 flex flex-wrap gap-4">

                {/* DOWNLOAD CV */}
                <a
                  href={CV_FILE_URL}
                  download="Anas_Alam_CV.pdf"
                  className="group inline-flex items-center gap-3 rounded-full bg-cyan-400 px-6 py-3.5 font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300"
                >
                  Download CV

                  <Download
                    size={18}
                    className="transition-transform group-hover:translate-y-0.5"
                  />
                </a>

                {/* VIEW PROJECTS */}
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-3.5 font-medium text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:bg-white/5"
                >
                  View Projects

                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>

                {/* VIEW CV */}
                <a
                  href={CV_FILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 font-medium text-slate-300 transition duration-300 hover:border-cyan-400/60 hover:text-cyan-400"
                >
                  <FileText size={17} />
                  View CV
                </a>

              </div>

              {/* SOCIAL LINKS */}
              <div className="mt-8 flex flex-wrap items-center gap-5">

                <span className="text-xs font-semibold tracking-widest text-slate-500">
                  CONNECT
                </span>

                <a
                  href="https://github.com/mdanasalam24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-slate-400 transition hover:text-cyan-400"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://linkedin.com/in/md-anas-alam-b75508263"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-slate-400 transition hover:text-cyan-400"
                >
                  LinkedIn ↗
                </a>

              </div>
            </div>

            {/* RIGHT — PROFILE IMAGE */}
            <div className="relative mx-auto flex aspect-square w-full max-w-[420px] items-center justify-center lg:max-w-[460px]">

              {/* Outer glow */}
              <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-[75px]" />

              {/* Decorative rings */}
              <div className="absolute inset-[3%] rounded-full border border-cyan-400/20" />

              <div className="absolute inset-[8%] rounded-full border border-dashed border-cyan-400/20" />

              {/* Profile image */}
              <div className="glass-panel relative h-[84%] w-[84%] overflow-hidden rounded-full border border-cyan-400/30 shadow-[0_0_60px_rgba(34,211,238,0.12)]">

            <img
  src={`${process.env.NODE_ENV === "production" ? "/Anas-fullstack-portfolio" : ""}/images/IMG_6983.jpeg`}
  alt="MD Anas Alam - C# .NET Backend Developer"
  className="h-full w-full rounded-full object-cover object-center"
  loading="eager"
/>

              </div>

              {/* Floating label */}
              <div className="absolute bottom-[12%] right-0 rounded-2xl border border-white/10 bg-[#101a30]/90 px-4 py-3 shadow-xl backdrop-blur-xl">
                <p className="text-xs font-semibold text-cyan-400">
                  SOFTWARE DEVELOPER
                </p>

                <p className="mt-1 text-[10px] text-slate-400">
                  C# • .NET • ASP.NET Core
                </p>
              </div>

            </div>

          </div>

          {/* HERO SECTION DIVIDER */}
          <a
            href="#about"
            className="portfolio-container relative z-10 flex items-center gap-4 pb-6 transition hover:text-cyan-400"
          >
            <span className="text-xs font-bold tracking-widest text-cyan-400">
              01
            </span>

            <span className="text-[10px] font-semibold tracking-[0.18em] text-slate-500">
              ABOUT ME
            </span>

            <span className="h-px flex-1 bg-gradient-to-r from-cyan-400/50 to-transparent" />

            <ChevronDown size={17} className="text-cyan-400" />
          </a>

        </section>

        {/* ABOUT SECTION */}
        <AboutSection />

        {/* PROFESSIONAL EXPERIENCE */}
        <ExperienceSection />

        {/* TECHNOLOGY STACK */}
        <TechnologyStack />

        {/* PROJECTS SECTION */}
        <ProjectSection />

        {/* CONTACT SECTION */}
        <ContactSection />

      </div>

      {/* ANAS AI CHATBOT */}
      <Chatbot />

    </main>
  );
}
