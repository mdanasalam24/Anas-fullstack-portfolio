
"use client";

import { motion } from "motion/react";

import {
  Activity,
  Code2,
  Coffee,
  Container,
  Cpu,
  Database,
  FileSpreadsheet,
  FlaskConical,
  GitBranch,
  Globe,
  Layers,
  Monitor,
  RadioTower,
  Send,
  Server,
  Table,
  TestTube,
} from "lucide-react";

import type { Technology } from "./technologyData";

const iconMap: Record<string, React.ElementType> = {
  code: Code2,
  database: Database,
  coffee: Coffee,
  server: Server,
  layers: Layers,
  globe: Globe,
  table: Table,
  "test-tube": TestTube,
  "flask-conical": FlaskConical,
  container: Container,
  "git-branch": GitBranch,
  send: Send,
  monitor: Monitor,
  cpu: Cpu,
  activity: Activity,
  "radio-tower": RadioTower,
  "file-spreadsheet": FileSpreadsheet,
};

const levelStyles = {
  "Professional Experience":
    "text-emerald-400 border-emerald-400/20 bg-emerald-400/5",

  "Project Experience":
    "text-cyan-400 border-cyan-400/20 bg-cyan-400/5",

  "Working Knowledge":
    "text-amber-400 border-amber-400/20 bg-amber-400/5",

  "Basic Knowledge":
    "text-slate-400 border-white/10 bg-white/5",
};

type Props = {
  technology: Technology;
  index: number;
};

export default function TechnologyCard({
  technology,
  index,
}: Props) {
  const Icon = iconMap[technology.icon] ?? Code2;

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.45,
        delay: (index % 4) * 0.06,
        ease: "easeOut",
      }}
      whileHover={{
        y: -5,
        transition: { duration: 0.25 },
      }}
      className="
        group relative flex h-full min-h-[390px]
        flex-col overflow-hidden rounded-2xl
        border border-white/10
        bg-white/[0.035] p-6
        shadow-[0_8px_32px_rgba(0,0,0,0.12)]
        backdrop-blur-xl
        transition-all duration-300
        hover:border-cyan-400/30
        hover:bg-white/[0.06]
      "
    >
      <div className="
        pointer-events-none absolute inset-0
        bg-gradient-to-br from-white/[0.06]
        via-transparent to-cyan-400/[0.025]
      " />

      <div className="
        pointer-events-none absolute -right-16 -top-16
        h-40 w-40 rounded-full bg-cyan-400/10
        blur-3xl opacity-0 transition-opacity duration-500
        group-hover:opacity-100
      " />

      <div className="relative flex items-start justify-between gap-3">
        <div className="
          rounded-xl border border-cyan-400/20
          bg-cyan-400/10 p-3 text-cyan-400
          transition-all duration-300
          group-hover:scale-110 group-hover:bg-cyan-400/20
        ">
          <Icon size={23} strokeWidth={1.7} />
        </div>

        <span className="
          text-xs font-medium tracking-widest text-slate-500
        ">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="relative mt-6">
        <p className="
          text-[10px] font-semibold uppercase
          tracking-[0.2em] text-cyan-400/70
        ">
          {technology.category}
        </p>

        <h3 className="
          mt-2 min-h-[56px] flex items-center
          text-xl font-semibold text-white
          transition-colors duration-300
          group-hover:text-cyan-300
        ">
          {technology.name}
        </h3>

        <p className="
          mt-3 min-h-[72px] text-sm
          leading-6 text-slate-400
        ">
          {technology.description}
        </p>
      </div>

      <div className="
        relative mt-5 flex-1
        border-t border-white/10 pt-4
      ">
        <p className="
          text-[10px] font-semibold
          uppercase tracking-widest text-slate-500
        ">
          Practical Usage
        </p>

        <p className="
          mt-2 text-xs leading-6 text-slate-400
        ">
          {technology.usage}
        </p>
      </div>

      <div className="relative mt-5 min-h-[30px]">
        <span className={`
          inline-flex rounded-full border px-3 py-1.5
          text-[10px] font-semibold
          ${levelStyles[technology.level]}
        `}>
          {technology.level}
        </span>
      </div>

      <div className="
        absolute bottom-0 left-0 h-[2px] w-0
        bg-cyan-400 transition-all duration-500
        group-hover:w-full
      " />
    </motion.article>
  );
}
