import FadeIn from "../ui/FadeIn";
import Container from "../layout/Container";
import Section from "../layout/Section";
import SectionTitle from "../ui/SectionTitle";
import SkillBadge from "../ui/SkillBadge";

import { skillCategories } from "../../data/skills";

function Skills() {
  return (
    <Section id="experience">
      <Container>
        <SectionTitle
          eyebrow="Experience"
          title="Skills & Technologies"
          description="
            Technologies and tools I use to build
            scalable, modern web applications.
          "
        />

        <FadeIn>
          <div className="grid gap-8 md:grid-cols-2">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="rounded-3xl border border-black/5 bg-white/50 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
              >
                <h3 className="mb-6 text-2xl font-semibold text-[#1e1e1e]">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <SkillBadge key={skill} label={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}

export default Skills;
