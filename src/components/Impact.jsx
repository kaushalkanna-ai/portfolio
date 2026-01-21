import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, BookOpen, Code, Terminal } from 'lucide-react';
import { projects } from '../data/projects';
import { articles } from '../data/writing';

const Impact = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(location.state?.activeTab || 'projects');

    const tabVariants = {
        inactive: { borderBottomWidth: "0px", color: "#9ca3af" },
        active: { borderBottomWidth: "2px", color: "#3b82f6", borderColor: "#3b82f6" }
    };

    const contentVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
    };

    return (
        <section id="impact" className="py-20 bg-white dark:bg-slate-900 text-gray-900 dark:text-white relative">
            {/* Shared Background from Experience/Writing */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-white dark:via-slate-900 to-white dark:to-slate-900 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
                    <motion.h2
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-bold border-l-4 border-blue-500 pl-4"
                    >
                        Selected Work<span className="text-blue-500">.</span>
                    </motion.h2>

                    {/* Tab Navigation - Desktop */}
                    <div className="hidden md:flex gap-8 mt-6 md:mt-0 border-b border-gray-200 dark:border-white/10">
                        <button
                            onClick={() => setActiveTab('projects')}
                            className={`pb-3 text-lg font-medium transition-colors flex items-center gap-2 ${activeTab === 'projects' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500 hover:text-gray-800 dark:text-slate-400 dark:hover:text-white'}`}
                        >
                            <Code className="w-5 h-5" />
                            Engineering
                        </button>
                        <button
                            onClick={() => setActiveTab('writing')}
                            className={`pb-3 text-lg font-medium transition-colors flex items-center gap-2 ${activeTab === 'writing' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500 hover:text-gray-800 dark:text-slate-400 dark:hover:text-white'}`}
                        >
                            <Terminal className="w-5 h-5" />
                            Strategy
                        </button>
                    </div>
                </div>

                {/* Tab Navigation - Mobile Sticky */}
                <div className="md:hidden sticky top-16 z-30 -mx-4 px-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-gray-200 dark:border-white/10 mb-8 transition-all duration-300">
                    <div className="flex gap-8">
                        <button
                            onClick={() => setActiveTab('projects')}
                            className={`py-3 text-lg font-medium transition-colors flex items-center gap-2 ${activeTab === 'projects' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500 hover:text-gray-800 dark:text-slate-400 dark:hover:text-white'}`}
                        >
                            <Code className="w-5 h-5" />
                            Engineering
                        </button>
                        <button
                            onClick={() => setActiveTab('writing')}
                            className={`py-3 text-lg font-medium transition-colors flex items-center gap-2 ${activeTab === 'writing' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500 hover:text-gray-800 dark:text-slate-400 dark:hover:text-white'}`}
                        >
                            <Terminal className="w-5 h-5" />
                            Strategy
                        </button>
                    </div>
                </div>

                {/* Content Area */}
                <div className="min-h-[600px]">
                    <AnimatePresence mode="wait">
                        {activeTab === 'projects' ? (
                            <motion.div
                                key="projects"
                                variants={contentVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                            >
                                {projects.map((project, index) => (
                                    <Link to={`/projects/${project.slug}`} key={project.slug} className="block h-full">
                                        <div className="group relative bg-white dark:bg-slate-800/90 md:dark:bg-slate-800/60 md:backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-white/10 md:hover:border-blue-500/30 transition-all duration-300 h-full md:hover:-translate-y-2 flex flex-col">
                                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 md:group-hover:opacity-10 transition-opacity duration-500`} />
                                            <div className="p-6 h-full flex flex-col items-start relative z-10">
                                                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
                                                    {project.title}
                                                </h3>
                                                <p className="text-gray-700 dark:text-slate-300 mb-4 text-sm leading-relaxed flex-grow">
                                                    {project.description}
                                                </p>
                                                <div className="mb-4 text-xs text-blue-600 dark:text-blue-400 font-semibold border-l-2 border-blue-500 pl-3 py-1">
                                                    {project.impact}
                                                </div>
                                                <div className="flex flex-wrap gap-2 mt-auto mb-4">
                                                    {project.tech.slice(0, 4).map(t => (
                                                        <span key={t} className="text-xs font-mono px-2 py-1 bg-gray-100 dark:bg-white/5 rounded border border-gray-300 dark:border-white/10 text-gray-700 dark:text-gray-300">
                                                            {t}
                                                        </span>
                                                    ))}
                                                </div>
                                                <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-bold mt-auto group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                                                    View Case Study
                                                    <motion.div
                                                        className="inline-block ml-1"
                                                        animate={{ x: [0, 4, 0] }}
                                                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                                    >
                                                        <ArrowRight className="w-4 h-4" />
                                                    </motion.div>
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
                                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                            >
                                {articles.map((article, index) => (
                                    <Link to={`/writing/${article.slug}`} key={article.id} className="block h-full">
                                        <div className="group relative bg-white dark:bg-slate-800/90 md:dark:bg-slate-800/60 md:backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-white/10 md:hover:border-blue-500/30 transition-all duration-300 h-full md:hover:-translate-y-2 flex flex-col">
                                            <div className={`absolute inset-0 bg-gradient-to-br ${article.color} opacity-0 md:group-hover:opacity-10 transition-opacity duration-500`} />
                                            <div className="p-6 h-full flex flex-col items-start relative z-10">
                                                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
                                                    {article.title}
                                                </h3>
                                                <p className="text-gray-700 dark:text-slate-300 mb-4 text-sm leading-relaxed flex-grow">
                                                    {article.summary}
                                                </p>
                                                <div className="mb-4 text-xs text-blue-600 dark:text-blue-400 font-semibold border-l-2 border-blue-500 pl-3 py-1">
                                                    Read Time: {article.readTime}
                                                </div>
                                                <div className="flex flex-wrap gap-2 mt-auto mb-4">
                                                    {article.tags.map(t => (
                                                        <span key={t} className="text-xs font-mono px-2 py-1 bg-gray-100 dark:bg-white/5 rounded border border-gray-300 dark:border-white/10 text-gray-700 dark:text-gray-300">
                                                            {t}
                                                        </span>
                                                    ))}
                                                </div>
                                                <div className="flex items-center text-blue-500 text-sm font-semibold mt-auto">
                                                    Read Article <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
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
