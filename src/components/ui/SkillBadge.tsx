type SkillBadgeProps = {
  label: string;
};

function SkillBadge({ label }: SkillBadgeProps) {
  return (
    <div className="rounded-full border border-black/5 bg-white/60 px-4 py-2 text-sm font-medium text-black/70 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90 hover:text-black">
      {label}
    </div>
  );
}

export default SkillBadge;
