import { Code, BookOpen, Headphones, Crosshair } from 'lucide-react';

export const nowData = {
    updated: "November 19, 2026",
    location: "Tampa, FL",
    sections: [
        {
            id: "focus",
            title: "Current Focus",
            icon: Crosshair,
            items: [
                {
                    text: "Getting multi-agent workflows ready for strict production SLAs at microDrive.",
                    subtext: "Spending most of my technical time on tool permissions, eval regressions, and keeping latency predictable when agents hit real customer data."
                },
                {
                    text: "Growing our platform engineering group.",
                    subtext: "Making CI faster, tightening security checks on PRs, and giving product teams cleaner defaults so they spend less time wrestling with infra."
                }
            ]
        },
        {
            id: "learning",
            title: "Learning & Exploring",
            icon: Code,
            items: [
                {
                    text: "Model Context Protocol (MCP) and context management.",
                    subtext: "Testing clean ways to expose internal services to agents with proper access control and audit trails."
                },
                {
                    text: "Rust and WebAssembly.",
                    subtext: "Tinkering with Rust for high-throughput data workers and seeing how far small models can go running locally in the browser."
                }
            ]
        },
        {
            id: "reading",
            title: "Reading",
            icon: BookOpen,
            items: [
                {
                    text: "AI Engineering",
                    subtext: "Chip Huyen. Practical guide to evals, retrieval, and operating foundation models without the fluff."
                },
                {
                    text: "Designing Data-Intensive Applications",
                    subtext: "Martin Kleppmann. Still come back to chapters on replication and stream processing every year."
                }
            ]
        },
        {
            id: "listening",
            title: "Listening",
            icon: Headphones,
            items: [
                {
                    text: "Latent Space Podcast",
                    subtext: "Good practitioner interviews on AI infra, agents, and what is actually working in prod."
                },
                {
                    text: "Acquired",
                    subtext: "Long-form company histories. Easy favorite for weekend drives."
                }
            ]
        }
    ]
};
