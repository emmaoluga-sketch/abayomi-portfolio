// src/App.jsx
import { useEffect } from "react";
import "./styles/portfolio.css";

import Navbar     from "./components/Navbar";
import Hero       from "./components/Hero";
import About      from "./components/About";
import Projects   from "./components/Projects";
import Skills     from "./components/Skills";
import Philosophy from "./components/Philosophy";
import Contact    from "./components/Contact";

// ── Scroll-reveal hook ────────────────────────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

export default function App() {
  useScrollReveal();

  return (
    <main style={{ minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Philosophy />
      <Contact />
    </main>
  );
}