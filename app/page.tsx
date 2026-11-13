
"use client";

import Link from "next/link";
import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  MeshTransmissionMaterial,
} from "@react-three/drei";
import type { Mesh } from "three";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Cpu,
  Layers3,
  Sparkles,
} from "lucide-react";

function GlassObject() {
  const mesh = useRef<Mesh | null>(null);

  useFrame((state, delta) => {
    if (!mesh.current) return;

    const targetX = state.pointer.y * 0.16;
    const targetZ = state.pointer.x * 0.22;
    const smoothness = Math.min(1, delta * 2);

    mesh.current.rotation.x +=
      (targetX - mesh.current.rotation.x) * smoothness;

    mesh.current.rotation.z +=
      (targetZ - mesh.current.rotation.z) * smoothness;

    mesh.current.rotation.y += delta * 0.12;
  });

  return (
    <Float
      speed={1.1}
      rotationIntensity={0.12}
      floatIntensity={0.2}
    >
      <mesh ref={mesh}>
        <torusKnotGeometry args={[1.25, 0.24, 220, 32, 2, 3]} />

        <MeshTransmissionMaterial
          color="#e7d5ad"
          transmission={1}
          thickness={1.2}
          roughness={0.08}
          ior={1.35}
          chromaticAberration={0.035}
          anisotropy={0.25}
          distortion={0.18}
          distortionScale={0.25}
          temporalDistortion={0.12}
          samples={4}
          resolution={256}
        />
      </mesh>
    </Float>
  );
}

function ThreeDVisual() {
  return (
    <div className="absolute -inset-[18%] z-0">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5.5], fov: 42 }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 4, 5]} intensity={2} />
        <pointLight
          position={[-3, -2, 2]}
          color="#c6a66b"
          intensity={15}
        />
        <Suspense fallback={null}>
          <GlassObject />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
}

const projects = [
  {
    number: "01",
    name: "JARVIS AI",
    category: "Artificial Intelligence · Automation",
    description:
      "A personal voice assistant exploring voice interaction and desktop automation.",
    href: "/projects",
  },
  {
    number: "02",
    name: "LEGACIES",
    category: "Software Engineering · Full-stack",
    description:
      "A genealogy platform focused on preserving family histories and connections.",
    href: "/projects",
  },
  {
    number: "03",
    name: "DRGREENCLUB",
    category: "E-commerce · Software Systems",
    description:
      "An e-commerce project involving retail, wholesale and subscription experiences.",
    href: "/projects",
  },
];

const expertise = [
  {
    icon: Code2,
    title: "Software Engineering",
    description: "Building structured, maintainable software solutions.",
  },
  {
    icon: Cpu,
    title: "AI & Automation",
    description: "Exploring intelligent systems and practical automation.",
  },
  {
    icon: Layers3,
    title: "Full-stack Systems",
    description: "Working across application architecture and interfaces.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen ambient-glow">

      {/* NAVIGATION */}
      <header className="fixed top-0 left-0 z-50 w-full px-5 md:px-12 pt-5">
        <nav className="glass mx-auto flex max-w-7xl items-center justify-between rounded-full px-6 py-4">
          <Link href="/" className="text-xl font-semibold tracking-tight">
            DA<span className="text-gold">.</span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm text-white/65">
            <Link href="/about" className="hover:text-[#c6a66b] transition">About</Link>
            <Link href="/expertise" className="hover:text-[#c6a66b] transition">Expertise</Link>
            <Link href="/projects" className="hover:text-[#c6a66b] transition">Projects</Link>
            <Link href="/experience" className="hover:text-[#c6a66b] transition">Experience</Link>
          </div>

          <Link
            href="/contact"
            className="rounded-full bg-[#c6a66b] px-5 py-2.5 text-sm font-medium text-black transition hover:bg-[#dfc18a]"
          >
            Let's talk <ArrowUpRight className="ml-1 inline" size={15} />
          </Link>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-36 md:px-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-[#c6a66b]/[0.07] blur-[120px]" />
          <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-white/[0.04] blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <div className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#c6a66b]">
              <span className="h-px w-9 bg-[#c6a66b]" />
              Software Engineer
            </div>

            <h1 className="max-w-3xl text-5xl font-medium leading-[1.12] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              Building ideas
              <br />
              into <span className="font-serif italic text-[#c6a66b]">reality.</span>
            </h1>

            <p className="mt-8 max-w-lg text-base leading-8 text-white/55 md:text-lg">
              I'm David Adeleke. I build software, explore intelligent
              systems, and turn complex ideas into practical technology.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="glass glass-hover rounded-full px-7 py-4 text-sm"
              >
                Explore my work <ArrowUpRight className="ml-2 inline" size={16} />
              </Link>

              <Link
                href="/about"
                className="px-5 py-4 text-sm text-white/60 transition hover:text-[#c6a66b]"
              >
                More about me
              </Link>
            </div>

            <div className="mt-20 flex items-center gap-3 text-xs tracking-widest text-white/35">
              <ArrowDown size={15} />
              SCROLL TO EXPLORE
            </div>
          </motion.div>

          
{/* PORTRAIT */}
<motion.div
  initial={{ opacity: 0, scale: 0.92 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.2, delay: 0.2 }}
  className="relative isolate mx-auto flex w-full max-w-[480px] items-center justify-center"
>
  <div className="glass relative z-10 aspect-[4/5] w-full max-w-[390px] overflow-hidden rounded-[2rem]">
    <img
      src="/images/david-hero.jpg"
      alt="David Adeleke"
      className="absolute inset-0 h-full w-full object-cover object-center"
    />

    <div className="absolute inset-0 rounded-[2rem] border border-white/10" />
  </div>

  <div className="glass absolute -bottom-7 -left-5 z-20 rounded-2xl px-5 py-4 md:-left-16">
    <div className="flex items-center gap-3">
      <Sparkles className="text-[#c6a66b]" size={19} />
      <div>
        <p className="text-xs text-white/40">CURRENT FOCUS</p>
        <p className="mt-1 text-sm">Engineering & Innovation</p>
      </div>
    </div>
  </div>
</motion.div>
</div>
</section>


      {/* ABOUT PREVIEW */}
      <section className="bg-white px-6 py-28 text-black md:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#c6a66b]">
              01 / About
            </p>
            <h2 className="text-4xl leading-tight tracking-tight md:text-5xl">
              Curiosity drives
              <br />
              <span className="font-serif italic text-black">creation.</span>
            </h2>
          </div>

          <div>
            <p className="text-lg leading-9 text-[#C6A66B]">
              I approach technology as a continuous process of learning,
              experimentation and problem-solving. My interest lies in
              understanding how systems work and using that knowledge
              to build meaningful software.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm text-[#c6a66b] hover:gap-4 transition-all"
            >
              Get to know me <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="bg-[#090909] px-6 py-28 text-white md:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#c6a66b]">
                02 / Expertise
              </p>
              <h2 className="text-4xl tracking-tight md:text-5xl">
                Areas of <span className="font-serif italic text-[#c6a66b]">focus.</span>
              </h2>
            </div>
            <Link href="/expertise" className="text-sm text-white/55 hover:text-[#c6a66b]">
              Explore expertise <ArrowUpRight className="ml-1 inline" size={16} />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {expertise.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                  className="glass glass-hover rounded-3xl p-8"
                >
                  <Icon className="mb-12 text-[#c6a66b]" size={28} />
                  <h3 className="mb-4 text-xl">{item.title}</h3>
                  <p className="text-sm leading-7 text-white/45">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SELECTED PROJECTS */}
      <section className="bg-white px-6 py-28 text-black md:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#c6a66b]">
                03 / Selected work
              </p>
              <h2 className="text-4xl tracking-tight md:text-5xl">
                Things I've <span className="font-serif italic text-black">built.</span>
              </h2>
            </div>
            <Link href="/projects" className="text-sm text-[#c6a66b] hover:text-black">
              All projects <ArrowUpRight className="ml-1 inline" size={16} />
            </Link>
          </div>

          <div className="space-y-4">
            {projects.map((project) => (
              <Link
                href={project.href}
                key={project.number}
                className="glass glass-hover group flex flex-col gap-5 rounded-2xl p-7 md:flex-row md:items-center md:justify-between md:p-9"
              >
                <div className="flex items-start gap-6">
                  <span className="pt-1 text-xs text-[#c6a66b]">
                    {project.number}
                  </span>
                  <div>
                    <h3 className="text-2xl tracking-tight md:text-3xl">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-xs text-[#c6a66b]">
                      {project.category}
                    </p>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-white/45">
                      {project.description}
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  className="shrink-0 text-white/40 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#c6a66b]"
                  size={24}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE PREVIEW */}
      <section className="px-6 py-28 md:px-16">
        <div className="glass mx-auto max-w-7xl rounded-[2rem] p-9 md:p-16">
          <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#c6a66b]">
            04 / Experience
          </p>

          <div className="grid gap-10 md:grid-cols-2 md:items-end">
            <h2 className="text-4xl leading-tight tracking-tight md:text-5xl">
              Always learning.
              <br />
              Always <span className="font-serif italic text-[#c6a66b]">building.</span>
            </h2>

            <div>
              <p className="leading-8 text-white/50">
                My journey is shaped by hands-on projects, technical
                experimentation and a growing interest in building
                reliable software systems.
              </p>
              <Link
                href="/experience"
                className="mt-7 inline-flex items-center gap-2 text-sm text-[#c6a66b]"
              >
                Explore my journey <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="px-6 py-32 md:px-16">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-6 text-xs uppercase tracking-[0.25em] text-[#c6a66b]">
            05 / Get in touch
          </p>

          <h2 className="text-5xl leading-tight tracking-tight md:text-7xl">
            Have an idea?
            <br />
            <span className="font-serif italic text-[#c6a66b]">Let's build it.</span>
          </h2>

          <Link
            href="/contact"
            className="glass glass-hover mt-10 inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm"
          >
            Get in touch <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8 md:px-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-xs text-white/35 md:flex-row">
          <p>© 2026 David Adeleke. All rights reserved.</p>
          <p>Designed with intention. Built with curiosity.</p>
          <Link href="/" className="text-[#c6a66b] hover:text-white">
            Back to top ↑
          </Link>
        </div>
      </footer>
    </main>
  );
}
