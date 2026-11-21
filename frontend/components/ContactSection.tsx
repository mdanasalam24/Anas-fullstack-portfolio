
"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
  FiArrowUpRight,
} from "react-icons/fi";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

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

const contactDetails = [
  {
    label: "Email",
    value: "mdanasalam24@gmail.com",
    href: "mailto:mdanasalam24@gmail.com",
    icon: FiMail,
  },
  {
    label: "Phone",
    value: "+91 7667150348",
    href: "tel:+917667150348",
    icon: FiPhone,
  },
  {
    label: "Location",
    value: "Ghaziabad, Uttar Pradesh, India",
    href: "",
    icon: FiMapPin,
  },
];

const reveal = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (status !== "idle") setStatus("idle");
  };

 const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  if (!API_BASE_URL) {
    setStatus("error");
    setErrorMessage("Backend API URL is not configured.");
    return;
  }

  setStatus("sending");
  setErrorMessage("");

  try {
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(form),
    });

    if (!response.ok) {
      throw new Error(
        "Message could not be sent. Please try again."
      );
    }

    const result = await response.json();

    setStatus("success");

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    console.log("Backend response:", result);

  } catch (error) {
    console.error("Contact API Error:", error);

    setStatus("error");

    setErrorMessage(
      error instanceof Error
        ? error.message
        : "Something went wrong. Please try again."
    );
  }
};

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-12 sm:py-16 lg:py-20"
    >
      {/* Background */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-cyan-500/[0.06] blur-[120px]" />

      <div className="portfolio-container relative z-10">

        {/* Section Heading */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12 max-w-2xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-cyan-400" />
            <p className="section-label">05 / CONTACT</p>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Let's build something{" "}
            <span className="gradient-text">meaningful.</span>
          </h2>

          <p className="mt-5 text-sm leading-8 text-slate-400 sm:text-base">
            Have an opportunity, a project idea, or just want
            to connect? Feel free to reach out. I'm always
            open to meaningful conversations and new opportunities.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">

          {/* LEFT: Contact Information */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="flex flex-col"
          >
            <h3 className="text-xl font-semibold text-white">
              Get in touch
            </h3>

            <p className="mt-3 max-w-md text-sm leading-7 text-slate-400">
              Whether it's a job opportunity, collaboration,
              or a technical discussion, I'd be happy to hear
              from you.
            </p>

            <div className="mt-8 space-y-4">
              {contactDetails.map((item) => {
                const Icon = item.icon;

                const content = (
                  <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-[var(--surface)]/40 p-4 transition duration-300 hover:border-cyan-400/30">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                      <Icon size={19} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-medium text-slate-500">
                        {item.label}
                      </p>
                      <p className="mt-1 break-words text-sm font-medium text-slate-200">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="mt-9">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Find me on
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return social.href ? (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      title={social.name}
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-400"
                    >
                      <Icon size={19} />
                    </a>
                  ) : (
                    <span
                      key={social.name}
                      title={`${social.name} link coming soon`}
                      aria-label={`${social.name} link coming soon`}
                      className="flex h-11 w-11 cursor-default items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-slate-600"
                    >
                      <Icon size={19} />
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Availability */}
            <div className="mt-8 flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>

              <p className="text-xs text-slate-400">
                Open to software development opportunities
              </p>
            </div>
          </motion.div>

          {/* RIGHT: Contact Form */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="rounded-2xl border border-white/10 bg-[var(--surface)]/40 p-5 sm:p-8"
          >
            <h3 className="text-xl font-semibold text-white">
              Send me a message
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Fill in the details below and I'll get back to you.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-7 space-y-5"
            >
              {/* Name & Email */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Your Name
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    maxLength={100}
                    autoComplete="name"
                    className="w-full rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Email Address
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    maxLength={150}
                    autoComplete="email"
                    className="w-full rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Subject
                </label>

                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What is this regarding?"
                  required
                  maxLength={150}
                  className="w-full rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  required
                  minLength={10}
                  maxLength={2000}
                  rows={5}
                  className="w-full resize-y rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3.5 text-sm leading-7 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
                />
              </div>

              {/* Status */}
              {status === "success" && (
                <div
                  role="status"
                  className="flex items-center gap-2 rounded-lg border border-emerald-400/20 bg-emerald-400/10 p-3 text-sm text-emerald-400"
                >
                  <FiCheckCircle size={18} />
                  Message sent successfully. Thank you!
                </div>
              )}

              {status === "error" && (
                <div
                  role="alert"
                  className="flex items-start gap-2 rounded-lg border border-red-400/20 bg-red-400/10 p-3 text-sm text-red-400"
                >
                  <FiAlertCircle size={18} className="mt-0.5 shrink-0" />
                  {errorMessage}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-cyan-400 px-6 py-4 text-sm font-bold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? (
                  "Sending Message..."
                ) : (
                  <>
                    Send Message
                    <FiSend
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </>
                )}
              </button>

              <p className="text-center text-xs leading-6 text-slate-500">
                Your information will only be used to respond
                to your message.
              </p>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-10 border-t border-white/10 pt-7 text-center">
          <p className="text-xs text-slate-500">
            © MD Anas Alam. All rights reserved.
          </p>
        </div>

      </div>
    </section>
  );
}
