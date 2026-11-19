export const projects = [
    {
        id: 7,
        slug: "multi-agent-workflow-orchestration",
        title: "Multi-Agent AI Workflow Orchestration Platform",
        description: "Controlled multi-agent engine for multi-step enterprise tasks, backed by MCP tool permissions and automated trajectory evals.",
        impact: "65% workflow automation · 99.2% policy compliance · <1.8s p95 step latency",
        goal: "Move AI from passive chat sidebars into audited workflows that can safely call internal tools.",
        timeline: "4 Months Architecture to Production",
        fullDescription: "A workflow control plane that coordinates specialist agents across research, data lookup, and operational actions. Instead of letting models loop freely, it wraps reasoning steps inside explicit state machines, routes tool calls through an MCP gateway with RBAC, pauses on sensitive writes for human approval, and logs every trace for offline evaluation.",
        challenge: "Open-ended agent loops looked great in demos but failed quickly on real accounts. Small errors stacked up across steps, tool calls were hard to audit, and security would not approve write access without strict guardrails.",
        solution: "We moved workflow state, retries, and permissions into deterministic code and limited the LLM to bounded reasoning steps. All internal tools sit behind a single MCP gateway with per-tenant RBAC, step and token caps, and OpenTelemetry tracing wired straight into our eval suite.",
        results: [
            "Automated 65% of repetitive multi-step operational workflows end-to-end.",
            "Held 99.2% policy compliance across audited tool runs with zero unauthorized writes.",
            "Cut agent debugging time by 70% using full trace replay and golden eval datasets."
        ],
        architectureHighlights: [
            { component: "Agent Orchestrator", description: "State machine handling transitions, retry caps, and policy checks around each reasoning step." },
            { component: "MCP Tool Gateway", description: "Single governed entry point for internal tools with per-tenant RBAC and audit logging." },
            { component: "Observability & Evals", description: "OpenTelemetry traces feeding automated trajectory grading before every prompt or model release." }
        ],
        tech: ["Python", "MCP", "LangGraph", "Redis", "OpenTelemetry"],
        image: "/images/agent-orchestration.webp",
        link: "#",
        repo: "#",
        color: "from-cyan-500 to-blue-600"
    },
    {
        id: 8,
        slug: "enterprise-llm-gateway-router",
        title: "Enterprise LLM Gateway & Intelligent Model Router",
        description: "Central Golang AI proxy that routes prompts across small self-hosted and frontier models with caching, PII stripping, and failover.",
        impact: "58% inference cost reduction · 3.2x faster p95 latency · 99.98% AI uptime",
        goal: "Cut monthly inference bills and latency while giving security and finance one place to govern AI traffic.",
        timeline: "3 Months Architecture to Production",
        fullDescription: "A low-overhead Golang gateway sitting in front of every internal and customer-facing LLM call. It checks request complexity on the fly to decide between fast self-hosted vLLM models and frontier APIs, strips sensitive fields before traffic leaves our VPC, caches repeat requests in Redis, and fails over automatically when a provider slows down.",
        challenge: "Every product team was calling large frontier models directly for basic tasks like tagging and summarization. Token spend grew faster than revenue, p95 latency crept past five seconds, and single-vendor outages broke core features.",
        solution: "Built a shared Golang proxy with Redis prompt and semantic caching. Added a lightweight router that sends roughly 70% of routine extraction and classification work to smaller vLLM clusters, keeping frontier models for harder synthesis. Circuit breakers and shadow tests keep quality steady across providers.",
        results: [
            "Cut monthly LLM inference spend by 58% through routing and caching.",
            "Improved p95 response times by 3.2x across high-traffic endpoints.",
            "Kept 99.98% effective AI uptime during upstream provider hiccups via automatic failover."
        ],
        architectureHighlights: [
            { component: "LLM Gateway", description: "Golang proxy handling auth, PII redaction, and per-tenant token limits at low overhead." },
            { component: "Semantic Cache & Router", description: "Redis cache paired with a fast complexity check to pick the cheapest model that meets quality." },
            { component: "FinOps & Telemetry", description: "Per-feature cost attribution, latency tracking, and quality drift alerts via OpenTelemetry." }
        ],
        tech: ["Golang", "Redis", "vLLM", "Kubernetes", "OpenTelemetry"],
        image: "/images/llm-gateway.webp",
        link: "#",
        repo: "#",
        color: "from-amber-500 to-orange-600"
    },
    {
        id: 9,
        slug: "hybrid-rag-context-engine",
        title: "Hybrid RAG & Context Engineering Knowledge Engine",
        description: "Permission-aware enterprise search combining BM25, dense vectors, cross-encoder reranking, and citation checks.",
        impact: "94% citation groundedness · -70% hallucination rate · 450ms retrieval p95",
        goal: "Ground AI answers in live company data with strict access controls and clickable citations.",
        timeline: "4 Months Architecture to Production",
        fullDescription: "A retrieval and context-building service pulling from internal docs, CRM records, and wikis. It updates incrementally as source files change, enforces each user's existing document permissions at query time, and checks generated claims against retrieved passages before returning an answer.",
        challenge: "Basic vector-only RAG missed exact SKU codes and internal acronyms, occasionally surfaced restricted documents to the wrong role, and grew stale whenever source docs changed.",
        solution: "Set up an event-driven Kafka pipeline to keep chunks and ACL metadata fresh across ElasticSearch (BM25) and pgvector. At query time, we fuse lexical and vector matches, filter strictly by user permissions, run a cross-encoder reranker, and attach passage citations to every claim.",
        results: [
            "Hit 94% verified citation groundedness across our internal evaluation benchmarks.",
            "Reduced unsupported hallucinations by 70% compared to our earlier vector-only setup.",
            "Kept permission-filtered retrieval and reranking under 450ms at p95."
        ],
        architectureHighlights: [
            { component: "Ingestion Pipeline", description: "Kafka workers syncing document edits, clean chunk boundaries, and ACL changes within seconds." },
            { component: "Hybrid Index", description: "ElasticSearch BM25 and dense vector search combined so exact terms and concepts both rank well." },
            { component: "ACL Filter & Reranker", description: "Permission-checked reranking stage that packs tight, cited context into the model prompt." }
        ],
        tech: ["Python", "PostgreSQL", "ElasticSearch", "Kafka", "FastAPI"],
        image: "/images/hybrid-rag.webp",
        link: "#",
        repo: "#",
        color: "from-violet-500 to-indigo-600"
    },
    {
        id: 1,
        slug: "social-media-intelligence-platform",
        title: "AI-Powered Social Media Intelligence Platform",
        description: "Real-time sentiment tracking, NLP enrichment, and trend alerts across millions of daily social posts.",
        impact: "50M+ posts/day at sub-second latency · +35% sentiment accuracy",
        goal: "Turn 50M+ daily unstructured social posts into live, reliable signals for brand teams.",
        timeline: "4 Months Architecture to Global Rollout",
        fullDescription: "A high-volume intelligence platform that ingests tens of millions of social posts every day and turns them into searchable audience insights. Domain-tuned NLP models score sentiment and entities in real time, while selective LLM summaries flag sudden narrative shifts and PR risks early.",
        challenge: "Social feeds are messy: multilingual slang, sarcasm, and sudden traffic spikes made off-the-shelf sentiment APIs both inaccurate and too expensive at scale.",
        solution: "Built a Kappa streaming pipeline with Apache Kafka and Spark Streaming feeding our own fine-tuned transformer models for high-volume scoring. Only anomalous spikes trigger LLM briefings, and everything lands in ElasticSearch for instant filtering.",
        results: [
            "Processed 50M+ posts daily with sub-second indexing latency.",
            "Improved multilingual sentiment accuracy by 35% over generic APIs.",
            "Cut client crisis detection time from hours down to a few minutes."
        ],
        architectureHighlights: [
            { component: "Processing Layer", description: "Fine-tuned transformer models for fast sentiment and entity tagging, paired with on-demand LLM summaries." },
            { component: "Data Ingestion (Kafka)", description: "High-throughput event bus absorbing 50k+ messages/sec during peak social spikes." },
            { component: "ElasticSearch", description: "Fast search and aggregation store powering live dashboards and trend drill-downs." }
        ],
        tech: ["Python", "LLMs & NLP", "Kafka", "React", "AWS"],
        image: "/images/social-media.webp",
        link: "#",
        repo: "#",
        color: "from-blue-500 to-cyan-500"
    },
    {
        id: 2,
        slug: "intelligent-chat-routing-system",
        title: "Intelligent Chat Routing System",
        description: "Automated support triage using ML classifiers and sentiment scoring to match customers with the right agent.",
        impact: "-25% handle time · -40% transfers · +60% faster first response",
        goal: "Stop manual ticket shuffling by matching customer intent and urgency to the best available specialist.",
        timeline: "3 Months Architecture to Production",
        fullDescription: "A routing middleware sitting between customer chat channels and distributed support teams. Each incoming message is scored for topic, complexity, and frustration in milliseconds, then sent directly to an available specialist with a short context summary.",
        challenge: "Keyword routing rules broke constantly on nuanced support requests, creating long wait queues and bouncing frustrated customers between three or four agents.",
        solution: "Shipped a two-stage FastAPI and Redis pipeline. Stage 1 classifies intent with a lightweight model; Stage 2 scores urgency and sentiment so escalated accounts jump the queue and land with the right skill group immediately.",
        results: [
            "Lowered average handle time (AHT) by 25% across global queues.",
            "Cut ticket transfers between agents by 40%.",
            "Improved First Response Time (FRT) by 60% for urgent customer issues."
        ],
        architectureHighlights: [
            { component: "Sentiment Analysis Service", description: "Low-latency NLP service scoring intent, frustration, and SLA priority on live messages." },
            { component: "Routing Engine", description: "Live assignment logic pairing model predictions with real-time agent skills and load." },
            { component: "API Gateway", description: "Fast orchestrator connecting chat webhooks, inference workers, and CRM queues." }
        ],
        tech: ["Python", "FastAPI", "NLP & ML", "Redis", "Docker"],
        image: "/images/chat-routing.webp",
        link: "#",
        repo: "#",
        color: "from-emerald-500 to-teal-500"
    },
    {
        id: 3,
        slug: "scalable-ml-pipeline",
        title: "Scalable ML & AI Evaluation Infrastructure",
        description: "Shared MLOps platform automating feature definitions, offline evals, GPU training, and canary deploys.",
        impact: "Deployment cut from weeks to hours · 15+ production models",
        goal: "Give data scientists a repeatable path from notebook to monitored production without manual ops.",
        timeline: "5 Months Platform Buildout",
        fullDescription: "An internal MLOps and evaluation setup that standardized how models get trained, tested, versioned, and rolled out. Data scientists push code and dataset specs while the platform handles validation, drift alerts, and gradual traffic cutovers.",
        challenge: "Data scientists were losing most of their week to cloud plumbing and one-off deploy scripts. Training features drifted from production features, and stale models sat untouched for months.",
        solution: "Built a Kubernetes-backed pipeline with Terraform, Airflow, and MLflow. Added a central Feature Store so training and serving read identical logic, plus automated drift checks and regression gates before any new model takes live traffic.",
        results: [
            "Shortened model releases from weeks of handoffs down to a few hours.",
            "Shared feature definitions and eval suites across 15+ live models.",
            "Caught accuracy decay automatically via scheduled drift alerts and retraining."
        ],
        architectureHighlights: [
            { component: "Model Training (GPU)", description: "On-demand GPU pools speeding up fine-tuning and batch evaluation runs by 10x." },
            { component: "Model Registry", description: "Versioned catalog tracking model binaries, dataset snapshots, eval scores, and rollback targets." },
            { component: "Inference Service", description: "Autoscaling model API supporting shadow traffic, canary percentages, and latency budgets." }
        ],
        tech: ["Python", "Kubernetes", "Airflow", "MLflow", "Terraform"],
        image: "/images/ml-pipeline.webp",
        link: "#",
        repo: "#",
        color: "from-purple-500 to-pink-500"
    },
    {
        id: 4,
        slug: "real-time-analytics-dashboard",
        title: "Real-Time Data Analytics Dashboard",
        description: "Live operational telemetry and anomaly alerting built to absorb 50k+ streaming events per second.",
        impact: "<200ms end-to-end latency · 50k+ events/sec · Zero downtime",
        goal: "Give engineering and product teams live visibility into traffic health without polling lag.",
        timeline: "3 Months Architecture to Production",
        fullDescription: "An internal operational dashboard tracking service health, throughput, and business metrics as events happen. Statistical anomaly checks highlight sudden drops or error spikes before customers notice.",
        challenge: "Our old polling dashboard bogged down above 10k events per second, leaving teams blind for several minutes right when launch traffic spiked.",
        solution: "Rewrote the stream consumer in Golang to handle high concurrency cleanly, stored windowed rollups in a write-heavy time-series database, and streamed compact WebSocket updates straight to a React and D3 frontend.",
        results: [
            "Kept end-to-end ingestion-to-screen latency under 200ms.",
            "Handled 50k+ events per second cleanly under stress testing and peak launches.",
            "Stayed online with zero downtime through major traffic surges."
        ],
        architectureHighlights: [
            { component: "Stream Processing", description: "Concurrent Golang workers aggregating windowed metrics in flight." },
            { component: "Anomaly Detection", description: "Lightweight statistical checks flagging sudden error or latency deviations." },
            { component: "Time Series DB", description: "Write-optimized storage tuned for fast rollups and historical baseline comparisons." }
        ],
        tech: ["Golang", "React", "D3.js", "InfluxDB", "WebSocket"],
        image: "/images/real-time-analytics.webp",
        link: "#",
        repo: "#",
        color: "from-orange-500 to-red-500"
    },
    {
        id: 5,
        slug: "microservices-architecture-migration",
        title: "Microservices Architecture Migration",
        description: "Phased breakup of a 10-year monolith into independent services with zero customer downtime.",
        impact: "99.99% uptime · 2x deployment frequency · Zero big-bang risk",
        goal: "Untangle slow, risky monolithic deploys without freezing feature delivery.",
        timeline: "9 Months Phased Migration",
        fullDescription: "A nine-month migration that broke a tightly coupled 10-year monolith into cleanly bounded services. Rather than halting the roadmap for a rewrite, we extracted domains incrementally behind an API gateway once tracing and monitoring were solid.",
        challenge: "Shared tables and tangled imports meant one small bug could take down the entire platform. Teams waited in line for weekly 'big bang' releases that everyone dreaded.",
        solution: "Used the Strangler Fig pattern behind a central API Gateway. We put distributed tracing in place first, split databases along real domain ownership lines, and replaced brittle cross-module calls with asynchronous RabbitMQ events.",
        results: [
            "Lifted overall system uptime from 99.5% to 99.99%.",
            "Doubled how often product squads shipped independently.",
            "Removed single points of failure across critical checkout and account paths."
        ],
        architectureHighlights: [
            { component: "API Gateway", description: "Edge router handling authentication, rate limits, and gradual traffic cutovers." },
            { component: "User/Order Services", description: "Separate domain services scaling and deploying on their own schedules." },
            { component: "Database Decomposition", description: "Moved off one shared database bottleneck into isolated per-service schemas." }
        ],
        tech: ["Java", "Spring Boot", "Docker", "PostgreSQL", "RabbitMQ"],
        image: "/images/microservices.webp",
        link: "#",
        repo: "#",
        color: "from-indigo-500 to-blue-500"
    },
    {
        id: 6,
        slug: "automated-code-quality-platform",
        title: "Internal Developer & AI Code Quality Platform",
        description: "Automated PR verification, defect risk scoring, and Shift-Left security checks inside CI/CD.",
        impact: "-50% PR review time · 95% pre-deploy vulnerability catch rate",
        goal: "Keep code quality and security steady as team size and PR volume grew.",
        timeline: "3 Months Architecture to Production",
        fullDescription: "An internal CI verification layer that checks every pull request for style regressions, security issues, and high-risk file changes before a human reviewer even opens the diff.",
        challenge: "Manual code reviews had turned into our slowest bottleneck. Reviewers spent half their time catching routine issues while subtle bugs and vulnerable dependencies still slipped through.",
        solution: "Wired parallel static analysis, secret scanning, and CVE checks into every repo template, alongside a small ML risk model trained on our past incident history to highlight risky PRs for closer senior review.",
        results: [
            "Caught 30% more logic defects and 95% of known vulnerabilities before merge.",
            "Cut median pull-request review wait time by 50%.",
            "Standardized security and build gates across every active service repo."
        ],
        architectureHighlights: [
            { component: "Static Analysis", description: "Automated AST checks paired with historical defect risk scoring on every PR." },
            { component: "Security Scan", description: "Pre-merge SAST, dependency CVE audits, and leaked-secret blocking." },
            { component: "Build & Test", description: "Parallelized CI runners giving developers fast, repeatable merge feedback." }
        ],
        tech: ["Python", "CI/CD", "SonarQube", "Docker", "DevSecOps"],
        image: "/images/code-quality.webp",
        link: "#",
        repo: "#",
        color: "from-slate-700 to-gray-600"
    }
];
