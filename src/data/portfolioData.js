// ─── Portfolio Data (Senior Backend Developer - Chatway Application) ─────────
// Edit your content here; components read from this file automatically.

export const projects = [
  // 🚀 LARAVEL REAL-TIME PROJECTS (Most relevant for Chatway)
  {
    id: "01",
    name: "Laravel React Real-time Chat",
    tagline: "Full-stack chat with Laravel Reverb WebSocket — no third-party providers",
    description:
      "Complete real-time chat application using Laravel 11's native Reverb WebSocket server. Features private conversations, typing indicators, online status, message history with pagination, role-based access control (Admin/User), and admin dashboard for user management and system monitoring. Implements JWT authentication, event broadcasting, and real-time message delivery without external WebSocket providers.",
    tags: ["Laravel 11", "Laravel Reverb", "React", "WebSocket", "JWT", "Event Broadcasting", "PHP"],
    github: "https://github.com/emmaoluga-sketch/laravel-and-react-realime-chat",
    live: "",
  },
  {
    id: "02",
    name: "Laravel Realtime Chat API",
    tagline: "Scalable real-time messaging backend with Pusher + Redis + PostgreSQL",
    description:
      "High-performance chat API built with Laravel 13, handling real-time message delivery at scale. Architecture uses Pusher Channels for WebSocket management, Redis (Upstash) for queue/broadcasting, and PostgreSQL (Neon) for persistence. Implements private channel authentication, typing indicators, read receipts, and message history. Deployed on Railway with CI/CD pipeline.",
    tags: ["Laravel 13", "Pusher", "Redis", "PostgreSQL", "WebSocket", "Event Broadcasting", "Railway"],
    github: "https://github.com/emmaoluga-sketch/glowing-octo-spoon",
    live: "https://laravel-realtime-chat-api-production.up.railway.app/api",
  },
  {
    id: "03",
    name: "Support Ticket System with WhatsApp Bot",
    tagline: "Omnichannel support platform — web + WhatsApp integration",
    description:
      "Full-stack helpdesk system supporting web and WhatsApp channels. Features automated ticket routing, priority-based queues, real-time notifications, and WhatsApp bot using Baileys library for mobile-first support. Built as monorepo with Laravel backend, Vue.js frontend, and Node.js WhatsApp bot. Handles session-based conversation management and ticket status tracking across channels.",
    tags: ["Laravel", "Vue.js", "Node.js", "WhatsApp API (Baileys)", "Webhooks", "Event Broadcasting"],
    github: "https://github.com/emmaoluga-sketch/support-ticket-system",
    live: "",
  },
  {
    id: "04",
    name: "Laravel Inertia Vue3 Payment Gateway",
    tagline: "Dual payment integration (Stripe + PayPal) with webhook handling",
    description:
      "Production-ready food ordering system with dual payment gateway integration. Features real-time webhook processing for payment confirmations, idempotency handling for duplicate prevention, automatic retry logic with exponential backoff, and comprehensive error handling. Built with Laravel 12, Inertia.js, and Vue 3. Ensures transaction consistency across both payment providers.",
    tags: ["Laravel 12", "Stripe API", "PayPal API", "Webhooks", "Inertia.js", "Vue 3", "Idempotency"],
    github: "https://github.com/emmaoluga-sketch/laravel-inertia-paypal-and-stripe-checkout",
    live: "https://laravel-inertia-paypal-stripe.laravelcs.com/checkout",
  },

  // 🚀 ORIGINAL BACKEND PROJECTS
  {
    id: "05",
    name: "Rider",
    tagline: "Uber-scale ride-hailing backend — geospatial matching, real-time tracking, race-free assignment",
    description:
      "An Uber-like ride-hailing backend built in Go with clean service-oriented architecture. Implements driver matching via Redis GEOSEARCH, real-time location updates over WebSocket, and race-free ride assignment using distributed locks. Handles authentication, driver/rider profiles, ride requests, and vehicle management on top of PostgreSQL + PostGIS.",
    tags: ["Go", "Redis", "WebSockets", "PostgreSQL", "PostGIS", "Distributed Locks"],
    github: "https://github.com/emmaoluga-sketch/Rider",
  },
  {
    id: "06",
    name: "Distributed_Ecommerce",
    tagline: "Rosélia — a distributed bouquet e-commerce platform built on Flask microservices",
    description:
      "A distributed e-commerce system using Flask microservices, Docker, and MySQL. Separate services handle users, products, orders, and payments — connected through an API Gateway with RESTful communication. Demonstrates core distributed computing concepts: service separation, independent databases, gateway-based routing, and Docker containerisation.",
    tags: ["Python", "Flask", "Docker", "MySQL", "Microservices", "API Gateway"],
    github: "https://github.com/emmaoluga-sketch/Distributed_Ecommerce",
  },
  {
    id: "07",
    name: "n26-account-acquisition-service",
    tagline: "A terminal-native banking API client built for engineers who live in the CLI",
    description:
      "A production-grade Go CLI and REST API client for interacting with N26 banking services — supporting balance checks, transaction history, card management, statement downloads, and CSV/JSON exports. Built with full MFA authentication flow and Docker support for zero-setup deployment.",
    tags: ["Go", "Docker", "REST API", "MFA", "CLI"],
    github: "https://github.com/emmaoluga-sketch/n26-account-acquisition-service",
  },
  {
    id: "08",
    name: "auth-gateway-service",
    tagline: "A battle-tested microservice security backbone with JWT, service discovery, and full test coverage",
    description:
      "A Spring Boot microservices system implementing JWT-based authentication across a distributed service mesh — featuring Eureka service registry, API gateway routing, isolated Auth/User/Product services, JUnit and integration test suites, Docker containerization, and automated CI/CD via GitHub Actions.",
    tags: ["Java", "Spring Boot", "JWT", "Eureka", "Docker", "GitHub Actions"],
    github: "https://github.com/emmaoluga-sketch/auth-gateway-service",
  },
  {
    id: "09",
    name: "Netflix-User-Engagement-Analytics-Pipeline",
    tagline: "An end-to-end analytics pipeline modelling real-world streaming user behaviour at scale",
    description:
      "A fully synthetic but production-realistic data pipeline simulating a Netflix-scale streaming platform — covering user behaviour patterns, content catalog interactions, and engagement metrics. Designed for ML modelling, churn prediction, and business intelligence use cases with clean, well-documented notebooks.",
    tags: ["Python", "Jupyter", "Pandas", "ML", "Data Pipeline"],
    github: "https://github.com/emmaoluga-sketch/Netflix-User-Engagement-Analytics-Pipeline",
  },
  {
    id: "10",
    name: "RealTimeVoiceChat",
    tagline: "A low-latency voice interface that lets you hold a real conversation with an LLM — out loud",
    description:
      "A real-time voice conversation system that connects a speech recognition layer to a large language model backend, returning spoken responses with near-zero perceived latency. Combines WebSocket streaming, audio processing, and LLM orchestration into a single deployable stack — with Docker support for instant local setup.",
    tags: ["Python", "JavaScript", "WebSockets", "LLM", "Docker", "Real-time"],
    github: "https://github.com/emmaoluga-sketch/RealTimeVoiceChat",
  },
];

export const skills = [
  {
    category: "Backend (Primary)",
    items: ["Laravel", "PHP", "Spring Boot", "Go", "Python", "Node.js"],
  },
  {
    category: "Real-time & WebSockets",
    items: ["Laravel Reverb", "Pusher", "Laravel Echo", "Socket.io", "WebSocket"],
  },
  {
    category: "Queues & Background Jobs",
    items: ["Redis", "Laravel Horizon", "Beanstalkd", "AWS SQS"],
  },
  {
    category: "Databases & Optimization",
    items: ["PostgreSQL", "MySQL", "Redis", "Query Optimization", "Indexing", "Stored Procedures"],
  },
  {
    category: "API Development",
    items: ["RESTful APIs", "Webhooks", "JWT", "OAuth2", "API Rate Limiting"],
  },
  {
    category: "DevOps & Deployment",
    items: ["Docker", "GitHub Actions", "Railway", "AWS (SQS, Lambda, RDS)"],
  },
  {
    category: "Testing",
    items: ["PHPUnit", "Pest", "JUnit 5", "MockK", "Postman", "Integration Testing"],
  },
  {
    category: "Languages",
    items: ["PHP", "Java", "Go", "Python", "Kotlin", "JavaScript"],
  },
  {
    category: "Architecture",
    items: ["Microservices", "Event-Driven Design", "Hexagonal Architecture", "Message Queues"],
  },
];

export const philosophies = [
  {
    id: "01",
    quote: "Real-time isn't a feature — it's an architecture. I design for low latency from day one.",
  },
  {
    id: "02",
    quote: "I write code for the engineer who maintains it at 2am — clear, tested, documented.",
  },
  {
    id: "03",
    quote: "Queues, retries, and idempotency — because production failures are inevitable, data loss isn't.",
  },
  {
    id: "04",
    quote: "Strong bias for action. I'd rather ship a working v1 and iterate than wait for perfect.",
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
  },
  {
    label: "Portfolio (HR)",
    value: "oluga-ops-hub",
    href: "https://oluga-ops-hub.lovable.app/",
    icon: "globe",
  },
];

export const particles = [
  "Laravel", "PHP", "WebSocket", "Reverb", "Redis", "Queue", "Horizon",
  "Pusher", "Real-time", "API", "POST", "GET", "Webhook", "Event",
];
