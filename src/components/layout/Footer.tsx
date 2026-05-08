function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-500 md:flex-row md:px-10 lg:px-16">
        <p>© 2026 Eduard Kartman. All rights reserved.</p>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/eduardkartman"
            target="_blank"
            className="transition-colors hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/eduardkartman"
            target="_blank"
            className="transition-colors hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
