import FadeIn from "../ui/FadeIn";
import Container from "../layout/Container";
import Section from "../layout/Section";

import {
  experienceItems,
  educationItems,
  certificationItems,
} from "../../data/about";

function About() {
  return (
    <Section id="about">
      <Container>
        <div className="grid gap-24 lg:grid-cols-[0.8fr_1.2fr]">
          {/* LEFT SIDE */}
          <FadeIn>
            <div className="lg:sticky lg:top-32">
              <p className="text-sm font-medium tracking-[0.3em] text-black/40 uppercase">
                About
              </p>

              <h2 className="mt-6 text-5xl leading-none font-black tracking-tight text-black md:text-6xl">
                Experience
                <br />
                <span className="text-black/20">& Education</span>
              </h2>

              <p className="mt-10 max-w-sm text-lg leading-relaxed text-black/60">
                Passionate about building scalable applications, modern frontend
                experiences and cloud-native solutions.
              </p>

              <div className="mt-16">
                <p className="text-[7rem] leading-none font-black tracking-[-0.08em] text-black/10 md:text-[9rem]">
                  4
                </p>

                <p className="-mt-2 text-sm font-semibold tracking-[0.3em] text-black/40 uppercase">
                  Years Building Software
                </p>
              </div>
            </div>
          </FadeIn>

          {/* RIGHT SIDE */}
          <FadeIn delay={0.2}>
            <div className="space-y-20">
              {/* CERTIFICATIONS */}
              <div>
                <div className="mb-10 flex items-center gap-4">
                  <div className="h-px w-12 bg-black/10" />

                  <p className="text-sm font-semibold tracking-[0.25em] text-black/40 uppercase">
                    Certifications
                  </p>
                </div>

                <div className="space-y-14">
                  {certificationItems.map((item) => (
                    <div
                      key={item.title}
                      className="border-l border-black/10 pl-8"
                    >
                      <h3 className="text-2xl font-bold text-black">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-lg text-black/60">
                        {item.issuer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* EXPERIENCE */}
              <div>
                <div className="mb-10 flex items-center gap-4">
                  <div className="h-px w-12 bg-black/10" />

                  <p className="text-sm font-semibold tracking-[0.25em] text-black/40 uppercase">
                    Most Relevant Experience
                  </p>
                </div>

                <div className="space-y-14">
                  {experienceItems.map((item) => (
                    <div
                      key={item.company}
                      className="border-l border-black/10 pl-8"
                    >
                      <p className="text-sm tracking-wide text-black/40">
                        {item.period}
                      </p>

                      <h3 className="mt-3 text-2xl font-bold text-black">
                        {item.role}
                      </h3>

                      <p className="mt-2 text-lg text-black/60">
                        {item.company}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* EDUCATION */}
              {/* EDUCATION */}
              <div>
                <div className="mb-10 flex items-center gap-4">
                  <div className="h-px w-12 bg-black/10" />

                  <p className="text-sm font-semibold tracking-[0.25em] text-black/40 uppercase">
                    Education
                  </p>
                </div>

                <div className="space-y-14">
                  {educationItems.map((item) => (
                    <div
                      key={item.title}
                      className="border-l border-black/10 pl-8"
                    >
                      <h3 className="text-2xl font-bold text-black">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-lg text-black/60">
                        {item.school}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}

export default About;
