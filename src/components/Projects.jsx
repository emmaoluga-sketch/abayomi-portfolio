// src/components/Projects.jsx
import { projects } from "../data/portfolioData";

function GitBranchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 6a9 9 0 0 0-9 9V3" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
    </svg>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

function ProjectCard({ project, index }) {
  const delayMs = index * 60;

  return (
    <article
      className="project-card reveal card-hover"
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      <div className="project-header">
        <h3 className="project-name font-mono">{project.name}</h3>
        <span className="project-num font-mono">{project.id}</span>
      </div>

      <p className="project-tagline">{project.tagline}</p>
      <p className="project-desc">{project.description}</p>

      <div className="tag-list">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>

      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="btn-github font-mono"
      >
        <GitBranchIcon />
        github
        <ArrowUpRightIcon />
      </a>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-6xl">
        <div className="reveal" style={{ marginBottom: "3rem" }}>
          <p className="font-mono section-label">// 02 / projects</p>
          <h2 className="section-title">Selected Work</h2>
          <p className="text-muted">Five systems shipped with tests, containers, and intent.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
