import {
    LuCode,
    LuServer,
    LuDatabase,
    LuWrench,
    LuCloud,
    LuBrain,
} from 'react-icons/lu';

const skills = [
    {
        category: "Frontend",
        icon: LuCode,
        items: [
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "React.js",
            "Next.js",
            "Tailwind CSS",
            "Angular",
            "Vue.js",
        ],
    },
    {
        category: "Backend",
        icon: LuServer,
        items: [
            ".NET / C#",
            "ASP.NET",
            ".NET Core",
            "Web API",
            "MVC",
            "Entity Framework",
            "LINQ",
            "REST",
            "GraphQL",
            "Microservices Architecture",
            "Node.js",
        ],
    },
    {
        category: "Databases",
        icon: LuDatabase,
        items: ["SQL Server", "MySQL", "MongoDB"],
    },
    {
        category: "DevOps & Tools",
        icon: LuWrench,
        items: ["Git", "GitHub", "Azure DevOps", "CI/CD Pipelines"],
    },
    {
        category: "Cloud Platforms & Services",
        icon: LuCloud,
        items: [
            "Microsoft Azure",
            "Azure App Services",
            "Azure Functions",
            "Azure Storage",
            "Azure Key Vault",
            "AWS",
            "AWS Lambda",
        ],
    },
    {
        category: "AI & ML",
        icon: LuBrain,
        items: [
            "Azure OpenAI",
            "OpenAI",
            "LangChain",
            "TensorFlow",
            "Scikit-Learn",
            "PyTorch",
        ],
    },
];

export default skills;
