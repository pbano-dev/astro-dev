export const profile = {
  name: "Pablo Bano Benito",
  displayName: "Pablo Bañó Benito",
  headline: "Software Engineer · C# / C++ · Systems & Tools",
  shortHeadline: "Software Engineer · C# / C++",
  location: "Spain · Remote only · EU work authorization",
  availability: "Immediate availability",
  email: "pablo.bano.benito@gmail.com",
  cvUrl: "/assets/cv/Pablo_Bano_Benito_CV.pdf",
  intro:
    "Software engineer with 4+ years of professional C# experience building production systems, internal tools and runtime features. My strongest work sits at the boundary between product requirements and robust implementation: modular architecture, debugging, refactoring, performance investigation and cross-disciplinary collaboration. I also bring C++ engine, rendering and simulation projects that show lower-level systems thinking beyond commercial engine workflows.",
  focus: [
    "Maintainable C# systems",
    "C++ engine architecture",
    "Tools, debugging & iteration",
    "Runtime performance & production support",
  ],
  stats: [
    { value: "4+", label: "years professional C# engineering" },
    { value: "C# / C++", label: "systems, tools and runtime code" },
    { value: "Remote", label: "Spain · EU work authorization" },
  ],
  links: [
    { label: "Email", href: "mailto:pablo.bano.benito@gmail.com" },
    { label: "Download CV", href: "/assets/cv/Pablo_Bano_Benito_CV.pdf" },
    { label: "Legacy WordPress", href: "https://pablobanobenito.wordpress.com/" },
  ],
};

export const experience = [
  {
    role: "Software Engineer - C# Systems & Tools",
    company: "No Brakes Games · Human Fall Flat 2",
    period: "May 2022 — Sep 2025",
    description:
      "Professional C# engineering in a production environment, covering modular runtime systems, internal tools, debugging, feature support and cross-functional collaboration on a multiplayer physics-driven title.",
    bullets: [
      "Designed and implemented maintainable C# systems for runtime behaviour, gameplay interactions, tooling and debugging in Unity 6.",
      "Built modular architecture using assemblies, internal packages, reusable components, ScriptableObjects, Prefabs and Addressables.",
      "Translated ambiguous production and design requirements into reviewable, testable software features and debug utilities.",
      "Worked with proprietary multiplayer technology, physics-driven systems, FMOD integration and event-driven gameplay workflows.",
      "Improved code quality and runtime behaviour through refactoring, profiling-driven investigation and memory / GC optimization.",
      "Collaborated through Git pull requests, code reviews, Jira workflows, QA reproduction and cross-disciplinary production meetings.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Languages & core engineering",
    items: ["C#", "C++", "C", "Lua", "JavaScript exposure", "Python scripting", "Debugging", "Refactoring"],
  },
  {
    title: "Architecture & runtime systems",
    items: ["Modular architecture", "Component systems", "ECS exposure", "Resource management", "Event-driven workflows", "Memory / GC optimization"],
  },
  {
    title: "Production workflow",
    items: ["Git", "Pull requests", "Code review", "Jira", "TeamCity", "QA support", "Cross-functional collaboration"],
  },
  {
    title: "Engines, tools & media",
    items: ["Unity 6", "Custom C++ engines", "Unreal Engine 4", "OpenGL", "Vulkan", "Dear ImGui", "FMOD", "SoLoud"],
  },
];

export const education = [
  {
    title: "BSc (Hons) Computer Science for Games",
    institution: "Sheffield Hallam University",
    period: "2021",
    detail: "First Class Honours",
  },
  {
    title: "Higher National Diploma in Computing - Video Games Programming",
    institution: "ESAT",
    period: "2017 — 2020",
    detail: "Video games programming track",
  },
];
