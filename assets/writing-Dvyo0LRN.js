import{c as e}from"./index-CTILZKvD.js";import{C as t}from"./compass-D7pDhctz.js";import{Z as a}from"./zap-BONXVIs5.js";import{C as o}from"./code-uIMt_GRH.js";const n=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],i=e("bot",n);const s=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],r=e("cloud",s);const l=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],c=e("layers",l);const d=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],u=e("shield-check",d);const h=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],p=e("trending-up",h);const m=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],g=e("users",m),v=[{id:7,title:"AI Unit Economics: Protecting SaaS Gross Margins at Scale",summary:"AI breaks the near-zero marginal cost assumption of classic SaaS. Practical ways to line up architecture, pricing, and FinOps before inference bills eat your margin.",date:"Nov 04, 2026",readTime:"7 min read",slug:"ai-unit-economics-saas-margins",tags:["Strategy","FinOps","AI"],icon:p,link:"#",color:"from-emerald-500 to-cyan-600",keyTakeaways:["Variable token spend turns model routing into a real P&L decision.","Pure seat-based pricing breaks down once automated workflows do more of the work.","Simple routing and caching usually cut inference spend by more than half.","Track cost per completed workflow alongside latency, not just on a monthly invoice."],content:`
            <p class="lead">Traditional B2B SaaS made executives comfortable with 80%+ gross margins. Serving one more API call cost almost nothing. AI features flip that math overnight, because every reasoning step, retrieval pass, and agent loop carries real variable compute cost.</p>

            <p>The tricky part is that the problem hides during pilots. Ten beta customers barely move your cloud bill. Six months later, when a few enterprise accounts turn on automated workflows across their whole team, token spend can quietly shave 15 or 20 points off gross margin.</p>

            <h2>Routing Traffic Like a Real Budget</h2>
            <p>In most codebases I review, the first version sends everything to the largest frontier model available. Tagging a support ticket? Frontier model. Extracting five JSON fields? Same frontier model. That makes sense during week one when you are validating demand. Leaving it that way in production burns cash fast.</p>
            <p>Once a feature sticks, we split inference into tiers. Routine extraction, classification, and short summaries go to small, fast models (often self-hosted on vLLM). Frontier reasoning models stay reserved for ambiguous synthesis where their extra accuracy actually shows up in evals. Pair that with prompt-prefix caching for long system instructions and a Redis semantic cache for common queries, and most teams cut inference COGS by 50% to 70% right away.</p>
            <p>Trimming bloated RAG context helps twice: you pay for fewer input tokens, and the model stops getting distracted by irrelevant paragraphs.</p>

            <h2>Where Seat Pricing Starts to Hurt</h2>
            <p>If your product helps a 20-person operations team handle triple the volume, pure per-seat pricing works against you. Customers get real value, yet your revenue stays flat while your token bill triples.</p>
            <p>CFOs still hate completely unpredictable utility bills, so pure pay-as-you-go rarely lands well in enterprise procurement either. The middle ground that works best in practice is a predictable platform base fee paired with included usage buckets or outcome tiers (resolved tickets, processed campaigns, intelligence runs) that expand naturally with customer adoption.</p>

            <h2>Put Cost in Your Telemetry</h2>
            <p>Waiting for a monthly cloud bill is too late to spot a runaway prompt loop. Emit token, embedding, and tool costs as regular OpenTelemetry tags on every request, tied to <code>tenant_id</code> and <code>feature</code>. Once product managers can see cost per completed workflow next to adoption and p95 latency, architecture and pricing conversations get grounded very quickly.</p>
            <p>Every quarter, pull your top ten most expensive prompts and benchmark them against newer small models on your eval set. Inference prices move fast, and keeping your routing layer flexible lets you capture those savings without rewriting product code.</p>
        `},{id:5,title:"From Copilots to Autonomous Agents in Production",summary:"Why open-ended agent loops fail in enterprise environments, and how explicit state machines, MCP tool permissions, and trajectory evals make them dependable.",date:"Oct 18, 2026",readTime:"8 min read",slug:"autonomous-agents-in-production",tags:["Agentic AI","Architecture","Evals"],icon:i,link:"#",color:"from-cyan-500 to-blue-600",keyTakeaways:["Every tool call needs timeouts, step caps, and idempotency just like any distributed service.","Keep workflow state in deterministic code and limit models to bounded reasoning steps.","Centralizing tools behind MCP gives security one place to enforce RBAC and audit logs.","Record full execution traces and turn every live mistake into a permanent eval case."],content:`
            <p class="lead">The first wave of workplace AI stayed safely in sidebars. A copilot drafted an email or suggested a snippet, and a human decided whether to paste it. Wiring agents directly into production workflows (triaging tickets, updating CRM records, kicking off internal jobs) raises the stakes completely.</p>

            <p>When a chat sidebar makes something up, the user sighs and moves on. When a write-enabled agent makes something up, you have a customer-facing incident.</p>

            <h2>Why Open-Ended Loops Break Down</h2>
            <p>Handing a model twenty tools and a broad prompt looks magical in a three-minute video. In production, small error rates multiply fast. Even at 95% accuracy per step, a ten-step autonomous chain succeeds less than 60% of the time.</p>
            <p>What actually holds up under real SLAs is much less flashy: keep workflow transitions, retries, and permissions in normal deterministic code (a state machine), and drop model calls into narrow, well-defined nodes where judgment is genuinely needed.</p>
            <ul>
                <li>Read-only lookups can run without friction.</li>
                <li>Low-risk internal writes can execute automatically with clear audit logs and easy undo.</li>
                <li>Customer-facing or financial mutations pause at an explicit human approval gate.</li>
            </ul>
            <p>Set hard ceilings on step count, runtime, and token spend from day one. An agent stuck retrying a broken API endpoint at 2 a.m. will quietly drain your budget if nobody caps it.</p>

            <h2>Standardizing Tool Access with MCP</h2>
            <p>Early agent prototypes usually accumulate messy one-off API wrappers scattered across repos. That turns into a nightmare the moment enterprise security asks who accessed which customer record and why.</p>
            <p>Putting internal tools behind a standard interface like the Model Context Protocol (MCP) cleans this up. Security gets a single gateway for per-tenant RBAC, rate limits, and immutable audit trails. Product squads stop rebuilding the same CRM or database connectors over and over. Equally important: keep each agent's tool list short. Stuffing forty tool schemas into a prompt hurts tool-selection accuracy and slows down every turn.</p>

            <h2>Treat Trajectory Evals Like Unit Tests</h2>
            <blockquote>If you would not merge backend code without automated tests, do not ship a prompt or tool change without running trajectory evals.</blockquote>
            <p>We score candidate changes against a golden set of real anonymized runs before anything hits production. Programmatic checks verify strict rules first (valid JSON arguments, zero unauthorized tool calls, respected step budgets), and rubric graders score final answer quality. Whenever something goes sideways in production, we pull the OpenTelemetry trace and add it straight into the regression suite so that failure only happens once.</p>
        `},{id:8,title:"Designing AI-Native Product Roadmaps Beyond 'Bolt-On' Features",summary:"Why chat drawers and sparkle buttons lose steam after launch, and how to rethink customer workflows around background intelligence and earned trust.",date:"Sep 12, 2026",readTime:"7 min read",slug:"ai-native-product-roadmaps",tags:["Product Strategy","AI","UX"],icon:t,link:"#",color:"from-indigo-500 to-purple-600",keyTakeaways:["Adding a chat drawer to an existing CRUD screen forces users to do the prompting work.","Better AI features run in the background on real events and surface exceptions for review.","Inline source citations and one-click undo build far more adoption than flashy demos.","Every user edit or rejection is valuable training and eval signal if you capture it cleanly."],content:`
            <p class="lead">Look at how most SaaS companies shipped their first AI roadmap: keep every existing screen untouched, bolt a chat sidebar onto the right edge, scatter a few sparkle icons over text boxes, and call it a launch. Usage usually spikes in week one and falls off a cliff by week four.</p>

            <p>Busy operators rarely wake up wishing they had another blank prompt box to type into. They just want tedious multi-step work off their plate.</p>

            <h2>Flip the Workflow from Pull to Push</h2>
            <p>Conventional software waits for someone to log in, pick five filters, export a view, and figure out what changed. Intelligence works much better when it runs quietly in the background on real business events.</p>
            <p>Think about a sudden spike in negative customer sentiment or an enterprise renewal slipping off track. Instead of waiting for an account manager to ask a chatbot what is happening, the system detects the shift, gathers the relevant threads and metrics, drafts a concrete action plan, and drops a short brief right into their queue. The human starts at 80% done and spends their time making the call.</p>
            <p>Whenever possible, skip walls of prose. Show structured diffs, ranked lists, and clean approve/edit buttons inside the screens people already live in.</p>

            <h2>Trust Takes Months to Build and Seconds to Lose</h2>
            <p>Enterprise users remember one confident hallucination far longer than ten accurate summaries. A few small UX habits do the heavy lifting here:</p>
            <ol>
                <li>Link every synthesized claim or metric straight back to the exact source record so users can verify it in one click.</li>
                <li>Roll out new capabilities in draft or shadow mode first. Once teams see the acceptance rate hit 90%+, they will ask you to automate the next step.</li>
                <li>Make every AI-initiated edit easy to inspect and reverse.</li>
            </ol>

            <h2>Capture the Edits</h2>
            <p>Every time a customer rewrites a drafted reply, dismisses an alert, or tweaks a recommendation, your product just received free domain feedback. Log those micro-corrections cleanly (with customer consent and privacy controls) and pipe them back into your eval datasets and retrieval tuning. Over a year, that feedback loop becomes much harder for competitors to copy than any prompt.</p>
        `},{id:6,title:"Platform Engineering in the Era of AI-Assisted Development",summary:"When coding agents make writing code fast and cheap, the real slowdown moves to PR review, architecture checks, and safe deploys. Here is how internal platforms need to adapt.",date:"Jul 24, 2026",readTime:"7 min read",slug:"platform-engineering-ai-era",tags:["Platform","DevEx","Leadership"],icon:c,link:"#",color:"from-emerald-500 to-teal-500",keyTakeaways:["Code generation sped up dramatically, making review and verification the main delivery bottleneck.","Clean golden paths and typed contracts help both new hires and coding agents stay accurate.","Automate architecture boundaries, preview environments, and security scans before human review.","Judge engineering health by change failure rate and lead time, never lines of code."],content:`
            <p class="lead">For most of my career, writing code was treated as the main constraint on shipping software. AI coding tools changed that almost overnight. Engineers can now open pull requests faster than senior teammates can carefully review them.</p>

            <p>If your CI pipeline and internal developer platform stay stuck in 2022, faster code output just turns into review queues, duplicated helpers, and nervous Friday deploys.</p>

            <h2>Turn CI into a Real Verification Engine</h2>
            <p>Asking staff engineers to catch formatting nits, missing null checks, and subtle dependency leaks by hand does not scale when PR volume doubles. Push everything mechanical onto the platform before a human even gets tagged:</p>
            <ul>
                <li>Spin up isolated preview environments on every pull request with realistic seed data and automated smoke tests.</li>
                <li>Enforce module boundaries and API schemas right in CI so neither a rushed developer nor a coding agent accidentally reaches across service lines.</li>
                <li>Run secret scanning, SAST, and dependency CVE checks automatically as required merge gates.</li>
            </ul>
            <p>Once the platform guarantees a branch builds, passes integration suites, respects architectural rules, and carries no known vulnerabilities, human reviewers can spend their time on design trade-offs and edge cases.</p>

            <h2>Clean Repos Help Agents Too</h2>
            <p>One pleasant surprise over the past year: investments we made for human developer experience paid off twice with AI coding assistants. Clear service templates, strict TypeScript or Go types, consistent folder layouts, and short up-to-date READMEs cut agent mistakes noticeably. Messy repos confuse people and models in the exact same ways.</p>

            <h2>Stop Counting PRs and Lines of Code</h2>
            <p>Every few months someone asks whether we should track lines of AI-generated code. I always push back. Generating more code is easy; maintaining less code while shipping faster is the actual goal. Stick to the fundamentals: lead time from commit to safe production, change failure rate, recovery time when something breaks, and how long PRs sit waiting for review.</p>
        `},{id:9,title:"Eval-Driven Product Development: Replacing Vibes with Measurable Quality",summary:"How product managers and engineers write living evaluation suites together so model upgrades stop feeling like a gamble.",date:"May 28, 2026",readTime:"6 min read",slug:"eval-driven-product-development",tags:["Evals","Product","Governance"],icon:u,link:"#",color:"from-blue-600 to-indigo-500",keyTakeaways:["Testing five prompts by hand breaks down as soon as real customer traffic arrives.","PMs and domain experts need to co-write failure cases and pass/fail rubrics with engineering.","Solid eval suites let you swap to cheaper, faster models in days instead of quarters.","Always check offline eval scores against live user edits, escalations, and retention."],content:`
            <p class="lead">Plenty of smart teams still ship AI changes on gut feel. Someone tweaks a system prompt, tests five familiar queries in staging, likes how the tone reads, and pushes to production. Two days later, a quiet regression breaks a workflow for an enterprise account nobody tested.</p>

            <p>With deterministic software, unit and integration tests catch those regressions before merge. With probabilistic models, an automated evaluation suite fills the same role, except product managers need to be in the room helping build it.</p>

            <h2>Write the Rubric Before the Prompt</h2>
            <p>Before writing prompt text or tuning retrieval, get Product, Engineering, and one or two domain SMEs together to gather 50 to 150 real scenarios: messy customer inputs, edge cases with missing permissions, ambiguous questions, and known traps.</p>
            <p>Skip vague 1-to-5 quality ratings where reviewers constantly disagree on what a "3" versus a "4" means. Binary pass/fail checks hold up much better: Did it pull from an authorized document? Did it include a verifiable citation? Did it avoid inventing numbers? Once a week, sit down together for an hour and read twenty real production traces. Almost every surprising failure you spot turns into a fresh test case.</p>

            <h2>Why Evals Give You Leverage Over Vendors</h2>
            <blockquote>Teams without good evals stay stuck paying for last year's model out of fear. Teams with good evals switch the week a faster, cheaper model drops.</blockquote>
            <p>Model releases keep landing every couple of months. Without a trusted benchmark, testing a new model feels like a multi-week manual QA project, so teams put it off and overpay. With evals wired into CI, testing a newly released model takes an afternoon.</p>

            <h2>Keep Offline Scores Honest</h2>
            <p>It is easy to overfit a static eval dataset and celebrate a 96% score while customers quietly stop using the feature. Pair offline benchmarks with live behavioral checks: how often users heavily edit an AI draft, how often they re-ask the same question, and whether support escalations actually drop. Run big prompt or model changes in shadow mode against live traffic first so you see real divergence before customers do.</p>
        `},{id:1,title:"Scaling Engineering Teams from 5 to 50",summary:"What breaks in communication, hiring, and management as an engineering group grows tenfold, and the habits that keep teams moving fast.",date:"Dec 12, 2025",readTime:"8 min read",slug:"scaling-engineering-teams",tags:["Leadership","Scaling","Culture"],icon:g,link:"#",color:"from-violet-500 to-fuchsia-500",keyTakeaways:["Around 15 to 20 engineers, informal word-of-mouth stops working and written RFCs become mandatory.","Hire for systems judgment and perspective the team is missing, not carbon copies of early hires.","Managers have to let go of being the top coder so they can clear blockers and grow leaders.","Clean onboarding and clear domain ownership beat adding more status meetings."],content:`
            <p class="lead">Growing an engineering org from 5 people to 50 breaks almost every habit that made the early team fast. I have been through that stretch a few times now, and the failure modes show up right on schedule.</p>

            <h2>When Word-of-Mouth Runs Out</h2>
            <p>With five engineers, everyone hears every decision naturally. You sit near each other or share one Slack channel, and context spreads without effort.</p>
            <p>By twenty or thirty engineers, that informal flow disappears. The mistake I see most often is trying to keep the "flat startup feel" by inviting everyone to every architecture call. Suddenly nobody has uninterrupted time to build. Writing short RFCs and Architecture Decision Records (ADRs) feels slightly formal at first, yet it buys back hours every week and keeps distributed teams across time zones aligned. Bonus: clear written context also makes onboarding and AI dev tools far more effective.</p>

            <h2>Split Ownership Along Real Domains</h2>
            <p>Fifty engineers cannot report to one person, and they should not be tripping over each other in the same deployment queue. Organize around small cross-functional squads that own a clear slice of the product (data ingestion, platform, core app) from design through on-call.</p>
            <p>Watch cross-team handoffs closely. If Squad A has to file a ticket with Squad B every time they ship a small feature, you still have a bottleneck. Give squads real authority inside their domain while keeping shared security, observability, and API conventions clear.</p>

            <h2>Hiring Without Dropping the Bar</h2>
            <p>Rapid hiring tempts teams to cut corners or hire clones of the founding group. Neither ages well. Instead of asking whether someone feels like a "culture fit," ask what perspective or strength the group currently lacks. Standardize interview rubrics early, include a calibrated interviewer from a sibling team, and focus interviews on system design, debugging under ambiguity, and product judgment rather than memorized trivia.</p>

            <h2>Letting Go of the Keyboard</h2>
            <p>Early engineering managers usually code half the week. Past twenty engineers, hanging onto critical-path tickets slows the whole group down. Your highest leverage moves to unblocking cross-functional friction, coaching senior ICs and new managers, and making sure every squad knows why their work matters to customers.</p>
        `},{id:2,title:"The ROI of Technical Debt",summary:"How to talk about refactoring with executives, carve out steady pay-down capacity, and keep fast shipping from turning into a rewrite.",date:"Nov 05, 2025",readTime:"6 min read",slug:"roi-technical-debt",tags:["Strategy","Tech Debt","Management"],icon:a,link:"#",color:"from-amber-500 to-orange-500",keyTakeaways:["Taking on short-term debt to hit a real market window is fine if you schedule repayment.","Frame cleanup work around outage risk and delivery speed, not code aesthetics.","Reserve roughly 20% of ongoing capacity so debt never piles up into a risky rewrite.","Ignore low-risk legacy code that rarely changes; focus only where pain actually compounds."],content:`
            <p class="lead">Engineers often use "technical debt" to mean any code written by someone else six months ago. Used properly, though, it is a useful financial idea: sometimes you deliberately take a shortcut to hit a real launch date, knowing you will pay interest until you clean it up.</p>

            <p>Zero tech debt is a fantasy, and chasing it stalls the business. Letting interest pile up unchecked is just as dangerous.</p>

            <h2>Speak in Risk and Delivery Speed</h2>
            <p>CEOs and sales leaders rarely care that a module looks messy or lacks strict typing. They care deeply about uptime during peak sales and how long new customer features take to ship.</p>
            <ul>
                <li><strong>Weak pitch:</strong> "We need two sprints to refactor the billing service because the code is spaghetti."</li>
                <li><strong>Stronger pitch:</strong> "Stabilizing the billing service removes our biggest outage risk ahead of peak renewals and cuts lead time on upcoming pricing features by about 30%."</li>
            </ul>
            <p>Tie cleanup work to reliability risk or lost roadmap speed, and getting executive support stops feeling like an uphill battle.</p>

            <h2>Budget the 20% Maintenance Habit</h2>
            <p>The healthiest teams I have run keep roughly 20% of each sprint dedicated to dependency upgrades, test stability, observability, and targeted refactoring. Nobody asks for a special board vote to write tests, and routine codebase upkeep belongs in the same bucket. Steady maintenance prevents the dreaded multi-quarter "full rewrite" that freezes the product while competitors catch up. With AI tools making it easier than ever to generate duplicate code quickly, keeping that cleanup cadence matters even more.</p>

            <h2>Pick Your Battles</h2>
            <p>I sort cleanup items along two axes: business risk and effort. High-risk, low-effort fixes (missing alerts, security patches, slow hot-path queries) get done immediately. High-risk, high-effort items (database splits, platform migrations) get scoped as real roadmap projects with clear milestones. Low-risk, high-effort eyesores sitting in cold code that nobody touches? Leave them alone and spend your energy where customers actually feel the difference.</p>
        `},{id:3,title:"Microservices: A Retrospective",summary:"Hard lessons from breaking up a monolithic platform: what worked, where we over-split, and why I default to a modular monolith today.",date:"Oct 20, 2025",readTime:"10 min read",slug:"microservices-retrospective",tags:["Architecture","Microservices","Cloud"],icon:r,link:"#",color:"from-sky-500 to-indigo-500",keyTakeaways:["Microservices solve team coordination and scaling differences, not messy code.","Splitting too early creates a distributed monolith: network hops without true independence.","Put OpenTelemetry tracing and clear SLOs in place before extracting service number one.","Start with a modular monolith and split only when scale or org boundaries force your hand."],content:`
            <p class="lead">Around 2015, the default advice across the industry was simple: monoliths are bad, split everything into microservices. After leading migrations off decade-old monoliths and running dozens of services in production, I have a much more cautious view.</p>

            <h2>How You Accidentally Build a Distributed Monolith</h2>
            <p>Every migration gets pitched around team autonomy. In reality, if you split a tangled codebase along the wrong lines, you trade compile-time coupling (which your IDE shows you immediately) for runtime coupling across network hops.</p>
            <p>When Service A synchronously calls Service B, which calls Service C, and a deploy to Service C slows down the chain, users just see a broken site. You end up coordinating lockstep deploys across five repos while paying extra latency and retry overhead on every request.</p>

            <h2>Three Good Reasons to Actually Split</h2>
            <p>Today I only pull a component out of a monolith when at least one of these pressures is obvious:</p>
            <ol>
                <li><strong>Very different hardware needs:</strong> GPU inference workers or heavy stream consumers should scale separately from standard web APIs.</li>
                <li><strong>Different release or compliance rules:</strong> A billing or auth boundary that changes slowly and needs tight audit isolation.</li>
                <li><strong>Team contention:</strong> Enough engineers are shipping daily in one repo that merge queues and coordinated deploys genuinely cost more than network calls.</li>
            </ol>

            <h2>Pay the Observability Tax Up Front</h2>
            <p>Debugging one monolith log file is easy. Tracking a slow checkout request across twelve services without OpenTelemetry tracing, correlation IDs, and clear service SLOs is miserable. You also leave local ACID transactions behind and step into eventual consistency, outbox tables, and idempotent retries. Make sure your platform and on-call tooling are ready before multiplying services.</p>

            <h2>Where I Start Now</h2>
            <p>For a brand-new product, I almost always start with a modular monolith: one deployable unit with strict internal package boundaries and separate database schemas per domain. If you cannot keep module boundaries clean inside a single repository, putting HTTP between them only makes the tangle harder to debug. Clean up the boundaries first, then split out services when real traffic or team size justifies the overhead.</p>
        `},{id:4,title:"AI in Production: Beyond the Hype",summary:"Field notes on running LLM features under real enterprise SLAs: handling latency, cutting token bills, and getting retrieval right.",date:"Sep 15, 2025",readTime:"7 min read",slug:"ai-production-strategies",tags:["AI","LLM","Engineering"],icon:o,link:"#",color:"from-rose-500 to-pink-500",keyTakeaways:["Getting an AI demo working takes an afternoon; hitting enterprise latency and accuracy takes real systems work.","Stream responses early, cache aggressively, and route simple work to smaller models.","Hybrid search and clean chunking beat stuffing huge context windows.","Workflow integration and clean proprietary data outlast every quarterly model release."],content:`
            <p class="lead">Almost every product deck now promises AI. Getting a prototype working in a notebook takes a couple of hours. Running that same feature for thousands of enterprise users with tight latency budgets, predictable bills, and low hallucination rates is a completely different job.</p>

            <h2>Fixing Latency Without Ruining Margin</h2>
            <p>People expect web apps to feel instant, while large reasoning models can take several seconds to respond. Waiting for a full completion behind a blank spinner kills engagement quickly.</p>
            <p>Three practical habits solve most of the pain:</p>
            <ul>
                <li>Stream partial outputs over Server-Sent Events (SSE) and show lightweight progress states so the interface feels alive immediately.</li>
                <li>Combine prompt-prefix caching with Redis semantic caching for repeated or near-identical user questions.</li>
                <li>Stop using a heavyweight model for everything. Fast distilled models handle classification, extraction, and short summaries at a fraction of the time and cost.</li>
            </ul>

            <h2>Why Giant Context Windows Are Still a Trap</h2>
            <p>Multi-million-token context windows tempted plenty of teams to skip retrieval and dump entire folders straight into the prompt. In real workloads, massive prompts still hurt recall on buried details, slow down time-to-first-token, and blow up unit costs.</p>
            <p>Hybrid search (BM25 for exact codes and names paired with vector embeddings for meaning) plus a fast reranker consistently wins. Spend most of your engineering time on data hygiene, clean document chunking, metadata filters, and permission checks rather than tweaking adjectives in a system prompt.</p>

            <h2>What Actually Sticks</h2>
            <p>Base models keep getting cheaper and smarter every few months. If your product is just a thin text box over an API, every model release chips away at your differentiation. The value that sticks comes from clean domain data, tight integrations with the systems your customers already rely on, and eval pipelines that prove your feature works reliably week after week.</p>
        `}];export{v as a};
