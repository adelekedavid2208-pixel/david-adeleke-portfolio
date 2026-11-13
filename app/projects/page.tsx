
import Link from "next/link";

const projects = [
  {
    number: "01",
    name: "JARVIS AI",
    image: "jarvis-ai.jpg",
    projectUrl: "https://github.com/adelekedavid2208-pixel/JavisAI",
    linkLabel: "GitHub Repository",
    category: "ARTIFICIAL INTELLIGENCE / AUTOMATION",
    description:
      "A personal desktop voice assistant designed to explore voice interaction, intelligent responses, and automation of everyday computer tasks.",
    technologies: ["Python", "JavaScript", "Node.js", "Voice Recognition"],
    status: "Personal Project",
  },
  {
    number: "02",
    name: "LEGACIES",
    image: "legacies.jpg",
    projectUrl: "https://github.com/adelekedavid2208-pixel/Legacies",
    linkLabel: "GitHub Repository",
    category: "FULL-STACK DEVELOPMENT / DATA SYSTEMS",
    description:
      "A genealogy platform focused on preserving family histories, documenting relationships, and creating connections across generations.",
    technologies: ["Node.js", "Express.js", "PostgreSQL"],
    status: "Personal Project",
  },
  {
    number: "03",
    name: "DRGREENCLUB",
    image: "drgreenclub.jpg",
    projectUrl: "https://www.drgreenclub.com/",
    linkLabel: "Visit Website",
    category: "E-COMMERCE / SOFTWARE SYSTEMS",
    description:
      "An e-commerce experience exploring retail and wholesale purchasing, alongside subscription-based functionality.",
    technologies: ["JavaScript", "React", "Custom Development"],
    status: "Development Project",
  },
  {
    number: "04",
    name: "ELITE BARBERS",
    image: "elite-barbers.jpg",
    projectUrl: "https://github.com/adelekedavid2208-pixel/elite-barbers-site",
    linkLabel: "GitHub Repository",
    category: "WEB APPLICATION / BUSINESS SOLUTION",
    description:
      "A digital presence designed to present a barbershop's services and provide customers with a more accessible way to explore the business.",
    technologies: ["HTML", "CSS", "JavaScript"],
    status: "Project",
  },
  {
    number: "05",
    name: "RIA BRAIDS STUDIO",
    image: "ria-braids.jpg",
    projectUrl: "https://ria-braids-studio.netlify.app/",
    linkLabel: "Visit Website",
    category: "DIGITAL EXPERIENCE / BUSINESS SOLUTION",
    description:
      "A website concept designed to give a hair and beauty business a structured digital presence.",
    technologies: ["Web Technologies"],
    status: "Project",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#090909] text-white">

      {/* PAGE INTRODUCTION */}
      <section className="px-6 pb-24 pt-40 md:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm tracking-[0.25em] text-[#c6a66b]">
            SELECTED WORK / 01
          </p>

          <h1 className="max-w-4xl text-5xl font-medium leading-tight md:text-7xl">
            Ideas, experiments
            <br />
            and <span className="font-serif italic">engineering.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-[#c6a66b] md:text-lg">
            A collection of projects that reflect my interests
            in software engineering, intelligent systems,
            application development, and solving practical problems.
          </p>
        </div>
      </section>

      {/* PROJECT LIST */}
      <section className="bg-white px-6 py-24 text-black md:px-16">
        <div className="mx-auto max-w-7xl">

          <div className="mb-14 flex items-center justify-between">
            <p className="text-sm tracking-[0.2em] text-[#c6a66b]">
              PROJECT ARCHIVE
            </p>
            <p className="text-sm text-[#a58a5a]">
              05 Projects
            </p>
          </div>

          <div className="space-y-16">
            {projects.map((project) => (
              <article
                key={project.number}
                className="grid gap-8 border-t border-black/10 pt-8 md:grid-cols-[1fr_1fr]"
              >

                {/* PROJECT IMAGE */}
                <div className="glass relative aspect-[16/10] overflow-hidden rounded-xl">
                  <img
                    src={`/images/${project.image}`}
                    alt={`${project.name} project preview`}
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-500 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  <span className="absolute bottom-5 left-5 z-10 text-xs text-white">
                    PROJECT / {project.number}
                  </span>
                </div>

                {/* PROJECT INFORMATION */}
                <div className="flex flex-col justify-center">
                  <p className="mb-5 text-xs tracking-[0.15em] text-[#c6a66b]">
                    {project.category}
                  </p>

                  <h2 className="text-3xl font-medium md:text-4xl">
                    {project.name}
                  </h2>

                  <p className="mt-5 text-sm leading-8 text-[#a58a5a]">
                    {project.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-black/10 px-4 py-2 text-xs text-black"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <p className="mt-8 text-xs tracking-[0.15em] text-[#c6a66b]">
                    {project.status}
                  </p>

                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex w-fit items-center gap-2 border-b border-[#c6a66b]/40 pb-2 text-sm text-black transition hover:border-[#c6a66b] hover:text-[#a58a5a]"
                  >
                    {project.linkLabel}
                    <span>↗</span>
                  </a>
                </div>

              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="px-6 py-28 md:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm tracking-[0.25em] text-[#c6a66b]">
            ALWAYS BUILDING / 02
          </p>

          <h2 className="max-w-3xl text-4xl font-medium leading-tight md:text-6xl">
            Every project is
            <br />
            another opportunity
            <br />
            to <span className="font-serif italic">learn and improve.</span>
          </h2>

          <Link
            href="/contact"
            className="glass glass-hover mt-10 inline-flex rounded-full px-7 py-4 text-sm text-white"
          >
            Have a project in mind? Let's talk →
          </Link>
        </div>
      </section>

      {/* PAGE NAVIGATION */}
      <section className="border-t border-white/10 px-6 py-12 md:px-16">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link
            href="/expertise"
            className="text-sm text-[#c6a66b] transition hover:text-white"
          >
            ← Expertise
          </Link>

          <Link
            href="/experience"
            className="text-sm text-[#c6a66b] transition hover:text-white"
          >
            Next: Experience →
          </Link>
        </div>
      </section>

    </main>
  );
}
