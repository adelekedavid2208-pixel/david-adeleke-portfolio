
import Link from "next/link";

const disciplines = [
  {
    number: "01",
    title: "Software Engineering",
    description:
      "Developing structured applications with an emphasis on functionality, maintainability, and thoughtful architecture.",
  },
  {
    number: "02",
    title: "Frontend Development",
    description:
      "Building responsive, interactive interfaces with attention to usability, visual consistency, and user experience.",
  },
  {
    number: "03",
    title: "Backend Development",
    description:
      "Exploring application logic, APIs, data management, and the systems that power digital products.",
  },
  {
    number: "04",
    title: "AI & Automation",
    description:
      "Experimenting with intelligent applications, voice interaction, and automation of everyday tasks.",
  },
];

const technologies = [
  {
    category: "LANGUAGES",
    items: ["JavaScript", "TypeScript", "Python", "HTML", "CSS"],
  },
  {
    category: "FRAMEWORKS & RUNTIME",
    items: ["React", "Next.js", "Node.js", "Express.js", "Tailwind CSS"],
  },
  {
    category: "DATABASES",
    items: ["PostgreSQL"],
  },
  {
    category: "TOOLS",
    items: ["Git", "GitHub", "VS Code", "Figma"],
  },
];

export default function ExpertisePage() {
  return (
    <main className="min-h-screen bg-[#090909] text-white">

      {/* INTRODUCTION */}
      <section className="px-6 pb-24 pt-40 md:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm tracking-[0.25em] text-[#c6a66b]">
            EXPERTISE / 01
          </p>

          <h1 className="max-w-4xl text-5xl font-medium leading-tight md:text-7xl">
            Engineering across
            <br />
            <span className="font-serif italic">different layers.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-[#c6a66b] md:text-lg">
            My technical interests span software engineering,
            application development, backend systems, and
            intelligent automation. I enjoy exploring how
            different technologies work together to create
            useful software.
          </p>
        </div>
      </section>

      {/* DISCIPLINES */}
      <section className="bg-white px-6 py-24 text-black md:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm tracking-[0.25em] text-[#c6a66b]">
            AREAS OF FOCUS / 02
          </p>

          <h2 className="mb-14 text-4xl font-medium md:text-5xl">
            What I work with.
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            {disciplines.map((item) => (
              <div
                key={item.number}
                className="rounded-xl border border-black/10 bg-[#f8f7f4] p-8 transition duration-300 hover:-translate-y-1 hover:border-[#c6a66b]"
              >
                <p className="mb-12 text-xs tracking-[0.2em] text-[#c6a66b]">
                  {item.number}
                </p>

                <h3 className="text-2xl font-medium">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-[#a58a5a]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="px-6 py-24 md:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm tracking-[0.25em] text-[#c6a66b]">
            TECHNOLOGIES / 03
          </p>

          <h2 className="mb-14 text-4xl font-medium md:text-5xl">
            Tools of the trade.
          </h2>

          <div className="space-y-0">
            {technologies.map((group, index) => (
              <div
                key={group.category}
                className="grid gap-6 border-t border-white/10 py-9 md:grid-cols-[0.7fr_1.3fr]"
              >
                <p className="text-xs tracking-[0.2em] text-[#c6a66b]">
                  {group.category}
                </p>

                <div className="flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="glass rounded-full px-5 py-3 text-sm text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="bg-white px-6 py-24 text-black md:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm tracking-[0.25em] text-[#c6a66b]">
            ENGINEERING MINDSET / 04
          </p>

          <h2 className="max-w-3xl text-4xl font-medium leading-tight md:text-5xl">
            Technology is a tool.
            <br />
            <span className="font-serif italic">Problem-solving is the goal.</span>
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-8 text-[#a58a5a]">
            I approach engineering with curiosity and a willingness
            to understand the systems behind the software I build.
            I'm interested in more than making something work:
            I want to understand why it works and how it can be
            improved.
          </p>
        </div>
      </section>

      {/* PAGE NAVIGATION */}
      <section className="border-t border-white/10 px-6 py-12 md:px-16">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link
            href="/about"
            className="text-sm text-[#c6a66b] transition hover:text-white"
          >
            ← About
          </Link>

          <Link
            href="/projects"
            className="text-sm text-[#c6a66b] transition hover:text-white"
          >
            Next: Projects →
          </Link>
        </div>
      </section>

    </main>
  );
}
