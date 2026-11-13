
import Link from "next/link";

const milestones = [
  {
    number: "01",
    period: "ONGOING",
    title: "Software Engineering",
    type: "Independent Development",
    description:
      "Developing practical software projects while strengthening my understanding of application architecture, programming concepts, and software development practices.",
    highlights: [
      "Building and refining personal software projects",
      "Exploring frontend and backend development",
      "Learning to structure and maintain applications",
    ],
  },
  {
    number: "02",
    period: "ONGOING",
    title: "AI & Automation",
    type: "Personal Exploration",
    description:
      "Exploring intelligent systems and practical automation through projects involving voice interaction, desktop control, and assistant functionality.",
    highlights: [
      "Developing a personal voice assistant",
      "Experimenting with speech recognition",
      "Exploring desktop automation",
    ],
  },
  {
    number: "03",
    period: "ONGOING",
    title: "Academic Development",
    type: "University of Ilorin",
    description:
      "Studying English and Literary Studies while independently pursuing technical knowledge and developing skills in software engineering.",
    highlights: [
      "Developing communication and analytical skills",
      "Balancing academic study with technical learning",
      "Continuously expanding technical knowledge",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-[#090909] text-white">

      {/* INTRODUCTION */}
      <section className="px-6 pb-24 pt-40 md:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm tracking-[0.25em] text-[#c6a66b]">
            EXPERIENCE / 01
          </p>

          <h1 className="max-w-4xl text-5xl font-medium leading-tight md:text-7xl">
            Growth through
            <br />
            <span className="font-serif italic">building and learning.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-[#c6a66b] md:text-lg">
            My journey in technology is shaped by independent
            development, practical experimentation, and a
            commitment to continuous learning.
          </p>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-white px-6 py-24 text-black md:px-16">
        <div className="mx-auto max-w-7xl">

          <p className="mb-5 text-sm tracking-[0.25em] text-[#c6a66b]">
            MY JOURNEY / 02
          </p>

          <h2 className="mb-16 text-4xl font-medium md:text-5xl">
            The progression.
          </h2>

          <div className="space-y-0">
            {milestones.map((item) => (
              <article
                key={item.number}
                className="grid gap-8 border-t border-black/10 py-12 md:grid-cols-[0.35fr_1.65fr]"
              >
                <div>
                  <p className="text-xs tracking-[0.2em] text-[#c6a66b]">
                    {item.number} / {item.period}
                  </p>
                </div>

                <div>
                  <p className="mb-3 text-xs tracking-[0.15em] text-[#a58a5a]">
                    {item.type}
                  </p>

                  <h3 className="text-2xl font-medium md:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-5 max-w-2xl text-sm leading-8 text-[#a58a5a]">
                    {item.description}
                  </p>

                  <ul className="mt-7 space-y-3">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-3 text-sm text-black"
                      >
                        <span className="mt-1 text-[#c6a66b]">↗</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* CONTINUOUS LEARNING */}
      <section className="px-6 py-28 md:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="glass rounded-2xl p-8 md:p-14">
            <p className="mb-5 text-sm tracking-[0.25em] text-[#c6a66b]">
              LOOKING AHEAD / 03
            </p>

            <h2 className="max-w-3xl text-4xl font-medium leading-tight md:text-6xl">
              Still learning.
              <br />
              Still building.
              <br />
              <span className="font-serif italic">
                Always evolving.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-[#c6a66b]">
              I'm focused on deepening my engineering knowledge,
              taking on more challenging problems, and building
              software that demonstrates both technical growth
              and thoughtful problem-solving.
            </p>

            <Link
              href="/projects"
              className="mt-9 inline-flex text-sm text-[#c6a66b] transition hover:text-white"
            >
              Explore my projects →
            </Link>
          </div>
        </div>
      </section>

      {/* PAGE NAVIGATION */}
      <section className="border-t border-white/10 px-6 py-12 md:px-16">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link
            href="/projects"
            className="text-sm text-[#c6a66b] transition hover:text-white"
          >
            ← Projects
          </Link>

          <Link
            href="/contact"
            className="text-sm text-[#c6a66b] transition hover:text-white"
          >
            Next: Contact →
          </Link>
        </div>
      </section>

    </main>
  );
}
