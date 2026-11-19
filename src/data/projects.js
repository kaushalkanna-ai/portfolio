export const projects = [
    {
        id: 7,
        slug: "multi-agent-workflow-orchestration",
        title: "Multi-Agent AI Workflow Orchestration Platform",
        description: "Bounded multi-agent orchestration engine executing enterprise workflows with MCP tool governance and continuous trajectory evals.",
        impact: "65% workflow automation · 99.2% policy compliance · <1.8s p95 step latency",
        goal: "Safely transition enterprise AI from passive chat copilots to audited, tool-executing workflows.",
        timeline: "4 Months Architecture to Production",
        fullDescription: "An enterprise-grade agentic control plane that orchestrates specialist AI agents across research, analytics, and operational actions. Built around deterministic state machines and the Model Context Protocol (MCP), it enforces RBAC, human-in-the-loop approval gates, and automated trajectory evaluation on every run.",
        challenge: "Unconstrained autonomous agent loops suffered from compounding multi-step errors, unpredictable tool invocations, and zero auditability—blocking enterprise security sign-off.",
        solution: "Designed a hybrid state-machine orchestrator pairing deterministic workflow transitions with bounded reasoning nodes. Centralized all external tool access behind an MCP gateway with per-tenant RBAC, step/token budgets, and OpenTelemetry trace capture feeding continuous regression evals.",
        results: [
            "Automated 65% of repetitive multi-step operational workflows end-to-end.",
            "Maintained 99.2% policy compliance across audited tool executions with zero unauthorized mutations.",
            "Cut mean time to debug agent regressions by 70% via full trace replay and golden trajectory evals."
        ],
        architectureHighlights: [
            { component: "Agent Orchestrator", description: "Deterministic state machine bounding agent reasoning loops, retries, and policy guardrails." },
            { component: "MCP Tool Gateway", description: "Standardized, RBAC-governed tool broker enforcing least-privilege access and immutable audit logs." },
            { component: "Observability & Evals", description: "OpenTelemetry trace pipeline powering automated offline and online trajectory grading." }
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
        description: "Unified AI control plane routing traffic across frontier and distilled models with semantic caching, PII redaction, and failover.",
        impact: "58% inference cost reduction · 3.2x faster p95 latency · 99.98% AI uptime",
        goal: "Slash AI unit costs and tail latency while centralizing security, FinOps, and multi-provider resilience.",
        timeline: "3 Months Architecture to Production",
        fullDescription: "A high-throughput Golang AI gateway sitting in front of every internal and customer-facing LLM workload. It dynamically scores request complexity to route traffic between self-hosted distilled models and frontier reasoning APIs while enforcing PII redaction, token budgets, and automatic cross-provider failover.",
        challenge: "Product teams were calling frontier models directly for every prompt—driving runaway token bills, multi-second p95 latency, fragmented security posture, and outages whenever a single model vendor degraded.",
        solution: "Engineered a centralized low-overhead Golang gateway backed by Redis semantic and prompt-prefix caching. Added a lightweight complexity classifier to route 70%+ of extraction and classification traffic to self-hosted vLLM clusters, with circuit breakers and shadow evals ensuring quality parity.",
        results: [
            "Reduced monthly LLM inference spend by 58% through smart model tiering and caching.",
            "Improved p95 response latency by 3.2x across high-volume production endpoints.",
            "Achieved 99.98% effective AI availability via automated multi-provider circuit breaking."
        ],
        architectureHighlights: [
            { component: "LLM Gateway", description: "Zero-trust Golang proxy enforcing API auth, real-time PII redaction, and per-tenant token quotas." },
            { component: "Semantic Cache & Router", description: "Redis embedding cache paired with a complexity scorer routing prompts to optimal model tiers." },
            { component: "FinOps & Telemetry", description: "Real-time cost attribution, latency SLO tracking, and quality drift alerts via OpenTelemetry." }
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
        description: "Permission-aware enterprise retrieval combining BM25, dense vectors, cross-encoder reranking, and citation verification.",
        impact: "94% citation groundedness · -70% hallucination rate · 450ms retrieval p95",
        goal: "Ground enterprise AI answers in live, permission-scoped proprietary knowledge with verifiable citations.",
        timeline: "4 Months Architecture to Production",
        fullDescription: "A real-time knowledge and context-assembly engine unifying documents, CRM records, and internal wikis for enterprise AI applications. It synchronizes document permissions continuously so every retrieved chunk respects user ACLs and passes automated groundedness checks before response delivery.",
        challenge: "Naive vector-only RAG missed exact product identifiers and acronyms, leaked restricted documents across teams, and degraded as stale chunks accumulated—eroding user trust in AI outputs.",
        solution: "Built an event-driven Kafka ingestion pipeline producing structure-aware chunks synced into ElasticSearch (BM25) and pgvector. Combined reciprocal-rank fusion with cross-encoder reranking, strict query-time ACL filtering, and a lightweight verification pass tying every claim to source citations.",
        results: [
            "Reached 94% verified citation groundedness across enterprise evaluation benchmarks.",
            "Cut unsupported hallucinations by 70% compared to baseline vector-only retrieval.",
            "Delivered permission-filtered hybrid retrieval and reranking in under 450ms at p95."
        ],
        architectureHighlights: [
            { component: "Ingestion Pipeline", description: "Kafka-backed incremental sync keeping semantic chunks and ACL metadata fresh within seconds." },
            { component: "Hybrid Index", description: "Dual ElasticSearch BM25 and dense vector retrieval fused for both exact and semantic recall." },
            { component: "ACL Filter & Reranker", description: "Permission-enforced cross-encoder stage assembling compact, high-signal context with citations." }
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
        description: "Real-time sentiment intelligence, hybrid LLM + NLP enrichment, and trend forecasting for global brands.",
        impact: "50M+ posts/day at sub-second latency · +35% sentiment accuracy",
        goal: "Turn 50M+ daily unstructured social signals into real-time, brand-safe executive intelligence.",
        timeline: "4 Months Architecture to Global Rollout",
        fullDescription: "A real-time intelligence platform ingesting tens of millions of social posts daily to surface actionable audience insights. Combining domain-tuned transformer models with LLM-powered summarization and anomaly alerts, it detects sentiment shifts, emerging narratives, and PR risks as they unfold.",
        challenge: "Processing high-velocity, multilingual unstructured text with sub-second latency while balancing inference cost, domain-specific slang accuracy, and strict enterprise SLA guarantees.",
        solution: "Architected a Kappa streaming architecture with Apache Kafka and Spark Streaming feeding a tiered AI core—using fast fine-tuned transformers for high-volume sentiment/NER scoring and selective LLM synthesis for executive crisis briefings, indexed in ElasticSearch.",
        results: [
            "Processed 50M+ posts daily with sub-second end-to-end indexing latency.",
            "Improved multilingual sentiment accuracy by 35% over off-the-shelf models.",
            "Reduced brand crisis detection and response time from hours to minutes."
        ],
        architectureHighlights: [
            { component: "Processing Layer", description: "Tiered AI Core pairing fine-tuned transformers for Sentiment/NER with LLM-driven trend synthesis." },
            { component: "Data Ingestion (Kafka)", description: "High-throughput event backbone buffering 50k+ messages/sec with backpressure control." },
            { component: "ElasticSearch", description: "Hybrid keyword and vector-ready index powering instant trend discovery and drill-downs." }
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
        description: "AI-driven triage and intent routing middleware pairing ML classifiers with real-time sentiment scoring.",
        impact: "-25% handle time · -40% transfers · +60% faster first response",
        goal: "Eliminate manual ticket triage by matching customer intent and urgency to the right specialist instantly.",
        timeline: "3 Months Architecture to Production",
        fullDescription: "An intelligent triage layer sitting between customer channels and global support squads. It evaluates incoming conversations for intent, complexity, and emotional urgency in milliseconds, routing each ticket to the best-matched specialist with pre-generated context.",
        challenge: "Static keyword rules created long queues, mismatched agent assignments, and high transfer rates—especially across multilingual support teams with uneven specialist availability.",
        solution: "Engineered a two-stage inference pipeline on FastAPI and Redis: Stage 1 performs low-latency intent classification, while Stage 2 scores sentiment and escalation urgency to dynamically prioritize distressed accounts and feed structured handoff summaries.",
        results: [
            "Reduced average handle time (AHT) by 25% across global support queues.",
            "Decreased multi-hop ticket transfer rate by 40%.",
            "Improved First Response Time (FRT) by 60% for high-priority accounts."
        ],
        architectureHighlights: [
            { component: "Sentiment Analysis Service", description: "Real-time NLP inference engine scoring customer intent, frustration, and SLA urgency." },
            { component: "Routing Engine", description: "Stateful decision layer matching AI classifications against live agent skill and capacity pools." },
            { component: "API Gateway", description: "Low-latency orchestrator coordinating webhooks, model inference, and CRM handoffs." }
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
        description: "End-to-end MLOps and LLMOps platform automating feature lineage, evals, training, and safe rollouts.",
        impact: "Deployment cut from weeks to hours · 15+ production models",
        goal: "Standardize training, automated evaluation, and zero-downtime deployment across every AI/ML model.",
        timeline: "5 Months Platform Buildout",
        fullDescription: "A unified MLOps and model-lifecycle platform that eliminates brittle manual handoffs between data science and platform engineering. It automates dataset validation, offline/online evals, model registry lineage, and canary inference rollouts.",
        challenge: "Applied scientists spent nearly 80% of their time wrestling with cloud plumbing and manual deployments, resulting in training-serving skew, silent model drift, and weeks-long iteration cycles.",
        solution: "Built a Kubernetes-native orchestration platform with Terraform, Airflow, and MLflow. Introduced a shared Feature Store to enforce training-serving parity alongside automated drift detection, regression eval gates, and shadow-traffic rollouts.",
        results: [
            "Cut model promotion from weeks of manual ops to automated, hours-long releases.",
            "Standardized feature definitions and eval benchmarks across 15+ production models.",
            "Automated drift-triggered retraining to sustain accuracy without manual intervention."
        ],
        architectureHighlights: [
            { component: "Model Training (GPU)", description: "Elastic GPU compute pools accelerating fine-tuning and batch evaluation runs by 10x." },
            { component: "Model Registry", description: "Versioned system of record tracking artifacts, datasets, eval scores, and rollback lineage." },
            { component: "Inference Service", description: "Autoscaling model-serving layer with canary routing, latency budgets, and telemetry." }
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
        description: "Sub-second operational telemetry and streaming anomaly detection at 50k+ events per second.",
        impact: "<200ms end-to-end latency · 50k+ events/sec · Zero downtime",
        goal: "Give engineering and product leaders live visibility into system health and streaming anomalies.",
        timeline: "3 Months Architecture to Production",
        fullDescription: "A mission-critical observability and business-metrics console engineered for high-throughput event streams. Teams monitor live service health, conversion funnels, and automated statistical anomalies without query lag during traffic spikes.",
        challenge: "Legacy polling dashboards stalled above 10k events/sec, causing multi-minute blind spots during peak launches and delaying incident detection.",
        solution: "Re-architected the ingestion and aggregation tier in Golang for high-concurrency stream processing, backed by a write-optimized time-series store and multiplexed WebSocket channels pushing live deltas to a React + D3 interface.",
        results: [
            "Achieved <200ms end-to-end ingestion-to-render latency under load.",
            "Scaled cleanly to 50k+ concurrent events per second.",
            "Maintained zero downtime across major traffic surges and product launches."
        ],
        architectureHighlights: [
            { component: "Stream Processing", description: "High-concurrency Golang workers computing windowed aggregations in flight." },
            { component: "Anomaly Detection", description: "Streaming statistical models flagging latency and volume deviations automatically." },
            { component: "Time Series DB", description: "Write-optimized storage enabling rapid rollups and historical baseline comparisons." }
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
        description: "Zero-downtime decomposition of a 10-year monolith into domain-driven, independently deployable services.",
        impact: "99.99% uptime · 2x deployment frequency · Zero big-bang risk",
        goal: "Eliminate monolithic deployment bottlenecks while preserving full business continuity.",
        timeline: "9 Months Phased Migration",
        fullDescription: "A multi-quarter modernization program that decomposed a brittle 10-year-old monolith into bounded-context microservices. By prioritizing observability, clear domain contracts, and incremental cutovers, squads unlocked independent release velocity.",
        challenge: "Tightly coupled modules and a shared database made every release a high-risk 'big bang' event where a single localized defect could cascade into a full platform outage.",
        solution: "Executed the Strangler Fig pattern behind a unified API Gateway. Established distributed tracing before the first service split, enforced strict per-domain data ownership, and transitioned cross-service workflows to asynchronous event messaging.",
        results: [
            "Improved overall platform availability from 99.5% to 99.99%.",
            "Doubled independent squad deployment frequency with smaller blast radii.",
            "Eliminated single points of failure across critical revenue workflows."
        ],
        architectureHighlights: [
            { component: "API Gateway", description: "Central edge router handling auth, rate limiting, and progressive Strangler Fig traffic shifts." },
            { component: "User/Order Services", description: "Bounded-context domains scaling and deploying on independent release cadences." },
            { component: "Database Decomposition", description: "Decoupled persistence boundaries replacing shared-schema contention with event contracts." }
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
        description: "Automated PR verification, AI-assisted risk scoring, and Shift-Left security guardrails in CI/CD.",
        impact: "-50% PR review time · 95% pre-deploy vulnerability catch rate",
        goal: "Scale code quality and security verification as engineering output accelerates.",
        timeline: "3 Months Architecture to Production",
        fullDescription: "An Internal Developer Platform (IDP) verification layer that acts as an automated quality and security gatekeeper on every pull request—catching high-risk changes, dependency vulnerabilities, and architectural regressions before human review even starts.",
        challenge: "Manual code reviews were inconsistent and becoming the primary delivery bottleneck, especially as team size and code velocity grew—letting subtle bugs and security issues slip into production.",
        solution: "Built a parallelized CI verification pipeline combining static analysis, secret/dependency scanning, and a custom ML risk-prediction model trained on historical defect data to flag fragile PRs and auto-annotate review feedback.",
        results: [
            "Caught 30% more logic defects and 95% of known vulnerabilities pre-deployment.",
            "Cut median pull-request review turnaround time by 50%.",
            "Standardized golden-path quality and security guardrails across all repositories."
        ],
        architectureHighlights: [
            { component: "Static Analysis", description: "Automated code-review engine pairing AST linting with ML-based defect risk scoring." },
            { component: "Security Scan", description: "Shift-left SAST, dependency CVE checks, and secret detection enforced on every PR." },
            { component: "Build & Test", description: "Parallelized ephemeral verification gates guaranteeing deterministic merge readiness." }
        ],
        tech: ["Python", "CI/CD", "SonarQube", "Docker", "DevSecOps"],
        image: "/images/code-quality.webp",
        link: "#",
        repo: "#",
        color: "from-slate-700 to-gray-600"
    }
];
