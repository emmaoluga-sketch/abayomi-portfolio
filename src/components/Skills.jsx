// src/components/Skills.jsx
import { skills } from "../data/portfolioData";

function SkillCard({ skill, index }) {
  return (
    <div
      className="skill-card reveal card-hover"
      style={{ transitionDelay: `${index * 40}ms` }}
    >
      <h3 className="skill-category font-mono">{skill.category}</h3>
      <div className="skill-tags">
        {skill.items.map((item) => (
          <span key={item} className="skill-tag">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-6xl">
        <div className="reveal" style={{ marginBottom: "3rem" }}>
          <p className="font-mono section-label">// 03 / stack</p>
          <h2 className="section-title">Technical Skills</h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill, i) => (
            <SkillCard key={skill.category} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}