import { Code, BookOpen, Headphones, Crosshair } from 'lucide-react';

export const nowData = {
    updated: "January 12, 2026",
    location: "Tampa, FL",
    sections: [
        {
            id: "focus",
            title: "Current Focus",
            icon: Crosshair,
            items: [
                {
                    text: "Building the next generation of Agentic AI tools.",
                    subtext: "Deep-diving into LLM orchestration and autonomous verify-loops."
                },
                {
                    text: "Scaling Engineering at microDrive.",
                    subtext: "Hiring for Staff Engineers and setting up our platform engineering teams."
                }
            ]
        },
        {
            id: "learning",
            title: "Learning & Exploring",
            icon: Code,
            items: [
                {
                    text: "Rust for systems programming.",
                    subtext: "Exploring memory safety and performance for high-throughput data pipelines."
                },
                {
                    text: "WebAssembly (Wasm).",
                    subtext: "Running high-performance models directly in the browser."
                }
            ]
        },
        {
            id: "reading",
            title: "Reading",
            icon: BookOpen,
            items: [
                {
                    text: "Designing Data-Intensive Applications",
                    subtext: "Martin Kleppmann (Re-reading for the 3rd time)"
                },
                {
                    text: "Chip War",
                    subtext: "Chris Miller"
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
                    subtext: "AI Engineering & Research"
                },
                {
                    text: "Acquired",
                    subtext: "Deep dives into company histories"
                }
            ]
        }
    ]
};
