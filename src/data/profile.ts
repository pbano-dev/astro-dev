export const profile = {
  name: "Pablo Bano Benito",
  displayName: "Pablo Bañó Benito",
  headline: "C# / C++ Software Engineer · Systems, Tools & Maintainable Runtime Software",
  shortHeadline: "C# / C++ Software Engineer",
  positioning: "Systems / Tools / Runtime Architecture",
  location: "Spain · EU work authorization",
  email: "pablo.bano.benito@gmail.com",
  cvUrl: "/assets/cv/Pablo_Bano_Benito_CV.pdf",
  intro:
    "C# / C++ software engineer with 3+ years of full-time production experience building maintainable runtime systems, internal tools, debugging workflows and gameplay-facing software for a multiplayer physics-driven Unity title. My strongest work sits at the boundary between architecture and delivery: translating ambiguous requirements into modular systems, owning features through review and QA, investigating runtime behaviour, and keeping code understandable under production constraints.",
  recruiterPitch:
    "C# / C++ Software Engineer focused on systems, tooling, debugging and runtime architecture. Strongest evidence: professional Unity/C# production ownership on Human Fall Flat 2 and a private custom C++ engine case study showing architecture, resource management, editor tooling and Linux packaging.",
  technicalPitch:
    "I turn ambiguous runtime problems into modular, testable systems: C# production features with PR/QA ownership, profiling and milestone stabilization; C++ engine architecture with Scene/GameObject/Component/System structure, command-driven rendering, resource management, Dear ImGui editor tooling, Lua scripting, audio integration and Linux/AppImage hardening.",
  focus: [
    "Production C# systems with feature ownership",
    "C++ engine architecture, resources and tooling",
    "Debugging, profiling and runtime behaviour",
    "Verification through tests, QA flows, PRs and test scenes",
  ],
  roleTargets: [
    "C# / C++ Software Engineer",
    "Tools Engineer",
    "Systems Programmer",
    "Unity Engineer / Game Tech Engineer",
  ],
  avoid: ["Crypto", "NFT roles", "Unity-only positioning", ".NET specialist claims without stronger evidence"],
  stats: [
    { value: "3+ yrs", label: "full-time production C# engineering" },
    { value: "100+", label: "bugs and runtime issues fixed across milestones" },
    { value: "90%", label: "approx. tasks owned end-to-end before review/QA" },
  ],
  links: [
    { label: "Email", href: "mailto:pablo.bano.benito@gmail.com" },
    { label: "Download CV", href: "/assets/cv/Pablo_Bano_Benito_CV.pdf" },
    { label: "Selected work", href: "/projects" },
  ],
};

export const experience = [
  {
    role: "Programmer / Software Engineer",
    company: "No Brakes Games · Human Fall Flat 2",
    period: "Mar 2022 — Oct 2025",
    description:
      "Full-time C# production engineering on a multiplayer, physics-driven Unity 6 title with a 20-30 person multidisciplinary team. Work was organized around milestone delivery, feature ownership, pull requests, QA verification, TeamCity builds and production stabilization.",
    bullets: [
      "Owned implementation of production C# features from ambiguous requirements through architecture, implementation, self-testing, PR review, QA validation, TeamCity build checks and production merge.",
      "Designed modular runtime systems and internal packages using assemblies, reusable components, interfaces, abstract classes, ScriptableObject-driven configuration and isolated feature test scenes.",
      "Built designer/audio/QA-facing tools and workflows, including NDA-safe categories such as level-authoring utilities, timer/action scheduling, validation scenes, runtime debug support and level-scoped audio loading.",
      "Worked with proprietary multiplayer and physics-driven constraints, diagnosing host/client divergence, nondeterministic physics-query ordering, object-interaction edge cases and runtime state problems.",
      "Improved runtime behaviour using Unity Profiler, Memory Profiler, ProfilerMarkers, allocation reduction, inner-loop investigation, task scheduling and frame-distributed workloads when appropriate.",
      "Fixed 100+ bugs across milestones, including gameplay defects, multiplayer issues, crash/freeze investigations, FPS/memory regressions and QA-reported production blockers.",
      "Collaborated through Git pull requests, weekly code reviews, Jira, TeamCity builds, QA test passes and technical discussions with programming, design, audio and production teams.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Strong evidence",
    items: ["C#", "Unity 6", "C++", "Debugging", "Refactoring", "Runtime systems", "Modular architecture", "Code review"],
  },
  {
    title: "Systems & tooling",
    items: ["Internal tools", "Component systems", "ECS-style architecture", "Resource management", "Profiling", "Memory / GC optimization", "Test scenes"],
  },
  {
    title: "Production workflow",
    items: ["Git", "Pull requests", "Jira", "TeamCity", "QA collaboration", "Milestone stabilization", "Cross-functional delivery"],
  },
  {
    title: "Engine / media stack",
    items: ["Custom C++ engines", "OpenGL", "Dear ImGui", "Lua", "Unreal Engine 4", "FMOD", "SoLoud", "AppImage/Linux packaging"],
  },
];

export const evidenceBlocks = [
  {
    title: "Production ownership",
    body:
      "Owned feature branches and bug fixes end-to-end: requirement clarification, implementation plan, architecture, local testing, PR review, TeamCity build validation, QA feedback and production merge.",
  },
  {
    title: "Systems thinking",
    body:
      "Repeated focus on modular packages, reusable interfaces, isolated validation scenes and code that could survive changing gameplay, physics, multiplayer and content constraints.",
  },
  {
    title: "Verification mindset",
    body:
      "Used manual QA, unit/integration/playmode/editor tests, feature-specific test scenes, logs, assertions, profiler markers and bug reproduction workflows before handing changes to QA.",
  },
  {
    title: "AI-assisted, not AI-dependent",
    body:
      "Uses ChatGPT, Copilot and Claude for codebase exploration, architecture review, porting support and edge-case checks, while keeping final decisions, verification and ownership human-led.",
  },
];

export const recruiterSignals = [
  {
    title: "Best-fit roles",
    items: ["C# / C++ Software Engineer", "Tools Engineer", "Systems Programmer", "Unity / Game Tech Engineer"],
  },
  {
    title: "Primary proof",
    items: ["Human Fall Flat 2 production ownership", "SufferEngine custom C++ architecture", "Oona released Unreal/C++ project"],
  },
  {
    title: "Not a fit for",
    items: ["Graphics-only roles", ".NET backend specialist roles", "Crypto / NFT roles"],
  },
];

export const technicalSignals = [
  {
    title: "Human Fall Flat 2",
    description:
      "Production C# systems, modular feature packages, profiling, QA verification, TeamCity builds, PR reviews and milestone stabilization under NDA-safe framing.",
  },
  {
    title: "SufferEngine",
    description:
      "Private C++ engine case study: SufferManager, Scene/GameObject/Component/System architecture, DisplayList/Command render flow, ResourceManager, ImGui editor, Lua, audio and Linux/AppImage packaging.",
  },
  {
    title: "Debugging evidence",
    description:
      "Examples include host/client divergence in multiplayer runtime behaviour, nondeterministic physics-query ordering, crash/freeze priority handling and profiler-led GC/runtime optimization.",
  },
  {
    title: "Verification evidence",
    description:
      "Unit, integration, playmode and editor tests where appropriate; feature-specific test scenes; autonomous validation flows; manual QA and PR review before production merges.",
  },
];

export const roleFits = [
  {
    name: "C# / C++ Software Engineer",
    use: "Generalist software engineering roles where C#, C++, debugging, ownership and maintainable systems matter.",
    proof: "Human Fall Flat 2 + SufferEngine",
  },
  {
    name: "Tools & Systems Engineer",
    use: "Tools, systems, simulation, engine-adjacent and platform-adjacent roles.",
    proof: "SufferEngine + production internal tooling",
  },
  {
    name: "Game Tech / Unity Engineer",
    use: "Studios, simulation teams and Unity-heavy production roles.",
    proof: "Human Fall Flat 2 + Magoon + Oona",
  },
  {
    name: "C++ Systems / Engine Programmer",
    use: "C++ roles where engine architecture and tooling matter, without overclaiming graphics specialization.",
    proof: "SufferEngine + Oona + C++ demos",
  },
  {
    name: ".NET transition",
    use: "Auxiliary CV only. Honest transition from C# systems into backend/platform; not the primary identity yet.",
    proof: "C# experience + SQL/background jobs + future bridge project",
  },
];

export const education = [
  {
    title: "BSc (Hons) Computer Science for Games",
    institution: "Sheffield Hallam University",
    period: "2021",
    detail: "First Class Honours · systems, software engineering and real-time programming foundations",
  },
  {
    title: "Higher National Diploma in Computing - Video Games Programming",
    institution: "ESAT",
    period: "2017 — 2020",
    detail: "C++, C#, game systems, engine fundamentals and gameplay programming",
  },
];
