// src/components/Navbar.jsx

const navLinks = [
  { href: "#about",      label: "about" },
  { href: "#projects",   label: "projects" },
  { href: "#skills",     label: "skills" },
  { href: "#philosophy", label: "philosophy" },
  { href: "#contact",    label: "contact" },
];

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        {/* Logo */}
        <a href="#hero" className="navbar-logo font-mono">
          <span className="text-primary">$</span> oluga
          <span className="text-primary">_</span>
        </a>

        {/* Nav links */}
        <nav aria-label="Main navigation">
          <ul className="navbar-nav">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA */}
        <a href="#contact" className="navbar-cta font-mono">
          hire me
        </a>
      </div>
    </header>
  );
}