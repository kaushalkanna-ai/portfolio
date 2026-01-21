import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence, useTransform } from 'framer-motion';

import { experiences } from '../data/experience';

const ExperienceCard = ({ exp, align }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className={`relative mb-12 md:mb-0 w-full md:w-1/2 ${align === 'left' ? 'md:pr-12 md:text-right md:mr-auto' : 'md:pl-12 md:text-left md:ml-auto'}`}
        >
            {/* Desktop Connector Line */}
            <div className={`hidden md:block absolute top-6 h-[2px] w-12 bg-blue-500/30 ${align === 'left' ? '-right-0' : '-left-0'}`} />


            <motion.div
                layout
                onClick={() => setIsOpen(!isOpen)}
                className={`bg-white dark:bg-slate-800/40 backdrop-blur-md p-6 rounded-2xl hover:bg-gray-50 dark:hover:bg-slate-800/60 transition-all duration-300 border border-gray-200 dark:border-white/5 hover:border-blue-500/50 shadow-xl hover:shadow-blue-500/10 cursor-pointer group relative overflow-hidden`}
            >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className={`flex flex-col ${align === 'left' ? 'md:items-end' : 'md:items-start'}`}>
                    <span className="text-teal-400 font-mono text-xs uppercase tracking-wider mb-2 block">{exp.period}</span>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-400 transition-colors leading-tight">{exp.role}</h3>

                    <div className={`flex flex-wrap items-center gap-3 mb-4 ${align === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                        <h4 className="text-blue-600 dark:text-blue-300 font-medium text-lg">{exp.company}</h4>
                        <div className="flex items-center gap-2 bg-gray-100 dark:bg-slate-900/50 px-3 py-1 rounded-full text-xs text-gray-700 dark:text-slate-300 border border-gray-300 dark:border-slate-700/50">
                            <span className="text-sm">{exp.flag}</span>
                            <span className="font-medium tracking-wide">{exp.location}</span>
                        </div>
                    </div>
                </div>

                <div className={`flex items-center gap-2 text-gray-500 dark:text-slate-500 text-sm group-hover:text-blue-400 transition-colors ${align === 'left' ? 'md:justify-end' : 'md:justify-start'}`}>
                    <span>{isOpen ? 'Close Details' : 'View Details'}</span>
                    <motion.svg
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="list-disc leading-relaxed pl-5 space-y-2 text-gray-700 dark:text-slate-300 text-sm mt-4"
                        >
                            {exp.points.map((point, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2, delay: i * 0.05 }}
                                    dangerouslySetInnerHTML={{ __html: point.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900 dark:text-white font-bold">$1</strong>') }}
                                />
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </motion.div >
        </motion.div >
    );
};

const Experience = () => {
    const containerRef = useRef(null);
    const { scrollY } = useScroll();
    const [layout, setLayout] = useState({ top: 0, height: 0 });

    useEffect(() => {
        const updateLayout = () => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                const scrollTop = window.scrollY || document.documentElement.scrollTop;
                const top = rect.top + scrollTop;
                setLayout({ top, height: rect.height });
            }
        };

        updateLayout();
        window.addEventListener("resize", updateLayout);
        return () => window.removeEventListener("resize", updateLayout);
    }, []);

    const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 0;
    const start = layout.top - viewportHeight;
    const end = layout.top + layout.height - viewportHeight;

    const scrollYProgress = useTransform(scrollY, [start, end], [0, 1]);

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section id="experience" ref={containerRef} className="min-h-screen py-20 bg-white dark:bg-slate-900 text-gray-900 dark:text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-white dark:via-slate-900 to-white dark:to-slate-900 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold mb-12 text-left border-l-4 border-blue-500 pl-4"
                >
                    Experience<span className="text-blue-500">.</span>
                </motion.h2>

                <div className="relative">
                    <div className="absolute left-1/2 top-0 w-1 h-full bg-slate-700/50 hidden md:block -ml-0.5">
                        <motion.div
                            style={{ scaleY, transformOrigin: "top" }}
                            className="w-full h-full bg-gradient-to-b from-blue-500 via-teal-400 to-blue-600"
                        />
                    </div>

                    <div className="absolute left-[20px] top-0 w-1 h-full bg-slate-700/50 md:hidden">
                        <motion.div
                            style={{ scaleY, transformOrigin: "top" }}
                            className="w-full h-full bg-gradient-to-b from-blue-500 to-teal-400"
                        />
                    </div>

                    <div className="flex flex-col gap-12 md:gap-24 pl-12 md:pl-0">
                        {experiences.map((exp, index) => (
                            <div key={index} className="flex justify-center w-full">
                                <ExperienceCard
                                    exp={exp}
                                    align={index % 2 === 0 ? 'left' : 'right'}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
