
"use client";

import Link from "next/link";
import { useState } from "react";
import type { FormEvent } from "react";

const projectTypes = [
  "Software Development",
  "AI & Automation",
  "E-commerce",
  "Other",
];

const budgets = [
  "Under $500",
  "$500 – $1,000",
  "$1,000 – $3,000",
  "$3,000+",
  "Let's discuss",
];

export default function ContactPage() {
  const [selectedType, setSelectedType] = useState("Software Development");
  const [selectedBudget, setSelectedBudget] = useState("Let's discuss");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  
async function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();

  const form = e.currentTarget;

  setSubmitting(true);
  setStatus(null);

  try {
    const response = await fetch("https://formspree.io/f/xaeonejb", {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    });

    const result = await response.json();

    if (response.ok && result.ok === true) {
      setStatus({
        type: "success",
        message: "Your message has been received. I'll be in touch soon.",
      });

      form.reset();
      setName("");
      setEmail("");
      setMessage("");
      setSelectedType("Software Development");
      setSelectedBudget("Let's discuss");
    } else {
      setStatus({
        type: "error",
        message: result.error || "Something went wrong. Please try again.",
      });
    }
  } catch {
    setStatus({
      type: "error",
      message: "Unable to send your message. Check your connection and try again.",
    });
  } finally {
    setSubmitting(false);
  }
}


  return (
    <main className="min-h-screen bg-[#090909] text-white">

      {/* INTRODUCTION */}
      <section className="px-6 pb-16 pt-40 md:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm tracking-[0.25em] text-[#c6a66b]">
            CONTACT / 01
          </p>

          <h1 className="max-w-5xl text-5xl font-medium leading-tight md:text-7xl">
            Good ideas
            <br />
            start with a
            <br />
            <span className="font-serif italic">conversation.</span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-8 text-[#c6a66b]">
            Have a problem worth solving, an idea worth exploring,
            or a project in mind? Tell me about it. Let's see
            what we can build.
          </p>
        </div>
      </section>

      {/* CONTACT EXPERIENCE */}
      <section className="px-6 pb-28 md:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.8fr_1.2fr]">

          {/* LEFT SIDE */}
          <div className="flex flex-col justify-between gap-16">
            <div>
              <p className="mb-6 text-xs tracking-[0.2em] text-[#c6a66b]">
                HAVE SOMETHING IN MIND?
              </p>

              <h2 className="text-3xl font-medium leading-snug md:text-4xl">
                Let's turn
                <br />
                <span className="font-serif italic">possibility</span>
                <br />
                into something real.
              </h2>

              <p className="mt-6 max-w-sm text-sm leading-7 text-[#c6a66b]">
                Whether it's a software project, a technical
                collaboration, or simply an interesting idea,
                I'm open to meaningful conversations.
              </p>
            </div>

            <div className="border-t border-white/10 pt-8">
              <p className="mb-4 text-xs tracking-[0.2em] text-[#c6a66b]">
                ELSEWHERE
              </p>

              <Link
                href="/"
                className="inline-block text-sm text-white/80 transition hover:text-[#c6a66b]"
              >
                Explore my portfolio →
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE — FORM */}
          <form
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-6 md:p-10"
          >
            <input
              type="hidden"
              name="project_type"
              value={selectedType}
            />

            <input
              type="hidden"
              name="budget"
              value={selectedBudget}
            />

            <input
              type="hidden"
              name="_subject"
              value="New Portfolio Enquiry"
            />

            <div className="mb-10 flex items-center justify-between">
              <p className="text-sm font-medium">
                Tell me about your idea.
              </p>
              <span className="text-xs tracking-widest text-[#c6a66b]">
                01 — 04
              </span>
            </div>

            {/* NAME AND EMAIL */}
            <div className="grid gap-7 md:grid-cols-2">
              <div>
                <label className="mb-3 block text-xs text-[#c6a66b]">
                  YOUR NAME
                </label>
                <input
                  required
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="What should I call you?"
                  className="w-full border-b border-white/20 bg-transparent py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#c6a66b]"
                />
              </div>

              <div>
                <label className="mb-3 block text-xs text-[#c6a66b]">
                  EMAIL ADDRESS
                </label>
                <input
                  required
                  type="email"
                  name="_replyto"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full border-b border-white/20 bg-transparent py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#c6a66b]"
                />
              </div>
            </div>

            {/* PROJECT TYPE */}
            <div className="mt-12">
              <label className="mb-5 block text-xs text-[#c6a66b]">
                WHAT ARE WE BUILDING?
              </label>

              <div className="flex flex-wrap gap-3">
                {projectTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setSelectedType(type)}
                    className={`rounded-full border px-4 py-3 text-xs transition duration-300 ${
                      selectedType === type
                        ? "border-[#c6a66b] bg-[#c6a66b]/15 text-[#c6a66b]"
                        : "border-white/15 text-white/65 hover:border-white/40"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* BUDGET */}
            <div className="mt-12">
              <label className="mb-5 block text-xs text-[#c6a66b]">
                ESTIMATED BUDGET
              </label>

              <div className="flex flex-wrap gap-3">
                {budgets.map((budget) => (
                  <button
                    key={budget}
                    type="button"
                    onClick={() => setSelectedBudget(budget)}
                    className={`rounded-full border px-4 py-3 text-xs transition duration-300 ${
                      selectedBudget === budget
                        ? "border-[#c6a66b] bg-[#c6a66b]/15 text-[#c6a66b]"
                        : "border-white/15 text-white/65 hover:border-white/40"
                    }`}
                  >
                    {budget}
                  </button>
                ))}
              </div>
            </div>

            {/* MESSAGE */}
            <div className="mt-12">
              <label className="mb-3 block text-xs text-[#c6a66b]">
                TELL ME MORE ABOUT IT
              </label>

              <textarea
                required
                name="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What's the idea? What problem are you trying to solve?"
                className="w-full resize-none border-b border-white/20 bg-transparent py-3 text-sm leading-7 text-white outline-none transition placeholder:text-white/30 focus:border-[#c6a66b]"
              />
            </div>

            {/* SUBMIT */}
            <div className="mt-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
              <p className="text-xs leading-6 text-white/40">
                Your idea deserves a thoughtful conversation.
              </p>

              <button
                type="submit"
                disabled={submitting}
                className="glass glass-hover group inline-flex items-center justify-center gap-4 rounded-full px-7 py-4 text-sm text-white disabled:cursor-not-allowed disabled:opacity-50"
              >
                {submitting ? "Sending..." : "Send enquiry"}
                <span className="transition-transform group-hover:translate-x-1">
                  {submitting ? "..." : "→"}
                </span>
              </button>
            </div>

            {/* SUBMISSION FEEDBACK */}
            {status && (
              <div
                role="status"
                className={`mt-6 rounded-xl border p-4 text-sm leading-7 ${
                  status.type === "success"
                    ? "border-[#c6a66b]/40 bg-[#c6a66b]/10 text-[#c6a66b]"
                    : "border-red-400/40 bg-red-400/10 text-red-300"
                }`}
              >
                {status.message}
              </div>
            )}
          </form>

        </div>
      </section>

      {/* CLOSING */}
      <section className="border-t border-white/10 px-6 py-12 md:px-16">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link
            href="/experience"
            className="text-sm text-[#c6a66b] transition hover:text-white"
          >
            ← Experience
          </Link>

          <Link
            href="/"
            className="text-sm text-[#c6a66b] transition hover:text-white"
          >
            Back to home ↑
          </Link>
        </div>
      </section>

    </main>
  );
}
