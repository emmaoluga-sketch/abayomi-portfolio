// ─── Portfolio Data ───────────────────────────────────────────────────────────
// Edit your content here; components read from this file automatically.

export const projects = [
  {
    id: "01",
    name: "n26-account-acquisition-service",
    tagline: "A terminal-native banking API client built for engineers who live in the CLI",
    description:
      "A production-grade Go CLI and REST API client for interacting with N26 banking services — supporting balance checks, transaction history, card management, statement downloads, and CSV/JSON exports. Built with a full MFA authentication flow and Docker support for zero-setup deployment.",
    tags: ["Go", "Docker", "REST API", "MFA", "CLI"],
    github: "https://github.com/emmaoluga-sketch/n26-account-acquisition-service",
  },
  {
    id: "02",
    name: "auth-gateway-service",
    tagline:
      "A battle-tested microservice security backbone with JWT, service discovery, and full test coverage",
    description:
      "A Spring Boot microservices system implementing JWT-based authentication across a distributed service mesh — featuring an Eureka service registry, API gateway routing, isolated Auth/User/Product services, JUnit and integration test suites, Docker containerization, and automated CI/CD via GitHub Actions.",
    tags: ["Java", "Spring Boot", "JWT", "Eureka", "Docker", "GitHub Actions"],
    github: "https://github.com/emmaoluga-sketch/auth-gateway-service",
  },
  {
    id: "03",
    name: "Netflix-User-Engagement-Analytics-Pipeline",
    tagline: "An end-to-end analytics pipeline modelling real-world streaming user behaviour at scale",
    description:
      "A fully synthetic but production-realistic data pipeline simulating a Netflix-scale streaming platform — covering user behaviour patterns, content catalog interactions, and engagement metrics. Designed for ML modelling, churn prediction, and business intelligence use cases with clean, well-documented notebooks.",
    tags: ["Python", "Jupyter", "Pandas", "ML", "Data Pipeline"],
    github:
      "https://github.com/emmaoluga-sketch/Netflix-User-Engagement-Analytics-Pipeline",
  },
  {
    id: "04",
    name: "StreamPlus-auth",
    tagline:
      "A full-stack subscription platform with tiered membership, auth, and dynamic content gating",
    description:
      "A subscription-based streaming service delivering both free and premium membership tiers — with a complete authentication system, dynamic content access control, and a templated frontend. Built to simulate real-world freemium monetization logic with clean separation between auth, billing state, and content delivery layers.",
    tags: ["PHP", "Twig", "JavaScript", "Subscriptions", "Auth"],
    github: "https://github.com/emmaoluga-sketch/StreamPlus-auth",
  },
  {
    id: "05",
    name: "RealTimeVoiceChat",
    tagline:
      "A low-latency voice interface that lets you hold a real conversation with an LLM — out loud",
    description:
      "A real-time voice conversation system that connects a speech recognition layer to a large language model backend, returning spoken responses with near-zero perceived latency. Combines WebSocket streaming, audio processing, and LLM orchestration into a single deployable stack — with Docker support for instant local setup.",
    tags: ["Python", "JavaScript", "WebSockets", "LLM", "Docker", "Real-time"],
    github: "https://github.com/emmaoluga-sketch/RealTimeVoiceChat",
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["Kotlin", "Java", "Go", "Python", "PHP"],
  },
  {
    category: "Frameworks",
    items: ["Spring Boot", "Spring Security", "Spring Data JPA"],
  },
  {
    category: "Architecture",
    items: ["Microservices", "Hexagonal Architecture", "Event-Driven Design"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "Redis", "MySQL"],
  },
  {
    category: "Cloud & Infra",
    items: ["AWS (SQS, Lambda, RDS)", "Docker", "Docker Compose"],
  },
  {
    category: "Messaging",
    items: ["Kafka", "AWS SQS"],
  },
  {
    category: "Auth & Security",
    items: ["JWT", "OAuth2", "MFA", "Rate Limiting"],
  },
  {
    category: "Testing",
    items: ["JUnit 5", "MockK", "Testcontainers", "Integration Testing"],
  },
  {
    category: "CI/CD & Tools",
    items: ["GitHub Actions", "Flyway", "OpenAPI/Swagger"],
  },
];

export const philosophies = [
  {
    id: "01",
    quote:
      "I write code for the engineer who maintains it at 2am — clear, tested, documented.",
  },
  {
    id: "02",
    quote: "Security is not a feature. It's a constraint I design around from day one.",
  },
  {
    id: "03",
    quote:
      "Microservices without observability are just distributed monoliths. I instrument everything.",
  },
  {
    id: "04",
    quote:
      "Strong bias for action. I'd rather ship a working v1 and iterate than wait for perfect.",
  },
];

export const contacts = [
  {
    label: "Email",
    value: "abayo172000@gmail.com",
    href: "mailto:abayo172000@gmail.com",
    icon: "mail",
  },
  {
    label: "GitHub",
    value: "emmaoluga-sketch",
    href: "https://github.com/emmaoluga-sketch",
    icon: "git-branch",
  },
  {
    label: "LinkedIn",
    value: "abayomi-oluga",
    href: "https://www.linkedin.com/in/abayomi-oluga-179022251",
    icon: "briefcase",
  },
  {
    label: "Discord",
    value: "haybee1720",
    href: "https://discord.com/users/haybee1720",
    icon: "message-circle",
  }
];

export const particles = [
  "{ }", "()", "=>", "async", "await", "GET", "POST",
  "200", "JWT", "kafka", "docker", "go", "spring", "redis",
];