import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { ArrowRight } from 'lucide-react';

const Projects = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section id="projects" className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white px-4 relative">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold mb-12 text-left border-l-4 border-blue-500 pl-4"
                >
                    Featured Projects<span className="text-blue-500">.</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Link to={`/projects/${project.slug}`} key={project.slug} className="block h-full">
                            <motion.div
                                initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                whileInView={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                                transition={isMobile ? { duration: 0 } : { delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true, margin: "-50px" }}
                                className="group relative bg-white dark:bg-slate-800/90 md:dark:bg-slate-800/60 md:backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-white/10 md:hover:border-blue-500/30 md:transition-[transform,border-color,box-shadow] md:duration-300 h-full md:hover:-translate-y-2 z-10 flex flex-col"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 md:group-hover:opacity-10 transition-opacity duration-500`} />

                                <div className="p-6 h-full flex flex-col items-start relative z-10">
                                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white md:group-hover:text-transparent md:group-hover:bg-clip-text md:group-hover:bg-gradient-to-r md:group-hover:from-blue-600 dark:md:group-hover:from-white md:group-hover:to-blue-400 dark:md:group-hover:to-slate-300 transition-colors leading-tight">
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
                                        {project.tech.length > 4 && (
                                            <span className="text-xs font-mono px-2 py-1 text-gray-500 dark:text-gray-400">
                                                +{project.tech.length - 4}
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex items-center text-blue-500 text-sm font-semibold group-hover:text-blue-600 transition-colors mt-auto">
                                        View Case Study <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
