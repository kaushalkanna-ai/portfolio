import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import { ArrowLeft, ArrowRight, Target, Zap, Calendar, ZoomIn, X } from 'lucide-react';
import Button from '../components/Button';
import SEO from '../components/SEO';
import { trackProjectView } from '../components/Analytics';

const CaseStudy = () => {
    const { slug } = useParams();
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const projectIndex = projects.findIndex(p => p.slug === slug);
    const project = projects[projectIndex];

    const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : projects[0];

    useEffect(() => {
        window.scrollTo(0, 0);
        setIsLightboxOpen(false);
        if (project) {
            trackProjectView(slug);
        }
    }, [slug, project]);

    useEffect(() => {
        if (!isLightboxOpen) return;
        const onKeyDown = (e) => {
            if (e.key === 'Escape') setIsLightboxOpen(false);
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [isLightboxOpen]);

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
            <section className="relative py-20 px-4 overflow-hidden min-h-[55vh] flex flex-col justify-center">
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
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight"
                    >
                        {project.title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.5 }}
                        className="text-xl md:text-2xl text-gray-600 dark:text-slate-300 mb-10 font-light max-w-3xl leading-relaxed"
                    >
                        {project.description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 }}
                        className="flex flex-wrap gap-2.5"
                    >
                        {project.tech.map(t => (
                            <span key={t} className="px-3.5 py-1.5 bg-white/70 dark:bg-white/5 backdrop-blur-sm rounded-full text-xs font-mono font-medium border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-200">
                                {t}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </section>

            <div className="max-w-5xl mx-auto px-4 py-16 grid gap-16">
                {/* Key Metrics Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gray-50 dark:bg-slate-800/50 p-7 rounded-2xl border border-gray-200/70 dark:border-white/10">
                        <Target className="w-7 h-7 text-blue-500 mb-4" />
                        <h2 className="text-base font-bold mb-2">The Goal</h2>
                        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{project.goal || "Transform unstructured data into actionable intelligence."}</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-slate-800/50 p-7 rounded-2xl border border-gray-200/70 dark:border-white/10">
                        <Zap className="w-7 h-7 text-teal-500 mb-4" />
                        <h2 className="text-base font-bold mb-2">The Impact</h2>
                        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{project.impact}</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-slate-800/50 p-7 rounded-2xl border border-gray-200/70 dark:border-white/10">
                        <Calendar className="w-7 h-7 text-indigo-500 mb-4" />
                        <h2 className="text-base font-bold mb-2">The Timeline</h2>
                        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{project.timeline || "3 Months Architecture to Production"}</p>
                    </div>
                </div>

                {/* Challenge & Solution */}
                <div className="grid md:grid-cols-2 gap-12">
                    <section>
                        <h2 className="text-2xl md:text-3xl font-bold mb-5 flex items-center">
                            <span className="w-1.5 h-7 bg-red-500 rounded mr-3.5" />
                            The Challenge
                        </h2>
                        <p className="text-base md:text-lg text-gray-700 dark:text-slate-300 leading-relaxed">
                            {project.challenge || "No challenge description available."}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl md:text-3xl font-bold mb-5 flex items-center">
                            <span className="w-1.5 h-7 bg-teal-500 rounded mr-3.5" />
                            The Solution
                        </h2>
                        <p className="text-base md:text-lg text-gray-700 dark:text-slate-300 leading-relaxed">
                            {project.solution || "No solution description available."}
                        </p>
                    </section>
                </div>

                {/* Architecture Diagram with Click-to-Zoom Lightbox */}
                <section>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 border-b border-gray-200 dark:border-white/10 pb-4">
                        <h2 className="text-2xl md:text-3xl font-bold">System Architecture</h2>
                        <span className="text-xs font-mono text-gray-500 dark:text-slate-400 mt-1 md:mt-0">
                            Click diagram to expand
                        </span>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Diagram Image */}
                        <button
                            type="button"
                            onClick={() => setIsLightboxOpen(true)}
                            className="lg:col-span-2 group relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-white/10 bg-white text-left cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-blue-500"
                            aria-label={`Expand ${project.title} architecture diagram`}
                        >
                            <div className="p-4 md:p-8 flex items-center justify-center bg-white h-full min-h-[380px]">
                                <img
                                    src={project.image}
                                    alt={`${project.title} architecture diagram`}
                                    className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.015]"
                                />
                            </div>
                            <span className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 text-white text-xs font-mono opacity-85 group-hover:opacity-100 transition-opacity shadow-md">
                                <ZoomIn className="w-3.5 h-3.5" />
                                Zoom
                            </span>
                        </button>

                        {/* Highlights Sidebar */}
                        <div className="lg:col-span-1 space-y-4">
                            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-500 dark:text-slate-400 mb-3">
                                Core Components
                            </h3>
                            {project.architectureHighlights ? (
                                project.architectureHighlights.map((highlight, idx) => (
                                    <div key={idx} className="bg-gray-50 dark:bg-slate-800/60 p-5 rounded-xl border border-gray-200/70 dark:border-white/10 hover:border-blue-500/30 transition-colors group">
                                        <div className="flex items-center gap-2.5 mb-2">
                                            <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:bg-teal-400 transition-colors" />
                                            <h4 className="font-bold text-gray-900 dark:text-gray-100 text-sm">
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
                </section>

                {/* Results Section */}
                {project.results && (
                    <section className="bg-gradient-to-br from-blue-50 to-teal-50/50 dark:from-slate-800 dark:to-slate-900 p-8 md:p-10 rounded-3xl border border-blue-100 dark:border-white/10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />

                        <h2 className="text-2xl md:text-3xl font-bold mb-8 relative z-10">Key Results &amp; Outcomes</h2>
                        <div className="grid md:grid-cols-3 gap-8 relative z-10">
                            {project.results.map((result, idx) => (
                                <div key={idx} className="flex flex-col">
                                    <span className="text-4xl font-mono font-bold text-blue-500/35 mb-2">0{idx + 1}</span>
                                    <p className="text-base font-medium text-gray-800 dark:text-gray-200 leading-relaxed">
                                        {result}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Navigation Footer */}
                <div className="pt-14 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
                    <Link
                        to="/#impact"
                        className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-medium"
                    >
                        Close &amp; Back to Work
                    </Link>

                    <Link
                        to={`/projects/${nextProject.slug}`}
                        className="group flex items-center gap-4 text-right"
                    >
                        <div className="flex flex-col items-end">
                            <span className="text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-slate-500 mb-1">Next Case Study</span>
                            <span className="text-lg md:text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                                {nextProject.title}
                            </span>
                        </div>
                        <div className="w-11 h-11 rounded-full bg-gray-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shrink-0">
                            <ArrowRight className="w-5 h-5" />
                        </div>
                    </Link>
                </div>
            </div>

            {/* Architecture Diagram Lightbox */}
            <AnimatePresence>
                {isLightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsLightboxOpen(false)}
                        className="fixed inset-0 z-[90] bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
                        role="dialog"
                        aria-modal="true"
                        aria-label={`${project.title} diagram preview`}
                    >
                        <button
                            onClick={() => setIsLightboxOpen(false)}
                            className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                            aria-label="Close diagram zoom"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <motion.div
                            initial={{ scale: 0.94, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.94, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-2xl p-4 sm:p-6 max-w-4xl w-full max-h-[88vh] flex items-center justify-center shadow-2xl cursor-default overflow-auto"
                        >
                            <img
                                src={project.image}
                                alt={`${project.title} architecture diagram enlarged`}
                                className="max-h-[80vh] w-auto object-contain"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CaseStudy;
