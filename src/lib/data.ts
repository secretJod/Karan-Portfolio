// lib/data.ts
import {
  Briefcase,
  Code,
  GraduationCap,
  Trophy,
  Award,
} from "lucide-react";

// Define and export the type for a single project
export type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  live?: string;
  github?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "URL Shortener",
    description:
      "Production-style URL shortener with API-key auth, per-link authorization, rate limiting and fail-closed email verification. Click analytics run off the redirect path via Redis Streams; collision-free codes via Redis counter + SETNX. CI/CD ships multi-arch images to GHCR with health-checked deploys behind Cloudflare Tunnel, monitored with Prometheus + Grafana. k6 load test: 0% errors sustained.",
    technologies: [
      "Go",
      "Fiber",
      "React",
      "PostgreSQL",
      "Redis",
      "Docker",
      "GitHub Actions",
      "Prometheus",
      "Grafana",
      "k6",
    ],
    image: "/url.jpg",
    github: "https://github.com/secretJod/Url-Shortner",
  },
  {
    id: 2,
    title: "AQ Space — AI Learning Workspace",
    description:
      "Upload lectures and get timestamped, sourced notes, playlist topic-gap detection and what to learn next. Resumable jobs mean no AI call is paid for twice; caching cut dashboard load from 410ms to 38ms. Evaluated at 87% correct concepts, 3.2% unsupported statements, $0.42 per 30-min video.",
    technologies: [
      "Next.js",
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "Celery",
      "RabbitMQ",
      "Kafka",
      "Redis",
    ],
    image: "/placeholder.jpg",
    github: "https://github.com/secretJod/AqSpace",
  },
  {
    id: 3,
    title: "Anubhuti Parent Connect (Work)",
    description:
      "School–parent app built as sole developer at JISL and shipped to the App Store, Google Play and web in 8 weeks (~200 parents, 15 teachers, 58 screens). Includes a consent-based face-recognition \"My Child\" album (96.4% precision / 91.8% recall) and 100x+ faster hot paths.",
    technologies: ["React Native", "Expo", "Node.js", "MySQL", "AWS"],
    image: "/placeholder.jpg",
  },
  {
    id: 4,
    title: "DealFlow",
    description:
      "An AI-powered marketplace using RAG to ground Groq (Llama 3) responses in live data. Features high-speed vector search with FAISS and a dynamic chat UI.",
    technologies: ["React", "Django", "Flask", "Groq", "FAISS", "PostgreSQL"],
    image: "/placeholder.jpg",
    github: "https://github.com/secretJod/DealFlow",
  },
];

export type HistoryItem = {
  icon: typeof Briefcase;
  title: string;
  company?: string;
  institution?: string;
  date: string;
  description: string;
  highlights?: string[];
};

// Career, Education & Achievement History (newest first)
export const historyData: HistoryItem[] = [
  {
    icon: Briefcase,
    title: "Full-Stack Developer | Applied AI",
    company: "Jain Irrigation Systems Ltd (JISL), Jalgaon",
    date: "Jun 2026 - Present",
    description:
      "Sole developer of Anubhuti Parent Connect (React Native, Expo, Node.js, MySQL, AWS) and builder of internal platforms with AI-driven engineering workflows.",
    highlights: [
      "Shipped to App Store, Google Play & web in 8 weeks — ~200 parents, 15 teachers, 58 screens.",
      "Face-recognition album at 96.4% precision / 91.8% recall.",
      "100x+ faster hot paths (2,000ms → 16ms); web bundle −82%.",
      "Multi-agent Claude Code workflow + MCP servers; 10+ internal tools in 4 months.",
    ],
  },
  {
    icon: Briefcase,
    title: "Software Development Intern",
    company: "SmallFare (Remote)",
    date: "Aug 2025 - Oct 2025",
    description:
      "Built e-commerce features across 3D, search and auth.",
    highlights: [
      "React Three Fiber 3D viewer: 450MB → 7MB page, −98% backend load.",
      "Elasticsearch + Redis search with AI ranking.",
      "JWT access+refresh auth; 25+ endpoints migrated to Prisma.",
      "Fixed a critical unauthorized-admin-access vulnerability.",
    ],
  },
  {
    icon: Trophy,
    title: "Flipkart GRID 7.0 Semifinalist",
    company: "Achievement",
    date: "2025",
    description:
      "Top 1% of 160,000+ participants. 900+ LeetCode problems solved, top 35% globally.",
  },
  {
    icon: Award,
    title: "1st Prize – AI & ML Research Paper",
    institution: "International Conference",
    date: "2024",
    description:
      "Awarded 1st Prize for original research in AI and Machine Learning.",
  },
  {
    icon: Trophy,
    title: "Tata Imagination Challenge Semifinalist",
    company: "Achievement",
    date: "2023 & 2024",
    description:
      "Semifinalist two years running among 312,000+ participants.",
  },
  {
    icon: Code,
    title: "Hackathons",
    company: "Achievement",
    date: "2023 - 2025",
    description:
      "SIH internal-round qualifier & team lead; Runner-up GDG Bhopal; Top 5 Web3Spell; Top 10 Sheryians Hackathon.",
  },
  {
    icon: GraduationCap,
    title: "MCA (AI & ML)",
    institution: "LNCT, Bhopal",
    date: "2023 - Present",
    description: "Specializing in Artificial Intelligence and Machine Learning. CGPA 8.5.",
  },
  {
    icon: GraduationCap,
    title: "B.Sc in Computer Science",
    institution: "NMU University, Maharashtra",
    date: "2019 - 2022",
    description: "CGPA 9.11.",
  },
];

export const frontendTech = [
  "React Native",
  "Expo",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "FastAPI",
];

export const backendTech = [
  "MySQL",
  "PostgreSQL",
  "Redis",
  "RabbitMQ",
  "Kafka",
  "Claude Code",
  "Multi-agent orchestration",
  "MCP servers",
  "RAG",
  "pgvector",
  "LLM evaluation",
  "Fine-tuning",
];

export const toolsAndDevops = [
  "AWS EC2",
  "nginx",
  "PM2",
  "Docker",
  "GitHub Actions",
  "Cloudflare Tunnel",
  "Prometheus",
  "Grafana",
];

export const programmingLanguages = [
  "TypeScript",
  "JavaScript",
  "Python",
  "Go",
  "SQL",
  "Java",
  "C/C++",
  "PHP",
];
