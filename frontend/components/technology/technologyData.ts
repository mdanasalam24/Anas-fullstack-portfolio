
export type SkillLevel =
  | "Professional Experience"
  | "Project Experience"
  | "Working Knowledge"
  | "Basic Knowledge";

export type Technology = {
  name: string;
  category: string;
  level: SkillLevel;
  description: string;
  usage: string;
  icon: string;
};

export const technologyData: Technology[] = [
  // 01 — BACKEND DEVELOPMENT
  {
    name: "C#",
    category: "Backend Development",
    level: "Professional Experience",
    description: "Primary language for application and backend development.",
    usage: "Production applications, business logic and industrial software.",
    icon: "code",
  },
  {
    name: "ASP.NET Core",
    category: "Backend Development",
    level: "Project Experience",
    description: "Framework for developing modern backend applications.",
    usage: "Product Management REST API using .NET 8.",
    icon: "server",
  },
  {
    name: ".NET 8",
    category: "Backend Development",
    level: "Project Experience",
    description: "Modern cross-platform development platform.",
    usage: "Layered REST API development.",
    icon: "layers",
  },
  {
    name: "Java",
    category: "Backend Development",
    level: "Basic Knowledge",
    description: "Object-oriented programming language.",
    usage: "Fundamental programming knowledge.",
    icon: "coffee",
  },

  // 02 — FRONTEND DEVELOPMENT
  {
    name: "HTML5",
    category: "Frontend Development",
    level: "Project Experience",
    description: "Markup language for web page structure.",
    usage: "Portfolio website development.",
    icon: "code",
  },
  {
    name: "CSS3",
    category: "Frontend Development",
    level: "Project Experience",
    description: "Styling and layout technology for web interfaces.",
    usage: "Responsive layouts and visual styling.",
    icon: "palette",
  },
  {
    name: "JavaScript",
    category: "Frontend Development",
    level: "Project Experience",
    description: "Programming language for interactive web applications.",
    usage: "Frontend interactions and application logic.",
    icon: "braces",
  },
  {
    name: "TypeScript",
    category: "Frontend Development",
    level: "Project Experience",
    description: "Strongly typed JavaScript for scalable applications.",
    usage: "Type-safe React and Next.js development.",
    icon: "file-code",
  },
  {
    name: "React",
    category: "Frontend Development",
    level: "Project Experience",
    description: "Component-based library for building user interfaces.",
    usage: "Reusable portfolio components.",
    icon: "atom",
  },
  {
    name: "Next.js",
    category: "Frontend Development",
    level: "Project Experience",
    description: "React framework for modern web applications.",
    usage: "Building this portfolio website.",
    icon: "layers",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend Development",
    level: "Project Experience",
    description: "Utility-first CSS framework.",
    usage: "Responsive layouts and component styling.",
    icon: "palette",
  },

  // 03 — DATABASE & TESTING TOOLS
  {
    name: "SQL Server",
    category: "Database & Testing Tools",
    level: "Professional Experience",
    description: "Relational database management system.",
    usage: "Production application data access and API database.",
    icon: "database",
  },
  {
    name: "Entity Framework Core",
    category: "Database & Testing Tools",
    level: "Project Experience",
    description: "Object-relational mapper for .NET applications.",
    usage: "Database operations and entity management.",
    icon: "table",
  },
  {
    name: "xUnit",
    category: "Database & Testing Tools",
    level: "Project Experience",
    description: "Testing framework for .NET applications.",
    usage: "Unit and integration testing.",
    icon: "test-tube",
  },
  {
    name: "Moq",
    category: "Database & Testing Tools",
    level: "Project Experience",
    description: "Mocking framework for isolated tests.",
    usage: "Mocking dependencies during API testing.",
    icon: "flask-conical",
  },
  {
    name: "Postman",
    category: "Database & Testing Tools",
    level: "Working Knowledge",
    description: "Tool for testing HTTP APIs.",
    usage: "API request and endpoint verification.",
    icon: "send",
  },
  {
    name: "Docker",
    category: "Database & Testing Tools",
    level: "Project Experience",
    description: "Containerization platform.",
    usage: "Containerizing API and SQL Server.",
    icon: "container",
  },
  {
    name: "Git & GitHub",
    category: "Database & Testing Tools",
    level: "Working Knowledge",
    description: "Version control and code hosting platforms.",
    usage: "Project source control and repositories.",
    icon: "git-branch",
  },
  {
    name: "Visual Studio",
    category: "Database & Testing Tools",
    level: "Professional Experience",
    description: "IDE for .NET software development.",
    usage: "Professional application development and debugging.",
    icon: "code",
  },

  // 04 — INDUSTRIAL SOFTWARE
  {
    name: "C# WinForms",
    category: "Industrial Software",
    level: "Professional Experience",
    description: "Windows desktop application development.",
    usage: "Industrial HMI modules across approximately 20 CNC machines.",
    icon: "monitor",
  },
  {
    name: "Siemens SINUMERIK ONE",
    category: "Industrial Software",
    level: "Professional Experience",
    description: "Industrial CNC control platform.",
    usage: "CNC machine-data integration.",
    icon: "cpu",
  },
  {
    name: "Siemens CMVM",
    category: "Industrial Software",
    level: "Professional Experience",
    description: "Industrial machine-data integration service.",
    usage: "Machine monitoring and application workflows.",
    icon: "activity",
  },
  {
    name: "ReadMicro",
    category: "Industrial Software",
    level: "Professional Experience",
    description: "Machine-data reading integration.",
    usage: "CNC monitoring and preventive maintenance.",
    icon: "radio-tower",
  },
  {
    name: "OpenXML",
    category: "Industrial Software",
    level: "Professional Experience",
    description: "Working with Office Open XML formats.",
    usage: "Maintenance and production report generation.",
    icon: "file-spreadsheet",
  },
];
