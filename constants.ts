export enum Sections {
  About = "about",
  Contact = "contact",
  Hero = "hero",
  Projects = "projects",
}

export const strings = {
  splash: {
    headlines: [
      "> Software Engineer",
      "> Systems & Architecture",
      "> Architect. Build. Automate.",
    ],
  },
  about: {
    typeBoxSkills: [
      "Software Architecture",
      "Automated Testing",
      "AI-Assisted Developement",
      "TypeScript • Next.js • Node",
      "Vanilla JavaScript • JQuery",
      "Solutions Engineering",
      "SQL • Postgres • Prisma",
      "Support Engineering",
      "Full Stack Developement",
      "Recharts • Gsap • UI/UX",
      "CI/CD • Vercel • Railway",
      "Game Development • Multimedia",
      "Express.js • Tailwind • Web Design",
      "Terminal Emulation Parsing",
      "Serverless functions • APIs",
      "Phaser.js • React • Vue.js",
      "Modern Web Frameworks",
      "HTML • CSS • JQuery • PHP",
      "Software Engineering",
      "Java • Kotlin • C++ • C# • .NET",
      "Ivanti Velocity • SAP Modernization",
      "Fontend Development",
      "Backend Development",
      "Bash • Powershell Scripting",
    ],
    bio: {
      lede: {
        title: "Hi, I'm Daniel.",
        subTitle: "I'm a software engineer, bug squasher, and systems builder.",
      },
      main: {
        p1: "I design and build software that makes complex systems simpler, more intuitive, and more efficient. My experience spans retail, wholesale distribution, education, and e-commerce, with a focus on application architecture, enterprise modernization, and full-stack development.",
        p2: "From building modernization frameworks that cut project turnaround time by 60% to leveraging AI-assisted engineering workflows, I'm interested in not just building better software, but improving how software gets built.",
      },
      skillList: [
        {
          label: "Architecture",
          emoji: "🏗️",
          values: ["scalable systems", "reusable frameworks", "modular design"],
        },
        {
          label: "Stack",
          emoji: "🧰",
          values: [
            "React",
            "TypeScript",
            "Next.js",
            "Node.js",
            ".NET",
            "PostgreSQL",
          ],
        },
        {
          label: "AI & Automation",
          emoji: "🤖",
          values: ["LLMs", "agentic workflows", "developer productivity"],
        },
        {
          label: "Engineering",
          emoji: "⚙️",
          values: ["API design", "accessibility", "automated testing", "CI/CD"],
        },
        {
          label: "Modernization",
          emoji: "🚀",
          values: [
            "enterprise applications",
            "wearable computing",
            "workflow optimization",
          ],
        },
      ],
    },
  },
};

export const animationControls = {
  hero: {
    title: {
      LETTER_DELAY: 90,
      BOOT_PHASE_MS: 2700,
      FUDGE_VAR: 200,
    },
    subtitles: {
      LETTER_DELAY: 90,
      BOOT_PHASE_MS: 2700,
      LINES_START_VAR: 200,
      LINE_STAGGER: 140,
    },
  },
};

export const graphicDimensions = {
  icons: {
    square: 50,
    devTech: {
      square: 30,
    },
  },
};
