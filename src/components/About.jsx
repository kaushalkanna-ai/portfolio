import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Cloud, Compass, MapPin } from 'lucide-react';

const pillars = [
    {
        title: 'AI & Agentic Systems',
        icon: Cpu,
        accent: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
        tags: ['Agentic AI', 'LLM Orchestration', 'AI Systems & Evals', 'MCP', 'Hybrid RAG', 'MLOps']
    },
    {
        title: 'Cloud & Distributed Scale',
        icon: Cloud,
        accent: 'text-teal-500 bg-teal-500/10 border-teal-500/20',
        tags: ['Cloud Architecture', 'Distributed Systems', 'Microservices', 'Platform Engineering', 'Golang', 'Python', 'AWS', 'Kafka', 'Redis', 'Kubernetes', 'Docker']
    },
    {
        title: 'Leadership & Product',
        icon: Compass,
        accent: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/20',
        tags: ['Technical Leadership', 'Product Strategy', 'Global Team Scaling', 'AI FinOps']
    }
];

const handleSpotlightMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
};

const About = () => {
    return (
        <section id="about" className="py-24 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col justify-center px-4 relative">
            <div className="max-w-7xl w-full mx-auto">
                <motion.h2
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -40 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold mb-12 border-l-4 border-blue-500 pl-4"
                >
                    About Me<span className="text-blue-500">.</span>
                </motion.h2>

                <div className="grid lg:grid-cols-12 gap-6 items-stretch">
                    {/* Executive Narrative Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45 }}
                        onMouseMove={handleSpotlightMove}
                        className="spotlight-card relative lg:col-span-7 bg-white dark:bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-gray-200/80 dark:border-white/10 shadow-sm flex flex-col justify-between overflow-hidden"
                    >
                        <div className="relative z-10 space-y-5">
                            <p className="text-lg md:text-xl text-gray-900 dark:text-white font-medium leading-relaxed">
                                I serve as Senior Vice President of Engineering &amp; Product, splitting my time between system architecture and product direction.
                            </p>
                            <p className="text-base md:text-lg text-gray-700 dark:text-slate-300 leading-relaxed">
                                Over the past decade I have built and led engineering groups across the US, Europe, and India, taking products from early architecture sketches to production scale. My background is hands-on backend and distributed systems work. Lately, most of my energy goes into getting AI features past the demo stage: multi-agent workflows, LLM routing and cost controls, automated evaluation suites, and the cloud and developer platforms that keep releases predictable.
                            </p>
                            <p className="text-base md:text-lg text-gray-700 dark:text-slate-300 leading-relaxed">
                                Good engineering only counts when customers feel it and the business numbers back it up. I like working closely with product managers, engineers, and executives to cut through complexity, keep technical debt manageable, and ship software teams are proud to run at 3 a.m.
                            </p>
                        </div>

                        <div className="relative z-10 mt-8 pt-6 border-t border-gray-200/80 dark:border-white/10 flex flex-wrap items-center justify-between gap-4 text-sm text-gray-600 dark:text-slate-400">
                            <div className="flex items-center gap-2 font-medium text-gray-800 dark:text-slate-200">
                                <span className="w-2 h-2 rounded-full bg-teal-400" />
                                Currently at microDrive
                            </div>
                            <div className="flex items-center gap-1.5 font-mono text-xs">
                                <MapPin className="w-3.5 h-3.5 text-blue-500" />
                                Tampa, FL · Global Remote
                            </div>
                        </div>
                    </motion.div>

                    {/* Grouped Capability Bento Cards */}
                    <div className="lg:col-span-5 flex flex-col gap-5">
                        {pillars.map((pillar, idx) => {
                            const Icon = pillar.icon;
                            return (
                                <motion.div
                                    key={pillar.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.45, delay: idx * 0.08 }}
                                    onMouseMove={handleSpotlightMove}
                                    className="spotlight-card relative bg-white dark:bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-gray-200/80 dark:border-white/10 shadow-sm flex-1 overflow-hidden"
                                >
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className={`p-2 rounded-xl border ${pillar.accent}`}>
                                                <Icon className="w-4 h-4" />
                                            </div>
                                            <h3 className="text-base font-bold text-gray-900 dark:text-white tracking-tight">
                                                {pillar.title}
                                            </h3>
                                        </div>
                                        <div className="flex flex-wrap gap-1.5">
                                            {pillar.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-2.5 py-1 bg-gray-100 dark:bg-slate-900/70 rounded-lg text-xs font-medium text-gray-700 dark:text-slate-300 border border-gray-200/80 dark:border-white/10"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
