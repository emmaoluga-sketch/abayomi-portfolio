// src/components/Hero.jsx
import { particles } from "../data/portfolioData";

// Precompute particle styles so they're stable across renders
const particleStyles = particles.map((_, i) => ({
  left: `${(i / particles.length) * 100}%`,
  animationDuration: `${14 + (i % 4) * 3}s`,
  animationDelay: `-${(i * 1.7) % 12}s`,
}));

export default function Hero() {
  return (
    <section id="hero" className="hero">
      {/* Dot-grid background */}
      <div className="grid-bg" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />

      {/* Floating code particles */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {particles.map((word, i) => (
          <span
            key={i}
            className="particle font-mono text-primary"
            style={{
              position: "absolute",
              fontSize: "0.75rem",
              opacity: 0.4,
              ...particleStyles[i],
            }}
          >
            {word}
          </span>
        ))}
      </div>

      {/* Main content */}
      <div className="hero-content">
        <p className="font-mono section-label" style={{ marginBottom: "1.5rem" }}>
          // backend_engineer.init()
        </p>

        <h1 className="text-gradient">
          Oluga Emmanuel
          <br />
          Abayomi
        </h1>

        <p className="hero-subtitle font-mono">
          Backend Engineer &nbsp;·&nbsp; Microservices &amp; Distributed Systems
        </p>

        <p className="hero-desc">
          I build production-grade backend systems that scale — from authentication
          layers to real-time data pipelines.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            View Projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="hero-scroll-hint font-mono">
          <span className="text-primary">$</span>
          <span>scroll --to=projects</span>
          <span className="cursor-blink" />
        </div>
      </div>
    </section>
  );
}