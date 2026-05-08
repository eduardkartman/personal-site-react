import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
};

function Button({ children, href, variant = "primary" }: ButtonProps) {
  const baseStyles = `
    inline-flex
    items-center
    justify-center
    rounded-full
    px-7
    py-3
    font-medium
    transition-all
    duration-300
  `;

  const variants = {
    primary: `
      border
      border-black
      bg-black
      text-white
      hover:-translate-y-0.5
      hover:bg-black/90
    `,

    secondary: `
      border
      border-black/10
      bg-white/50
      backdrop-blur-sm
      text-black
      hover:bg-white/80
      hover:-translate-y-0.5
    `,
  };

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`${baseStyles} ${variants[variant]}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={`${baseStyles} ${variants[variant]}`}>{children}</button>
  );
}

export default Button;
