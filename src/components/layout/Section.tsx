type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
};

function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 py-28 md:py-20 ${className} `}>
      {children}
    </section>
  );
}

export default Section;
