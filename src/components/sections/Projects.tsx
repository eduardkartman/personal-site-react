import Container from "../layout/Container";
import Section from "../layout/Section";
import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../data/projects";
import FadeIn from "../ui/FadeIn";
import { motion } from "framer-motion";

function Projects() {
  return (
    <Section id="projects">
      <Container>
        <SectionTitle
          eyebrow="Projects"
          title="Featured Work"
          description="
            A selection of projects focused on
            fullstack development, frontend
            architecture and scalable applications.
          "
        />
        <FadeIn>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  technologies={project.technologies}
                  github={project.github}
                />
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}

export default Projects;
