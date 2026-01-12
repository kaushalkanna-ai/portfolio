import { Code, Cloud, Users, Zap } from 'lucide-react';

export const articles = [
    {
        id: 1,
        title: "Scaling Engineering Teams from 5 to 50",
        summary: "Lessons learned in culture, process, and hiring during a period of hyper-growth. How to maintain velocity without sacrificing quality.",
        date: "Dec 12, 2025",
        readTime: "8 min read",
        slug: "scaling-engineering-teams",
        tags: ["Leadership", "Scaling", "Culture"],
        icon: Users,
        link: "#" // Placeholder: Would link to Medium/Dev.to or internal page
    },
    {
        id: 2,
        title: "The ROI of Technical Debt",
        summary: "A framework for prioritizing refactoring against feature work. Communicating the business value of clean code to stakeholders.",
        date: "Nov 05, 2025",
        readTime: "6 min read",
        slug: "roi-technical-debt",
        tags: ["Strategy", "Tech Debt", "Management"],
        icon: Zap,
        link: "#"
    },
    {
        id: 3,
        title: "Microservices: A Retrospective",
        summary: "What we got right, what we got wrong, and when you should actually break the monolith. Real-world architectural trade-offs.",
        date: "Oct 20, 2025",
        readTime: "10 min read",
        slug: "microservices-retrospective",
        tags: ["Architecture", "Microservices", "Cloud"],
        icon: Cloud,
        link: "#"
    },
    {
        id: 4,
        title: "AI in Production: Beyond the Hype",
        summary: "Practical strategies for deploying LLMs at scale. Handling latency, cost, and hallucination in enterprise environments.",
        date: "Sep 15, 2025",
        readTime: "7 min read",
        slug: "ai-production-strategies",
        tags: ["AI", "LLM", "Engineering"],
        icon: Code,
        link: "#"
    }
];
