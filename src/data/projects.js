const projects = [
    {
        id: 1,
        title: "B.U.S.",
        description:
            "Vehicle valuation & inspection platform for Norwegian and Swedish markets. Designed the BUStest P3 GraphQL API, built a React core components library, and contributed to the all-new Platform 3 launched in 2025.",
        timeline: "Oct 2023 – Present",
        url: "https://www.bus.no",
        image: "/assets/img/BUSLogo.png",
        tags: ["React", "GraphQL", ".NET", "Azure"],
    },
    {
        id: 2,
        title: "Parkly",
        description:
            "Resolved frontend & backend bugs in C#/.NET. Built a domain-specific chatbot using Azure OpenAI trained on project docs, enabling devs and QA to clarify domain queries efficiently.",
        timeline: "Dec 2022 – Oct 2023",
        url: "https://www.parkly.no/",
        image: "/assets/img/ParklyLogo.jpeg",
        tags: ["C#", ".NET", "Azure", "OpenAI"],
    },
    {
        id: 3,
        title: "DevGrade",
        description:
            "Implemented MCQ integration, AI-generated question creation, and full UI/UX revamp. Worked with Node.js, Angular, and AWS (Lambda, user management). Key contributor to Hacktitude 2023 in Malaysia.",
        timeline: "Apr 2022 – Oct 2023",
        url: "https://devgrade.io/",
        image: "/assets/img/DevGradeLogo.png",
        tags: ["Node.js", "Angular", "AWS", "AI"],
    },
    {
        id: 4,
        title: "Wheelsperer",
        description:
            "Conversational AI-based personalized vehicle recommendation system. Built a knowledge-based filtering engine integrated with Rasa and OpenAI Assistant API for natural language understanding, enabling users to describe their vehicle needs in plain English and receive tailored model suggestions with advertisements.",
        timeline: "Sep 2022 – Jan 2023",
        image: "/assets/img/Wheelsperer.jpeg",
        tags: ["Rasa", "OpenAI", "Python", "NLP", "Machine Learning"],
    },
    {
        id: 5,
        title: "SnapFix",
        description:
            "Vehicle exterior damage detection and repair cost estimation using few-shot learning. Built three models combining Prototypical Networks and MAML for damage level classification (70.8% accuracy), damage type classification (79.89%), and cost estimation — trained on minimal labelled data with CNN backbones like ResNet and Mask R-CNN.",
        timeline: "Sep 2024 – Feb 2025",
        image: "/assets/img/SnapFix.png",
        tags: ["Python", "PyTorch", "Few-Shot Learning", "Computer Vision", "CNN", "MAML"],
    },
    {
        id: 6,
        title: "Libraria",
        description:
            "A comprehensive desktop application built with C# and WPF for managing library operations. Features include book cataloguing, member management, borrowing and returns tracking with due date alerts, and fine calculation — all wrapped in a clean, intuitive interface designed for librarians and library staff.",
        image: "/assets/img/libraria.jpg",
        tags: ["C#", "WPF", "Desktop"],
    },
    {
        id: 7,
        title: "WarrantyPal",
        description:
            "A fully responsive web application that helps households organize and track warranty information for appliances, electronics, and other purchases. Features receipt upload, expiry notifications, warranty claim status tracking, and a searchable inventory dashboard — ensuring no warranty ever goes unused.",
        image: "/assets/img/warranty.jpg",
        tags: ["Web", "Responsive"],
    },
];

export default projects;
