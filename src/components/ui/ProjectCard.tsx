import Button from "./Button";
import SkillBadge from "./SkillBadge";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
};

function ProjectCard({
  title,
  description,
  image,
  technologies,
  github,
}: ProjectCardProps) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-black/5 bg-white/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-black/10 hover:shadow-2xl hover:shadow-black/5">
      <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-3xl border border-white/40" />
      </div>

      <div className="relative flex h-80 items-center justify-center overflow-hidden bg-[#f4f1eb] p-4">
        <img
          src={image}
          alt={title}
          draggable={false}
          className="h-full w-full rounded-2xl object-contain transition-transform duration-500 group-hover:scale-[1.02]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      <div className="flex flex-1 flex-col p-8">
        <h3 className="text-2xl font-semibold text-[#1e1e1e] transition-colors group-hover:text-black">
          {title}
        </h3>

        <p className="mt-4 leading-relaxed text-black/60">{description}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <SkillBadge key={tech} label={tech} />
          ))}
        </div>

        <div className="mt-auto pt-8">
          <Button href={github} variant="secondary">
            View Project
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
