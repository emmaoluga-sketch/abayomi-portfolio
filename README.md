# Oluga Emmanuel Abayomi — Portfolio

Personal portfolio site for **Oluga Emmanuel Abayomi**, Backend Engineer specialising in microservices, distributed systems, and production-grade APIs.

**Live:** [abayomi-portfolio.vercel.app](https://abayomi-portfolio-6lec.vercel.app/#projects)

---

## Tech Stack

- **React** + **Vite** — frontend framework and build tool
- **EmailJS** — contact form email delivery (no backend required)
- **Vercel** — deployment and hosting

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   ├── Philosophy.jsx
│   └── Contact.jsx
├── data/
│   └── portfolioData.js   # all content lives here — edit this to update the site
├── styles/
│   └── portfolio.css
├── App.jsx
└── main.jsx
```

## Running Locally

```bash
npm install
npm run dev
```

## Environment Variables

Create a `.env` file in the project root (see `.env.example`):

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Get these values from [emailjs.com](https://www.emailjs.com).

## Updating Content

All site content (projects, skills, philosophy quotes, contact links) is managed in one place:

```
src/data/portfolioData.js
```

Edit that file and push — no component code needs to change.

---

© 2026 Oluga Emmanuel Abayomi
