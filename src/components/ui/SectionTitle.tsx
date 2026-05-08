type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
};

function SectionTitle({
  eyebrow,
  title,
  description,
  centered = true,
}: SectionTitleProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : "text-left"} `}>
      {eyebrow && (
        <p className="mb-3 text-sm font-medium tracking-[0.2em] text-black/60 uppercase">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl font-bold tracking-tight text-[#1e1e1e] md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-black/60">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;
