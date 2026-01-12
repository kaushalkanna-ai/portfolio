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
        link: "#", // Placeholder: Would link to Medium/Dev.to or internal page
        content: `
            <p>Scaling an engineering team is one of the most challenging transitions a leader faces. It's not just about hiring; it's about shifting processes, maintaining culture, and ensuring communication doesn't break down.</p>
            
            <h3>The Breaking Point</h3>
            <p>At 5 engineers, everyone knows everything. Communication is osmotic. You sit in the same room (or Slack channel), and decisions happen organically.</p>
            <p>At 50 engineers, that osmosis breaks. If you rely on "everyone knowing everything," you will fail. Information silos form, and alignment drifts.</p>

            <h3>Key Strategies for Scaling</h3>
            <ul>
                <li><strong>Hire for Culture Add, Not Just Culture Fit:</strong> Look for individuals who bring something new to the table while respecting your core values.</li>
                <li><strong>Standardize Onboarding:</strong> Your first week experience sets the tone for an engineer's tenure. Make it count.</li>
                <li><strong>Decouple Teams:</strong> Move from a monolithic team structure to small, cross-functional squads with clear ownership.</li>
            </ul>

            <h3>The Role of the Manager</h3>
            <p>In the early days, managers are often player-coaches. As you scale, the role shifts to pure coaching, unblocking, and strategic alignment. Letting go of the code is hard but necessary.</p>
        `
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
        link: "#",
        content: `
            <p>Technical debt is inevitable. The goal isn't to have zero debt; it's to manage it strategically. Like financial debt, technical debt can be a tool for leverage (speed to market) or a burden that bankrupts you (halted velocity).</p>

            <h3>Defining the ROI</h3>
            <p>How do you convince non-technical stakeholders to pause feature work for refactoring? You start by speaking their language: Risk and Speed.</p>

            <ul>
                <li><strong>Risk:</strong> "If we don't fix this stability issue, we risk a 4-hour outage during Black Friday."</li>
                <li><strong>Speed:</strong> "Refactoring this module will reduce the time-to-market for the next three features by 20%."</li>
            </ul>

            <h3>The 20% Rule</h3>
            <p>I advocate for a dedicated 20% capacity allocation for technical debt and platform improvements in every sprint. This ensures continuous maintenance without halting the product roadmap.</p>
        `
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
        link: "#",
        content: `
            <p>The transition to microservices is often sold as a silver bullet for scalability. In reality, it trades code complexity for operational complexity.</p>

            <h3>When to Break the Monolith</h3>
            <p>The most common mistake is breaking up a monolith too early. Monoliths are easy to deploy, debug, and reason about. You should only move to microservices when:</p>
            <ul>
                <li>You need independent scaling of specific components.</li>
                <li>Team domains are clearly defined and need independent deployment cycles.</li>
                <li>The organizational structure (Conway's Law) demands it.</li>
            </ul>

            <h3>The Hidden Costs</h3>
            <p>Distributed tracing, eventual consistency, and inter-service communication latency are real challenges. Without a robust DevOps culture and observability stack (OpenTelemetry, Jaeger), microservices can become a nightmare.</p>
        `
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
        link: "#",
        content: `
            <p>Deploying Large Language Models (LLMs) in production is vastly different from running a demo in a notebook. The challenges shift from "getting it to work" to "making it reliable, fast, and affordable."</p>

            <h3>Latency Engineering</h3>
            <p>Users expect instant responses. Streaming responses (Server-Sent Events) is mandatory for LLM applications. Additionally, aggressive caching and smaller, fine-tuned models for specific tasks can drastically reduce latency.</p>

            <h3>Guardrails & Safety</h3>
            <p>You cannot trust the output of an LLM blindly. Implementing guardrails—both input and output validation—is critical to preventing prompt injection and ensuring brand safety.</p>

            <h3>Cost Optimization</h3>
            <p>Token costs add up. Techniques like RAG (Retrieval-Augmented Generation) allow you to feed context efficiently without maximizing context windows unnecessarily. Using open-source models (Llama 3, Mistral) for lower-complexity tasks is a key optimization lever.</p>
        `
    }
];
