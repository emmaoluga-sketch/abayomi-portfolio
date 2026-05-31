// src/components/Philosophy.jsx
import { philosophies } from "../data/portfolioData";

function PhilosophyCard({ item, index }) {
  return (
    <blockquote
      className="philosophy-card reveal card-hover"
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <span className="philosophy-id font-mono">/* {item.id} */</span>
      <span className="text-primary" style={{ marginRight: "0.25rem" }}>"</span>
      {item.quote}
      <span className="text-primary" style={{ marginLeft: "0.25rem" }}>"</span>
    </blockquote>
  );
}

export default function Philosophy() {
  return (
    <section id="philosophy" className="section">
      <div className="container-5xl">
        <div className="reveal" style={{ marginBottom: "3rem" }}>
          <p className="font-mono section-label">// 04 / philosophy</p>
          <h2 className="section-title">Engineering Philosophy</h2>
        </div>

        <div className="philosophy-grid">
          {philosophies.map((item, i) => (
            <PhilosophyCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
