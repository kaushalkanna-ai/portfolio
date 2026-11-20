import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Code, Terminal, Calendar, Clock } from 'lucide-react';
import { projects } from '../data/projects';
import { articles } from '../data/writing';

const handleSpotlightMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
};

const Impact = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(location.state?.activeTab || 'projects');

    const contentVariants = {
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
        exit: { opacity: 0, y: -12, transition: { duration: 0.2 } }
    };

    return (
        <section id="impact" className="py-24 bg-white dark:bg-slate-900 text-gray-900 dark:text-white relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-white dark:via-slate-900 to-white dark:to-slate-900 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                    <div>
                        <motion.h2
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -40 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl md:text-5xl font-bold border-l-4 border-blue-500 pl-4"
                        >
                            Selected Work<span className="text-blue-500">.</span>
                        </motion.h2>
                        <p className="text-gray-600 dark:text-slate-400 mt-3 pl-5 text-sm md:text-base">
                            Architecture case studies and notes on engineering leadership, AI systems, and product strategy.
                        </p>
                    </div>

                    {/* Tab Navigation - Desktop Segmented Pill */}
                    <div className="hidden md:inline-flex p-1.5 rounded-2xl bg-gray-100 dark:bg-slate-800/80 border border-gray-200/80 dark:border-white/10">
                        <button
                            onClick={() => setActiveTab('projects')}
                            className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center gap-2 cursor-pointer ${
                                activeTab === 'projects'
                                    ? 'text-blue-500 dark:text-blue-400'
                                    : 'text-gray-600 hover:text-gray-900 dark:text-slate-400 dark:hover:text-white'
                            }`}
                        >
                            {activeTab === 'projects' && (
                                <motion.span
                                    layoutId="impactDesktopTab"
                                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                    className="absolute inset-0 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-gray-200/60 dark:border-white/10"
                                />
                            )}
                            <span className="relative z-10 flex items-center gap-2">
                                <Code className="w-4 h-4" />
                                Engineering
                                <span className="text-xs font-mono px-1.5 py-0.5 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400">
                                    {projects.length}
                                </span>
                            </span>
                        </button>
                        <button
                            onClick={() => setActiveTab('writing')}
                            className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center gap-2 cursor-pointer ${
                                activeTab === 'writing'
                                    ? 'text-blue-500 dark:text-blue-400'
                                    : 'text-gray-600 hover:text-gray-900 dark:text-slate-400 dark:hover:text-white'
                            }`}
                        >
                            {activeTab === 'writing' && (
                                <motion.span
                                    layoutId="impactDesktopTab"
                                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                    className="absolute inset-0 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-gray-200/60 dark:border-white/10"
                                />
                            )}
                            <span className="relative z-10 flex items-center gap-2">
                                <Terminal className="w-4 h-4" />
                                Strategy
                                <span className="text-xs font-mono px-1.5 py-0.5 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400">
                                    {articles.length}
                                </span>
                            </span>
                        </button>
                    </div>
                </div>

                {/* Tab Navigation - Mobile Sticky */}
                <div className="md:hidden sticky top-16 z-30 -mx-4 px-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-gray-200 dark:border-white/10 mb-8 transition-all duration-300">
                    <div className="flex gap-8">
                        <button
                            onClick={() => setActiveTab('projects')}
                            className={`py-3 text-base font-semibold transition-colors flex items-center gap-2 ${
                                activeTab === 'projects'
                                    ? 'text-blue-500 border-b-2 border-blue-500'
                                    : 'text-gray-500 hover:text-gray-800 dark:text-slate-400 dark:hover:text-white'
                            }`}
                        >
                            <Code className="w-4 h-4" />
                            Engineering ({projects.length})
                        </button>
                        <button
                            onClick={() => setActiveTab('writing')}
                            className={`py-3 text-base font-semibold transition-colors flex items-center gap-2 ${
                                activeTab === 'writing'
                                    ? 'text-blue-500 border-b-2 border-blue-500'
                                    : 'text-gray-500 hover:text-gray-800 dark:text-slate-400 dark:hover:text-white'
                            }`}
                        >
                            <Terminal className="w-4 h-4" />
                            Strategy ({articles.length})
                        </button>
                    </div>
                </div>

                {/* Content Area */}
                <div className="min-h-[520px]">
                    <AnimatePresence mode="wait">
                        {activeTab === 'projects' ? (
                            <motion.div
                                key="projects"
                                variants={contentVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                            >
                                {projects.map((project) => (
                                    <Link to={`/projects/${project.slug}`} key={project.slug} className="block h-full">
                                        <div
                                            onMouseMove={handleSpotlightMove}
                                            className="spotlight-card group relative bg-white dark:bg-slate-800/50 md:backdrop-blur-md rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-blue-500/10 border border-gray-200/80 dark:border-white/10 hover:border-blue-500/40 transition-all duration-300 h-full md:hover:-translate-y-1 flex flex-col"
                                        >
                                            <div className={`h-1 w-full bg-gradient-to-r ${project.color} opacity-80 group-hover:opacity-100 transition-opacity`} />
                                            <div className="p-6 h-full flex flex-col items-start relative z-10">
                                                <h3 className="text-lg font-bold mb-2.5 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                                                    {project.title}
                                                </h3>
                                                <p className="text-gray-600 dark:text-slate-300 mb-4 text-sm leading-relaxed flex-grow">
                                                    {project.description}
                                                </p>
                                                <div className="w-full mb-4 text-xs text-blue-700 dark:text-blue-300 font-medium bg-blue-50/80 dark:bg-blue-500/10 border-l-2 border-blue-500 px-3 py-2 rounded-r-lg">
                                                    {project.impact}
                                                </div>
                                                <div className="flex flex-wrap gap-1.5 mt-auto mb-4">
                                                    {project.tech.slice(0, 4).map((t) => (
                                                        <span key={t} className="text-[11px] font-mono px-2 py-0.5 bg-gray-100 dark:bg-slate-900/70 rounded-md border border-gray-200 dark:border-white/10 text-gray-700 dark:text-slate-300">
                                                            {t}
                                                        </span>
                                                    ))}
                                                </div>
                                                <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-semibold mt-auto group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                                                    View Case Study
                                                    <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                key="writing"
                                variants={contentVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                            >
                                {articles.map((article) => (
                                    <Link to={`/writing/${article.slug}`} key={article.id} className="block h-full">
                                        <div
                                            onMouseMove={handleSpotlightMove}
                                            className="spotlight-card group relative bg-white dark:bg-slate-800/50 md:backdrop-blur-md rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-blue-500/10 border border-gray-200/80 dark:border-white/10 hover:border-blue-500/40 transition-all duration-300 h-full md:hover:-translate-y-1 flex flex-col"
                                        >
                                            <div className={`h-1 w-full bg-gradient-to-r ${article.color} opacity-80 group-hover:opacity-100 transition-opacity`} />
                                            <div className="p-6 h-full flex flex-col items-start relative z-10">
                                                <div className="flex items-center gap-3 text-xs font-mono text-gray-500 dark:text-slate-400 mb-3">
                                                    <span className="inline-flex items-center gap-1">
                                                        <Calendar className="w-3.5 h-3.5" />
                                                        {article.date}
                                                    </span>
                                                    <span>·</span>
                                                    <span className="inline-flex items-center gap-1">
                                                        <Clock className="w-3.5 h-3.5" />
                                                        {article.readTime}
                                                    </span>
                                                </div>
                                                <h3 className="text-lg font-bold mb-2.5 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                                                    {article.title}
                                                </h3>
                                                <p className="text-gray-600 dark:text-slate-300 mb-4 text-sm leading-relaxed flex-grow">
                                                    {article.summary}
                                                </p>
                                                <div className="flex flex-wrap gap-1.5 mt-auto mb-4">
                                                    {article.tags.map((t) => (
                                                        <span key={t} className="text-[11px] font-mono px-2 py-0.5 bg-gray-100 dark:bg-slate-900/70 rounded-md border border-gray-200 dark:border-white/10 text-gray-700 dark:text-slate-300">
                                                            {t}
                                                        </span>
                                                    ))}
                                                </div>
                                                <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-semibold mt-auto">
                                                    Read Article
                                                    <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Impact;
