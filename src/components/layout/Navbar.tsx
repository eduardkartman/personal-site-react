import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = navItems.map((item) => document.querySelector(item.href));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        threshold: 0.4,
      },
    );

    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setIsOpen(false);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-black/5 bg-[#f8f5ef]/70 backdrop-blur-xl supports-[backdrop-filter]:bg-[#f8f5ef]/50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-16">
          <button
            onClick={scrollToTop}
            className="cursor-pointer text-lg font-semibold tracking-tight text-black/80 transition-colors transition-opacity hover:text-black hover:opacity-80"
          >
            Eduard Kartman
          </button>

          {/* Desktop nav */}
          <div className="hidden items-center gap-6 md:flex">
            <nav>
              <ul className="flex items-center gap-8">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href;

                  return (
                    <li key={item.href} className="relative">
                      <a
                        href={item.href}
                        className={`relative text-sm transition-colors ${
                          isActive
                            ? "text-black"
                            : "text-black/60 hover:text-black"
                        } `}
                      >
                        {item.label}

                        {isActive && (
                          <motion.div
                            layoutId="active-nav"
                            className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-black/80"
                          />
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <motion.span
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 8 : 0,
              }}
              className="block h-0.5 w-6 bg-white"
            />

            <motion.span
              animate={{
                opacity: isOpen ? 0 : 1,
              }}
              className="block h-0.5 w-6 bg-white"
            />

            <motion.span
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? -8 : 0,
              }}
              className="block h-0.5 w-6 bg-white"
            />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
            }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-[#f8f5ef]/95 backdrop-blur-2xl md:hidden"
          >
            <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] font-black tracking-[-0.08em] text-black/[0.03]">
              EK
            </div>
            <motion.nav
              initial={{
                y: 40,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: 40,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
              }}
            >
              <ul className="flex flex-col items-center gap-10">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: index * 0.1,
                    }}
                  >
                    <a
                      href={item.href}
                      onClick={closeMenu}
                      className="text-4xl font-black tracking-tight text-black/70 transition-all duration-300 hover:scale-105 hover:text-black"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
