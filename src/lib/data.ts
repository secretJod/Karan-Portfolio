// lib/data.ts
import {
  Briefcase,
  Code,
  GraduationCap,
  Trophy,
  Award,
  Search,
  Cpu,
} from "lucide-react";

// Define and export the type for a single project
export type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  live: string;
  github: string;
};

// Your actual projects from your resume
export const projects: Project[] = [
  {
    id: 1,
    title: "DealFlow",
    description:
      "An AI-powered marketplace using RAG to ground Groq (Llama 3) responses in live data. Features high-speed vector search with FAISS and a dynamic chat UI.",
    technologies: ["React", "Django", "Flask", "Groq", "FAISS", "PostgreSQL"],
    image: "/placeholder.jpg", // Updated to your provided mockup filename
    live: "#",
    github: "https://github.com/secretJod/DealFlow",
  },
  {
    id: 2,
    title: "Shortly",
    description:
      "A high-performance URL shortener with <5ms latency using a Redis cache-aside strategy. Scalable to 3.5 trillion links with collision handling.",
    technologies: [
      "Node.js",
      "Express",
      "React",
      "Redis",
      "Prisma",
      "PostgreSQL",
    ],
    image: "/url.jpg", // Updated to your provided image filename
    live: "#",
    github: "https://github.com/secretJod/Url_shortener",
  },
];

// Your Career, Education & Achievement History
export const historyData = [
  {
    icon: Briefcase,
    title: "Software Development Intern",
    company: "SmallFare",
    date: "Aug 2025 - Oct 2025",
    description:
      "Optimized e-commerce search using Elasticsearch & Redis. Reduced page sizes from 450MB to 7MB by implementing 3D model viewers with React Three Fiber.",
  },
  {
    icon: Trophy,
    title: "Flipkart GRID Semifinalist",
    company: "Achievement",
    date: "2024",
    description:
      "Ranked in the Top 1% of 160,000+ candidates. Solved 900+ problems on LeetCode, ranking in the top 35% globally.",
  },
  {
    icon: Award, // Dedicated card for your Research achievement
    title: "1st Prize – AI & ML Research Paper",
    institution: "International Conference",
    date: "2024",
    description:
      "Awarded 1st Prize for presenting original research in AI and Machine Learning at a global platform.",
  },
  {
    icon: GraduationCap,
    title: "MCA (AI & ML)",
    institution: "LNCT, Bhopal",
    date: "2023 - Present",
    description:
      "Specializing in Artificial Intelligence and Machine Learning. Maintaining a high academic standing with a CGPA of 8.5.",
  },
  {
    icon: GraduationCap,
    title: "B.Sc in Computer Science",
    institution: "NMU University",
    date: "2019 - 2022",
    description:
      "Completed undergraduate degree in Maharashtra, India, with a CGPA of 9.11.",
  },
];

// Balanced Skills: AI (High) & Dev (Medium)
export const frontendTech = [
  "React",
  "Next.js",
  "React Three Fiber",
  "TypeScript",
  "Tailwind CSS",
];

export const backendTech = [
  "Django",
  "FastAPI",
  "Flask",
  "Node.js",
  "Prisma ORM",
  "Redis",
  "PostgreSQL",
];

export const toolsAndDevops = [
  "FAISS",
  "RAG Frameworks",
  "PyTorch",
  "TensorFlow",
  "Elasticsearch",
  "Docker",
  "Git",
];

export const programmingLanguages = [
  "Python",
  "C/C++",
  "JavaScript",
  "TypeScript",
  "SQL",
  "Java",
  "Solidity",
];
