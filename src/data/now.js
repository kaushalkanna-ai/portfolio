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
                    text: "Productionizing multi-agent AI workflows at microDrive.",
                    subtext: "Designing bounded tool-use architectures, automated eval pipelines, and deterministic verification loops that hold up under enterprise SLAs."
                },
                {
                    text: "Evolving our AI-native Platform Engineering & Product org.",
                    subtext: "Raising engineering leverage through Internal Developer Platforms, golden paths, and AI-assisted delivery guardrails."
                }
            ]
        },
        {
            id: "learning",
            title: "Learning & Exploring",
            icon: Code,
            items: [
                {
                    text: "Context engineering & Model Context Protocol (MCP) ecosystems.",
                    subtext: "Standardizing how autonomous agents securely discover, invoke, and audit internal enterprise tools and data."
                },
                {
                    text: "Rust & WebAssembly for high-throughput data and edge inference.",
                    subtext: "Exploring memory-safe streaming components and lightweight local model execution."
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
                    subtext: "Chip Huyen — Building reliable foundation-model applications from evals to production."
                },
                {
                    text: "Designing Data-Intensive Applications",
                    subtext: "Martin Kleppmann — Still the gold standard reference for distributed systems trade-offs."
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
                    subtext: "Deep technical conversations on AI engineering, agents, and infrastructure."
                },
                {
                    text: "Acquired",
                    subtext: "Play-by-play strategic breakdowns of generational technology companies."
                }
            ]
        }
    ]
};
