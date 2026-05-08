import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollProgress from "./components/ui/ScrollProgress";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <main className="text-[#1e1e1e]">
      <ScrollProgress />

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#d6c6ab]/30 blur-3xl" />
      </div>

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <Contact />

      <Footer />
    </main>
  );
}

export default App;
