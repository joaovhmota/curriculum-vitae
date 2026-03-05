import type { LucideIcon } from "lucide-react";
import { Code2, Container, Database, GitBranch, Github, Linkedin, Server, Workflow } from "lucide-react";

export type Locale = "en" | "pt";

export type HeroTitleSegment = string | { icon: string };

export type Translations = {
  siteTitle: string;
  navLinks: { href: string; label: string; }[];
  hero: {
    name: string;
    title: HeroTitleSegment[];
    ctaContact: string;
    ctaProjects: string;
    greeting: string;
    ariaGoToAbout: string;
  };
  about: { title: string; paragraphs: string[]; };
  skills: { name: string; icon: LucideIcon; }[];
  projects: {
    title: string;
    description: string;
    tech: string[];
    link: string;
  }[];
  contact: {
    title: string;
    subtitle: string;
    email: string;
    socialLinks: { href: string; icon: LucideIcon; label: string; }[];
  };
  footer: { name: string; caption: string; };
  ui: {
    viewProject: string;
    repository: string;
    backToTop: string;
    skillsHeading: string;
    projectsHeading: string;
  };
};

const shared = {
  email: "joaovhmota@gmail.com",
  socialLinks: [
    { href: "https://github.com/joaovhmota", icon: Github, label: "GitHub" },
    {
      href: "https://linkedin.com/in/joaovhmota",
      icon: Linkedin,
      label: "LinkedIn",
    },
  ],
  skills: [
    { name: "C#", icon: Code2 },
    { name: "ASP.NET", icon: Code2 },
    { name: "ASP.NET Core", icon: Code2 },
    { name: ".NET Framework", icon: Code2 },
    { name: "Web Forms", icon: Code2 },
    { name: "Entity Framework", icon: Code2 },
    { name: "Oracle", icon: Database },
    { name: "PL/SQL", icon: Database },
    { name: "Docker", icon: Container },
    { name: "Rust", icon: Code2 },
    { name: "Node.js", icon: Code2 },
    { name: "Typescript", icon: Code2 },
    { name: "React.js", icon: Code2 },
    { name: "Azure DevOps", icon: Server },
    { name: "CI/CD", icon: Workflow },
    { name: "Git", icon: GitBranch },
  ],
};

export const translations: Record<Locale, Translations> = {
  en: {
    siteTitle: "Curriculum Vitae",
    navLinks: [
      { href: "#about", label: "About" },
      { href: "#skills", label: "Skills" },
      { href: "#projects", label: "Projects" },
      { href: "#contact", label: "Contact" },
    ],
    hero: {
      name: "João V. H. Mota",
      title: [
        "Full Stack Software Engineer · Turning ",
        { icon: "Coffee" },
        " into ",
        { icon: "Code" },
        " since 2022",
      ],
      ctaContact: "Get in touch",
      ctaProjects: "View projects",
      greeting: "Hi, I'm",
      ariaGoToAbout: "Go to About",
    },
    about: {
      title: "About me",
      paragraphs: [
        "I'm a developer passionate about building products that solve real problems. With experience in front-end and back-end, I always aim to deliver clean, performant, and accessible code.",
      ],
    },
    skills: shared.skills,
    projects: [
      {
        title: "Logfy",
        description:
          "A lightweight and easy-to-use library made for logging in Rust.",
        tech: ["Rust"],
        link: "https://github.com/joaovhmota/logfy",
      },
    ],
    contact: {
      title: "Contact",
      subtitle: "Want to chat? Send an email or find me on socials.",
      email: shared.email,
      socialLinks: shared.socialLinks,
    },
    footer: {
      name: "João V. H. Mota",
      caption: "Built with React + Tailwind + TypeScript.",
    },
    ui: {
      viewProject: "View project",
      repository: "Repository",
      backToTop: "Back to top",
      skillsHeading: "Skills & Tools",
      projectsHeading: "Projects",
    },
  },
  pt: {
    siteTitle: "Curriculum Vitae",
    navLinks: [
      { href: "#about", label: "Sobre" },
      { href: "#skills", label: "Skills" },
      { href: "#projects", label: "Projetos" },
      { href: "#contact", label: "Contato" },
    ],
    hero: {
      name: "João V. H. Mota",
      title: [
        "Engenheiro de Software Full Stack · Transformando ",
        { icon: "Coffee" },
        " em ",
        { icon: "Code" },
        " desde 2022",
      ],
      ctaContact: "Entrar em contato",
      ctaProjects: "Ver projetos",
      greeting: "Olá, sou",
      ariaGoToAbout: "Ir para Sobre",
    },
    about: {
      title: "Sobre mim",
      paragraphs: [
        "Sou um desenvolvedor apaixonado por construir produtos que resolvem problemas reais. Com experiência em front-end e back-end, busco sempre entregar código limpo, performático e acessível.",
      ],
    },
    skills: shared.skills,
    projects: [
      {
        title: "Logfy",
        description:
          "Uma biblioteca leve e simples de usar feita para realizar logs em Rust.",
        tech: ["Rust"],
        link: "https://github.com/joaovhmota/logfy",
      }
    ],
    contact: {
      title: "Contato",
      subtitle: "Quer conversar? Envie um e-mail ou me encontre nas redes.",
      email: shared.email,
      socialLinks: shared.socialLinks,
    },
    footer: {
      name: "João V. H. Mota",
      caption: "Feito com React + Tailwind + TypeScript.",
    },
    ui: {
      viewProject: "Ver projeto",
      repository: "Repositório",
      backToTop: "Voltar ao topo",
      skillsHeading: "Skills e Ferramentas",
      projectsHeading: "Projetos",
    },
  },
};

export function getBrowserLocale(): Locale {
  if (typeof navigator === "undefined") return "en";
  const lang = navigator.language || (navigator.languages && navigator.languages[0]) || "";
  return lang.toLowerCase().startsWith("pt") ? "pt" : "en";
}
