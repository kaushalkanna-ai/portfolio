import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { ArrowLeft, ArrowRight, Target, Zap, Calendar, ExternalLink, Github } from 'lucide-react';
import Button from '../components/Button';
import SEO from '../components/SEO';

const CaseStudy = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const projectIndex = projects.findIndex(p => p.slug === slug);
    const project = projects[projectIndex];

    // Determine Next Project
    const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : projects[0];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
                <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                <Button href="/" variant="primary">Return Home</Button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white dark:bg-slate-900 text-gray-900 dark:text-white pt-20">
            <SEO
                title={project.title}
                description={project.description}
                image={project.image}
                url={`/projects/${project.slug}`}
            />
            {/* Hero Section */}
            <section className="relative py-20 px-4 overflow-hidden min-h-[60vh] flex flex-col justify-center">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 dark:opacity-20`} />

                <div className="max-w-5xl mx-auto w-full relative z-10">
                    <div className="mb-8">
                        <Button
                            href="/#impact"
                            variant="ghost"
                            size="sm"
                            icon={ArrowLeft}
                            className="text-gray-600 dark:text-gray-400"
                        >
                            Back to Portfolio
                        </Button>
                    </div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight"
                    >
                        {project.title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-xl md:text-3xl text-gray-600 dark:text-slate-300 mb-10 font-light max-w-3xl leading-relaxed"
                    >
                        {project.description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap gap-3"
                    >
                        {project.tech.map(t => (
                            <span key={t} className="px-4 py-2 bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-full text-sm font-medium border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-200">
                                {t}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </section>

            <div className="max-w-5xl mx-auto px-4 py-20 grid gap-20">
                {/* Key Metrics Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gray-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-gray-100 dark:border-white/5">
                        <Target className="w-8 h-8 text-blue-500 mb-4" />
                        <h2 className="text-lg font-bold mb-2">The Goal</h2>
                        <p className="text-gray-600 dark:text-slate-400 leading-relaxed">Transform unstructured data into actionable intelligence.</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-gray-100 dark:border-white/5">
                        <Zap className="w-8 h-8 text-yellow-500 mb-4" />
                        <h2 className="text-lg font-bold mb-2">The Impact</h2>
                        <p className="text-gray-600 dark:text-slate-400 leading-relaxed">{project.impact}</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-gray-100 dark:border-white/5">
                        <Calendar className="w-8 h-8 text-green-500 mb-4" />
                        <h2 className="text-lg font-bold mb-2">The Timeline</h2>
                        <p className="text-gray-600 dark:text-slate-400 leading-relaxed">3 Months Architecture to Production</p>
                    </div>
                </div>

                {/* Challenge & Solution */}
                <div className="grid md:grid-cols-2 gap-16">
                    <section>
                        <h2 className="text-3xl font-bold mb-6 flex items-center">
                            <span className="w-2 h-8 bg-red-500 rounded mr-4" />
                            The Challenge
                        </h2>
                        <p className="text-lg text-gray-700 dark:text-slate-300 leading-loose">
                            {project.challenge || "No challenge description available."}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold mb-6 flex items-center">
                            <span className="w-2 h-8 bg-green-500 rounded mr-4" />
                            The Solution
                        </h2>
                        <p className="text-lg text-gray-700 dark:text-slate-300 leading-loose">
                            {project.solution || "No solution description available."}
                        </p>
                    </section>
                </div>

                {/* Architecture Diagram */}
                <section>
                    <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-gray-200 dark:border-white/10 pb-4">
                        <h2 className="text-3xl font-bold">System Architecture</h2>
                        <span className="text-sm text-gray-500 dark:text-slate-400 mt-2 md:mt-0">High-Level Design</span>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Diagram Image */}
                        <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10 bg-white">
                            <div className="p-4 md:p-8 flex items-center justify-center bg-white h-full min-h-[400px]">
                                <img
                                    src={project.image}
                                    alt={`${project.title} architecture diagram`}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>

                        {/* Highlights Sidebar */}
                        <div className="lg:col-span-1 space-y-4">
                            <h3 className="text-lg font-bold uppercase tracking-wider text-gray-500 dark:text-slate-500 mb-4">
                                core components
                            </h3>
                            {project.architectureHighlights ? (
                                project.architectureHighlights.map((highlight, idx) => (
                                    <div key={idx} className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow group">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:bg-cyan-400 transition-colors" />
                                            <h4 className="font-bold text-gray-900 dark:text-gray-100">
                                                {highlight.component}
                                            </h4>
                                        </div>
                                        <p className="text-sm text-gray-600 dark:text-slate-400 leading-relaxed">
                                            {highlight.description}
                                        </p>
                                    </div>
                                ))
                            ) : (
                                <p className="text-sm text-gray-500">No architecture details available.</p>
                            )}
                        </div>
                    </div>
                </section >

                {/* Results Section */}
                {project.results && (
                    <section className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 p-10 rounded-3xl border border-blue-100 dark:border-white/10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />

                        <h2 className="text-3xl font-bold mb-8 relative z-10">Key Results & Outcomes</h2>
                        <div className="grid md:grid-cols-3 gap-8 relative z-10">
                            {project.results.map((result, idx) => (
                                <div key={idx} className="flex flex-col">
                                    <span className="text-5xl font-bold text-blue-500/30 mb-2">0{idx + 1}</span>
                                    <p className="text-lg font-medium text-gray-800 dark:text-gray-200 leading-relaxed">
                                        {result}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Navigation Footer */}
                <div className="pt-20 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
                    <Link
                        to="/#impact"
                        className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-medium"
                    >
                        Close & Back to Work
                    </Link>

                    <Link
                        to={`/projects/${nextProject.slug}`}
                        className="group flex items-center gap-4 text-right"
                    >
                        <div className="flex flex-col items-end">
                            <span className="text-xs uppercase tracking-widest text-gray-500 dark:text-slate-500 mb-1">Next Case Study</span>
                            <span className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                                {nextProject.title}
                            </span>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                            <ArrowRight className="w-5 h-5" />
                        </div>
                    </Link>
                </div>
            </div >
        </div >
    );
};

export default CaseStudy;
