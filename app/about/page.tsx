
import Link from "next/link";

const projects = [
  {
    name: "JARVIS AI",
    description: "A personal voice assistant exploring AI interaction and desktop automation.",
  },
  {
    name: "LEGACIES",
    description: "A genealogy platform focused on preserving family histories and connections.",
  },
  {
    name: "DRGREENCLUB",
    description: "An e-commerce system exploring retail, wholesale and subscription experiences.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#090909] text-white">

      {/* INTRODUCTION */}
      <section className="px-6 pb-24 pt-40 md:px-16">
        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-[1.2fr_0.8fr]">

          <div>
            <p className="mb-6 text-sm tracking-[0.25em] text-[#c6a66b]">
              ABOUT ME / 01
            </p>

            <h1 className="text-5xl font-medium leading-tight md:text-7xl">
              The mind behind
              <br />
              <span className="font-serif italic text-white">
                the systems.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-[#c6a66b] md:text-lg">
              I'm David Adeleke, a software engineer interested in
              building intelligent software, exploring emerging
              technologies, and developing solutions to practical
              problems.
            </p>

            <p className="mt-5 max-w-xl text-base leading-8 text-[#c6a66b]">
              I enjoy understanding how things work, turning ideas
              into functional systems, and continuously challenging
              myself to build better.
            </p>
          </div>

          
{/* PORTRAIT */}
<div className="glass relative aspect-[4/5] overflow-hidden rounded-2xl">
  <img
    src="/images/david-about-1.jpg"
    alt="David Adeleke"
    className="absolute inset-0 h-full w-full object-cover object-center"
  />

    <span className="absolute bottom-5 right-5 z-10 text-xs text-white/80">
    DAVID ADELEKE
  </span>
</div>

        </div>
      </section>

      {/* BACKGROUND */}
      <section className="bg-white px-6 py-24 text-black md:px-16">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">

          <div>
            <p className="mb-5 text-sm tracking-[0.25em] text-[#c6a66b]">
              MY BACKGROUND / 02
            </p>

            <h2 className="text-4xl font-medium leading-tight md:text-5xl">
              A journey shaped
              <br />
              by <span className="font-serif italic">curiosity.</span>
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-[#a58a5a]">
            <p>
              My academic background is in English and Literary
              Studies at the University of Ilorin. Alongside my
              studies, I've been developing my skills and pursuing
              my interest in software engineering.
            </p>

            <p>
              My interest extends beyond writing code. I'm drawn
              to understanding how applications work, how different
              components connect, and how technology can be used
              to solve meaningful problems.
            </p>

            <p>
              Through independent projects and continuous learning,
              I've explored application development, backend systems,
              artificial intelligence, and automation.
            </p>
          </div>

        </div>
      </section>

      {/* ENGINEERING APPROACH */}
      <section className="px-6 py-24 md:px-16">
        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">

          <div>
            <p className="mb-5 text-sm tracking-[0.25em] text-[#c6a66b]">
              MY APPROACH / 03
            </p>

            <h2 className="text-4xl font-medium leading-tight md:text-5xl">
              More than code.
              <br />
              <span className="font-serif italic">
                A way of thinking.
              </span>
            </h2>

            <div className="mt-8 space-y-5 text-base leading-8 text-[#c6a66b]">
              <p>
                I believe good software engineering begins with
                understanding the problem before deciding how to
                solve it.
              </p>

              <p>
                I'm interested in building systems that are
                purposeful, structured, maintainable, and useful
                beyond the interface.
              </p>

              <p>
                I'm still learning, experimenting, and expanding
                my technical perspective. For me, the process of
                becoming a better engineer never really stops.
              </p>
            </div>
          </div>

          
{/* WORKING IMAGE */}
<div className="glass relative aspect-[5/4] overflow-hidden rounded-2xl">
  <img
    src="/images/workspace.jpg"
    alt="David's workspace"
    className="absolute inset-0 h-full w-full object-cover object-center"
  />
</div>


        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="bg-white px-6 py-24 text-black md:px-16">
        <div className="mx-auto max-w-7xl">

          <p className="mb-5 text-sm tracking-[0.25em] text-[#c6a66b]">
            WHAT I'M BUILDING / 04
          </p>

          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="text-4xl font-medium md:text-5xl">
              Ideas brought
              <br />
              into <span className="font-serif italic">reality.</span>
            </h2>

            <p className="max-w-md text-sm leading-7 text-[#a58a5a]">
              A selection of projects through which I explore
              software engineering, intelligent systems, and
              practical applications of technology.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={project.name}
                className="rounded-xl border border-black/10 bg-[#f8f7f4] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#c6a66b]"
              >
                <p className="mb-10 text-xs tracking-[0.2em] text-[#c6a66b]">
                  0{index + 1}
                </p>

                <h3 className="text-xl font-medium">
                  {project.name}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#a58a5a]">
                  {project.description}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/projects"
            className="mt-10 inline-block text-sm text-[#a58a5a] transition hover:text-black"
          >
            Explore all projects →
          </Link>

        </div>
      </section>

      {/* NEXT PAGE */}
      <section className="border-t border-white/10 px-6 py-12 md:px-16">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link
            href="/"
            className="text-sm text-[#c6a66b] transition hover:text-white"
          >
            ← Back home
          </Link>

          <Link
            href="/expertise"
            className="text-sm text-[#c6a66b] transition hover:text-white"
          >
            Next: Expertise →
          </Link>
        </div>
      </section>

    </main>
  );
}
