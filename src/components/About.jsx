// src/components/About.jsx

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-5xl reveal">
        <p className="font-mono section-label">// 01 / about</p>
        <h2 className="section-title">About</h2>

        <div className="about-grid">
          <p className="about-body">
            Backend engineer with a strong foundation in distributed systems, microservice
            architecture, and cloud-native development. Passionate about building systems
            that are observable, resilient, and easy to maintain. Comfortable owning
            services end-to-end — from schema design through to production deployment.
            Experience working across{" "}
            <span className="text-primary">fintech</span>,{" "}
            <span className="text-primary">streaming</span>, and{" "}
            <span className="text-primary">AI-native</span> products.
          </p>

          <div className="profile-card font-mono">
            <div className="label">~/profile.json</div>
            <div><span className="key">role</span>: "backend engineer"</div>
            <div><span className="key">focus</span>: "distributed systems"</div>
            <div><span className="key">stack</span>: ["kotlin", "go", "java"]</div>
            <div><span className="key">status</span>: "open to roles"</div>
          </div>
        </div>
      </div>
    </section>
  );
}