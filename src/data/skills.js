import { LuCode, LuServer, LuCloud } from 'react-icons/lu';

const skills = [
    {
        category: "Frontend",
        icon: LuCode,
        items: [
            { name: "React.js", level: 85 },
            { name: "Angular", level: 70 },
        ],
    },
    {
        category: "Backend",
        icon: LuServer,
        items: [
            { name: ".NET / C#", level: 90 },
            { name: "Node.js", level: 80 },
            { name: "GraphQL", level: 75 },
        ],
    },
    {
        category: "Cloud & AI",
        icon: LuCloud,
        items: [
            { name: "Microsoft Azure", level: 85 },
            { name: "AWS", level: 65 },
            { name: "Azure OpenAI", level: 70 },
        ],
    },
];

export default skills;
