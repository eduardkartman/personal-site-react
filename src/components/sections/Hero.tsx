import FadeIn from "../ui/FadeIn";
import Container from "../layout/Container";
import Section from "../layout/Section";
import Button from "../ui/Button";

import { motion } from "framer-motion";

function Hero() {
  return (
    <Section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-[#d6c6ab]/30 blur-3xl" />

        <div className="absolute right-[-10%] bottom-[0%] h-[400px] w-[400px] rounded-full bg-white/40 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="pointer-events-none absolute top-[55%] left-[42%] hidden -translate-x-1/2 -translate-y-1/2 text-[12rem] font-black tracking-[-0.08em] text-black/[0.02] select-none lg:block">
          EK
        </div>
        <div className="grid items-center gap-24 lg:grid-cols-[1fr_1.1fr]">
          {/* IMAGE */}
          <FadeIn>
            <div className="flex justify-center">
              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                {/* Ambient glow */}
                <div className="absolute inset-0 scale-110 rounded-full bg-[#d6c6ab]/40 blur-3xl" />

                {/* Outer ring */}
                <div className="relative flex items-center justify-center rounded-full border border-white/60 bg-white/30 p-6 shadow-2xl shadow-black/10 backdrop-blur-xl">
                  {/* Inner image */}
                  <div className="overflow-hidden rounded-full border border-white/50 shadow-xl shadow-black/10">
                    <img
                      src="/profile-pic.png"
                      alt="Eduard Kartman"
                      draggable={false}
                      className="h-[360px] w-[360px] object-cover transition-transform duration-700 hover:scale-105 md:h-[420px] md:w-[420px]"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </FadeIn>

          {/* CONTENT */}
          <FadeIn delay={0.2}>
            <div className="max-w-xl">
              <p className="mb-6 text-sm font-medium tracking-[0.35em] text-black/40 uppercase">
                Fullstack Software Developer
              </p>

              <h1 className="text-6xl leading-[0.95] font-black tracking-tight md:text-7xl lg:text-8xl">
                <span className="bg-gradient-to-r from-black to-black/70 bg-clip-text text-transparent">
                  Eduard
                </span>

                <br />

                <span className="text-black/20">Kartman</span>
              </h1>

              <p className="mt-10 max-w-lg text-lg leading-relaxed text-black/60 md:text-xl">
                Building scalable web applications with .NET, React, TypeScript
                and Azure.
              </p>

              {/* BUTTONS */}
              <div className="mt-12 flex flex-wrap gap-4">
                <Button href="/eduard-resume.pdf">Download CV</Button>
                <Button variant="secondary">Contact Me</Button>
                <Button
                  href="https://learn.microsoft.com/en-us/users/eduardkartman-0637/credentials/fa3190dc4a253fa4"
                  variant="secondary"
                >
                  Microsoft AZ-204
                </Button>
                <Button
                  href="https://learn.microsoft.com/en-us/users/eduardkartman-0637/credentials/3e970851ba0d31b0"
                  variant="secondary"
                >
                  Microsoft AZ-104
                </Button>
              </div>

              {/* SOCIALS */}
              <div className="mt-12 flex items-center gap-8">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative text-xs font-semibold tracking-[0.25em] text-black/40 uppercase transition-colors hover:text-black"
                >
                  GitHub
                  <span className="absolute -bottom-2 left-0 h-px w-0 bg-black transition-all duration-300 group-hover:w-full" />
                </a>

                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative text-xs font-semibold tracking-[0.25em] text-black/40 uppercase transition-colors hover:text-black"
                >
                  LinkedIn
                  <span className="absolute -bottom-2 left-0 h-px w-0 bg-black transition-all duration-300 group-hover:w-full" />
                </a>

                <a
                  href="mailto:eduard.kartman10@gmail.com"
                  className="group relative text-xs font-semibold tracking-[0.25em] text-black/40 uppercase transition-colors hover:text-black"
                >
                  Email
                  <span className="absolute -bottom-2 left-0 h-px w-0 bg-black transition-all duration-300 group-hover:w-full" />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}

export default Hero;
