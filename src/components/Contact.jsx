// src/components/Contact.jsx
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { contacts } from "../data/portfolioData";

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// ── Icon map ──────────────────────────────────────────────────────────────────
const icons = {
  mail: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
      <rect x="2" y="4" width="20" height="16" rx="2" />
    </svg>
  ),
  "git-branch": (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 6a9 9 0 0 0-9 9V3" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
    </svg>
  ),
  briefcase: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  ),
  "message-circle": (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
    </svg>
  ),
  globe: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  ),
};

const ArrowUpRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="contact-arrow" aria-hidden="true">
    <path d="M7 7h10v10" />
    <path d="M7 17 17 7" />
  </svg>
);

function ContactItem({ contact }) {
  return (
    <li className="contact-item">
      <a href={contact.href} target="_blank" rel="noreferrer" className="contact-link">
        <div className="contact-link-left">
          <span className="contact-icon-wrap">{icons[contact.icon]}</span>
          <div>
            <div className="contact-label font-mono">{contact.label}</div>
            <div className="contact-value">{contact.value}</div>
          </div>
        </div>
        <ArrowUpRightIcon />
      </a>
    </li>
  );
}

// ── Contact Form ──────────────────────────────────────────────────────────────
const INITIAL = { name: "", email: "", title: "", message: "" };

function ContactForm() {
  const [form, setForm]     = useState(INITIAL);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [error, setError]   = useState("");

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus("sending");
    setError("");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,        // {{from_name}}
          name:      form.name,        // {{name}}
          email:     form.email,       // {{email}}
          title:     form.title,       // {{title}}
          message:   form.message,     // {{message}}
          time:      new Date().toLocaleString("en-GB", {  // {{time}}
            dateStyle: "medium",
            timeStyle: "short",
          }),
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setForm(INITIAL);
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Something went wrong. Please email me directly at abayo172000@gmail.com");
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      {/* Row 1: name + email */}
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="cf-name" className="form-label font-mono">name <span style={{color:"#f87171"}}>*</span></label>
          <input
            id="cf-name"
            name="name"
            type="text"
            className="form-input font-mono"
            placeholder="John Doe"
            value={form.name}
            onChange={handleChange}
            required
            disabled={status === "sending"}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cf-email" className="form-label font-mono">email <span style={{color:"#f87171"}}>*</span></label>
          <input
            id="cf-email"
            name="email"
            type="email"
            className="form-input font-mono"
            placeholder="john@example.com"
            value={form.email}
            onChange={handleChange}
            required
            disabled={status === "sending"}
          />
        </div>
      </div>

      {/* Row 2: subject/title */}
      <div className="form-group">
        <label htmlFor="cf-title" className="form-label font-mono">subject</label>
        <input
          id="cf-title"
          name="title"
          type="text"
          className="form-input font-mono"
          placeholder="Job opportunity / Collaboration / General enquiry"
          value={form.title}
          onChange={handleChange}
          disabled={status === "sending"}
        />
      </div>

      {/* Row 3: message */}
      <div className="form-group">
        <label htmlFor="cf-message" className="form-label font-mono">message <span style={{color:"#f87171"}}>*</span></label>
        <textarea
          id="cf-message"
          name="message"
          className="form-input form-textarea font-mono"
          placeholder="Tell me about the role or project..."
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          disabled={status === "sending"}
        />
      </div>

      <div className="form-footer">
        {status === "success" && (
          <p className="form-success font-mono">
            <span className="text-primary">✓</span> Message sent — I'll be in touch.
          </p>
        )}
        {status === "error" && (
          <p className="form-error font-mono">{error}</p>
        )}

        <button
          type="submit"
          className="btn-primary form-submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? (
            <><span className="spinner" aria-hidden="true" /> sending...</>
          ) : (
            <>
              Send Message
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </>
          )}
        </button>
      </div>
    </form>
  );
}

// ── Main Export ───────────────────────────────────────────────────────────────
export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container-4xl reveal">
        <p className="font-mono section-label">// 05 / contact</p>
        <h2 className="section-title">Let's build something.</h2>
        <p className="text-muted">Open to backend engineering roles — let's talk.</p>

        {/* Social links */}
        <div className="contact-card">
          <ul className="contact-list">
            {contacts.map((contact) => (
              <ContactItem key={contact.label} contact={contact} />
            ))}
          </ul>
        </div>

        {/* Email form */}
        <div className="contact-form-wrapper">
          <p className="font-mono section-label" style={{ marginBottom: "1.25rem" }}>
            // or send a message directly
          </p>
          <ContactForm />
        </div>

        <footer className="footer">
          <span>© 2026 Oluga Emmanuel Abayomi</span>
          <span>built with intent · deployed with confidence</span>
        </footer>
      </div>
    </section>
  );
}
