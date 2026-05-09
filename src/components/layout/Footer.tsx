function Footer() {
  return (
    <footer className="border-t border-black/10 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm md:flex-row md:px-10 lg:px-16">
        <p className="text-black/50">
          © 2026 Eduard Kartman. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/eduardkartman"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black/45 transition-all duration-300 hover:-translate-y-0.5 hover:text-black"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/eduardkartman"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black/45 transition-all duration-300 hover:-translate-y-0.5 hover:text-black"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
