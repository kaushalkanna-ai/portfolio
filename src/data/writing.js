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
        link: "#",
        keyTakeaways: [
            "At 50 engineers, information osmosis fails. You must shift from implicit to explicit communication.",
            "Hire for 'Culture Add', not just 'Culture Fit' to prevent homogeneity.",
            "The Manager's role shifts from Player-Coach to Unblocker-Strategist.",
            "Standardized onboarding is the highest leverage activity for maintaining velocity."
        ],
        content: `
            <p class="lead">Scaling an engineering team is one of the most perilous transitions a leader faces. It is a fundamental rewrite of your organizational operating system. What worked at 5 engineers will actively destroy you at 50.</p>
            
            <p>I’ve navigated this hyper-growth phase multiple times, and the pattern is always the same: things break in specific, predictable ways. If you anticipate them, you can scale velocity along with headcount. If you don't, you simply scale chaos.</p>

            <h2>The 'Breaking Point' of Osmotic Communication</h2>
            <p>At 5 engineers, everyone knows everything. You sit in the same room (or Zoom), and decisions happen continuously and organically. Communication is <em>osmotic</em>.</p>
            <p>At 50 engineers, that osmosis evaporates. Yet, many leaders try to maintain the "flat structure" where everyone is in every meeting. The result is paralysis. You must shift from <strong>implicit</strong> context to <strong>explicit</strong> documentation and async communication.</p>
            <blockquote>"If it isn't written down, it didn't happen." This becomes the golden rule of scaling.</blockquote>

            <h2>Strategy 1: Decoupling Teams & Domains</h2>
            <p>You cannot have 50 people reporting to one person, nor can you have 50 people working in a single monolithic repo without friction. You must move to small, cross-functional squads (Amazon’s "Two Pizza Teams").</p>
            <ul>
                <li><strong>Define Clear Boundaries:</strong> Each squad owns a specific business domain (e.g., "Checkout", "Search", "Infrastructure").</li>
                <li><strong>minimize Dependencies:</strong> If Team A relies on Team B for every deployment, you haven't decoupled; you've just created distributed latency.</li>
                <li><strong>Empower Decision Making:</strong> Teams must have the autonomy to make technical decisions within their domain, provided they adhere to global architectural standards.</li>
            </ul>

            <h2>Strategy 2: Hiring for Velocity AND Culture</h2>
            <p>The biggest risk in rapid scaling is diluting the engineering culture that made you successful in the first place. However, hiring clones of your founding engineers is also skipping a step.</p>
            <p>We shifted our mindset from <strong>"Culture Fit"</strong> (do I want to have a beer with this person?) to <strong>"Culture Add"</strong> (what perspective is this team missing?).</p>
            <p>To maintain the bar while doubling the team:</p>
            <ol>
                <li><strong>Standardize the Interview Process:</strong> Every candidate must go through the same loop with properly calibrated rubrics. "Gut feel" scales poorly.</li>
                <li><strong>The 'Bar Raiser':</strong> Introduce an interviewer from a different team whose sole job is to assess if this candidate is better than the average of the current team.</li>
            </ol>

            <h2>Strategy 3: The Manager as 'Gardener'</h2>
            <p>In the early days, engineering managers are often "Player-Coaches"—writing code 50% of the time. As you scale, this model collapses. The manager's role must shift to:</p>
            <ul>
                <li><strong>Unblocking:</strong> Removing obstacles before the team even sees them.</li>
                <li><strong>Gardening:</strong> Pruning processes that no longer work and nurturing the careers of their reports.</li>
                <li><strong>Alignment:</strong> Ensuring the team knows <em>why</em> they are building what they are building.</li>
            </ul>

            <h2>Conclusion</h2>
            <p>Scaling is not about doing more of the same. It is about reinvention. The processes that feel "bureaucratic" at 5 people become the "safety rails" that allow you to move fast at 50 without crashing the train. Embrace the structure, document everything, and trust your teams.</p>
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
        keyTakeaways: [
            "Tech debt is a financial instrument: leverage it for speed, but service the interest before it bankrupts you.",
            "Translate code issues into business risk (stability) and opportunity cost (velocity) for stakeholders.",
            "Implement the '20% Tax': Dedicate 20% of every sprint to debt pay-down.",
            "Never ask for permission to refactor; it is part of the job of writing code."
        ],
        content: `
            <p class="lead">"Technical Debt" is a metaphor that is often misunderstood. It is not just "bad code." It is a conscious decision to borrow against the future to ship faster today. The problem isn't taking on debt; it's failing to service the interest.</p>

            <p>As an engineering leader, your job isn't to eliminate debt—that’s impossible and often counter-productive. Your job is to manage the portfolio of debt to ensure the business remains solvent and agile.</p>

            <h2>Reframing the Conversation: Risk & Speed</h2>
            <p>Stakeholders (CEOs, Sales VPs) do not care about "clean code" or "unit test coverage." They care about <strong>Revenue, Risk, and Velocity</strong>. You must translate technical problems into their language.</p>
            <ul>
                <li><strong>Stop saying:</strong> "We need to refactor the payment microservice because the code is spaghetti."</li>
                <li><strong>Start saying:</strong> "We need to stabilize the payment flow because currently, we risk a 4-hour outage during Black Friday, costing us $200k/hour."</li>
            </ul>
            <p>When you frame debt in terms of <em>Strategic Risk</em> or <em>Opportunity Cost</em> (e.g., "This debt is slowing down new feature development by 30%"), you get buy-in instantly.</p>

            <h2>The 20% Rule (The "Glacial Movement")</h2>
            <p>I strongly advocate for a "20% Tax" on every sprint or development cycle. This capacity is reserved exclusively for technical debt reduction, platform hardening, and developer experience improvements.</p>
            <blockquote>"We don't ask for permission to write unit tests, and we shouldn't ask for permission to maintain our codebase. It is the cost of doing business."</blockquote>
            <p>This approach transforms debt repayment from a massive, terrifying "Rewrite Project" (which almost always fails) into a continuous, manageable habit. It’s like flossing; do it daily, and you avoid the root canal.</p>

            <h2>Prioritization Framework: The Debt Quadrant</h2>
            <p>Not all debt is created equal. I use a simple 2x2 matrix to prioritize:</p>
            <ol>
                <li><strong>High Risk / Low Effort:</strong> Fix immediately (e.g., security patches).</li>
                <li><strong>High Risk / High Effort:</strong> Plan as a strategic initiative (e.g., database migration).</li>
                <li><strong>Low Risk / Low Effort:</strong> Let junior engineers tackle these for onboarding/learning.</li>
                <li><strong>Low Risk / High Effort:</strong> Ignore. This is "perfect code" vanity.</li>
            </ol>

            <h2>Conclusion</h2>
            <p>Tech debt is a tool. Use it to ship the MVP and beat the competitor to market. But remember: if you don't pay it back, the interest—in the form of slower deployments, bugs, and developer burnout—will eventually compound beyond your ability to pay.</p>
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
