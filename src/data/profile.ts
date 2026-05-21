export const profile = {
  name: "Pablo Bano Benito",
  displayName: "Pablo Bañó Benito",
  headline: "Software Engineer · C# / Unity Systems · Maintainable Architecture",
  shortHeadline: "C# / Unity Systems Engineer",
  location: "Spain · Remote only · EU work authorization",
  availability: "Immediate availability",
  email: "pablo.bano.benito@gmail.com",
  cvUrl: "/assets/cv/Pablo_Bano_Benito_CV.pdf",
  intro:
    "Software engineer with 4+ years of professional C#/Unity experience building production systems, internal tools and gameplay/runtime features. Comfortable turning ambiguous requirements into reliable, reviewable software across games, tools, simulation and interactive products.",
  focus: [
    "Maintainable C# architecture",
    "Unity runtime systems",
    "Gameplay tooling & debugging",
    "Production support & refactoring",
  ],
  stats: [
    { value: "4+", label: "years professional C#/Unity" },
    { value: "Unity 6", label: "production environment" },
    { value: "Remote", label: "EU work authorization" },
  ],
  links: [
    { label: "Email", href: "mailto:pablo.bano.benito@gmail.com" },
    { label: "Download CV", href: "/assets/cv/Pablo_Bano_Benito_CV.pdf" },
    { label: "Legacy WordPress", href: "https://pablobanobenito.wordpress.com/" },
  ],
};

export const experience = [
  {
    role: "Software Engineer - C# / Unity Systems",
    company: "No Brakes Games · Human Fall Flat 2",
    period: "May 2022 — Sep 2025",
    description:
      "Professional C# development in a production Unity 6 environment with modular architecture, tooling, debugging and cross-functional collaboration.",
    bullets: [
      "Designed and implemented maintainable C# systems for gameplay, tooling, debugging and runtime behaviour.",
      "Built package-based architecture using assemblies, internal packages, ScriptableObjects, Prefabs and Addressables.",
      "Created internal tools and debug utilities used by designers, QA and other disciplines during feature iteration.",
      "Improved runtime behaviour through refactoring, profiling-driven investigation and memory / GC optimization.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Core engineering",
    items: ["C#", "Maintainable architecture", "Debugging", "Refactoring", "Code review", "Production support"],
  },
  {
    title: "Engines & frameworks",
    items: ["Unity 6", "Custom C++ engines", "Unreal Engine 4", "ECS exposure", "Component systems"],
  },
  {
    title: "Runtime systems",
    items: ["Packages", "Assemblies", "Addressables", "ScriptableObjects", "Prefabs", "Event-driven workflows"],
  },
  {
    title: "Tools & graphics",
    items: ["Git", "Jira", "TeamCity", "FMOD", "OpenGL", "Vulkan", "Dear ImGui", "SoLoud"],
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
