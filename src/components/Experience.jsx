import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence, useTransform } from 'framer-motion';
import { ChevronsUpDown } from 'lucide-react';
import { experiences } from '../data/experience';

const handleSpotlightMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
};

const ExperienceCard = ({ exp, align, isOpen, onToggle, isCurrent }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45 }}
            className={`relative mb-8 md:mb-0 w-full md:w-1/2 ${
                align === 'left'
                    ? 'md:pr-12 md:text-right md:mr-auto'
                    : 'md:pl-12 md:text-left md:ml-auto'
            }`}
        >
            {/* Desktop Connector Line & Node */}
            <div className={`hidden md:block absolute top-7 h-[2px] w-12 bg-blue-500/30 ${align === 'left' ? '-right-0' : '-left-0'}`} />
            <div
                className={`hidden md:block absolute top-[23px] w-3 h-3 rounded-full border-2 border-white dark:border-slate-900 ${
                    isCurrent ? 'bg-teal-400 ring-4 ring-teal-400/20' : 'bg-blue-500'
                } ${align === 'left' ? '-right-[6px]' : '-left-[6px]'}`}
            />

            <motion.div
                layout
                onClick={onToggle}
                onMouseMove={handleSpotlightMove}
                className="spotlight-card bg-white dark:bg-slate-800/50 backdrop-blur-md p-6 rounded-2xl hover:bg-gray-50/80 dark:hover:bg-slate-800/70 transition-all duration-300 border border-gray-200/80 dark:border-white/10 hover:border-blue-500/40 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 cursor-pointer group relative overflow-hidden"
            >
                <div className={`relative z-10 flex flex-col ${align === 'left' ? 'md:items-end' : 'md:items-start'}`}>
                    <div className={`flex items-center gap-2 mb-2 ${align === 'left' ? 'md:flex-row-reverse' : ''}`}>
                        <span className="text-teal-600 dark:text-teal-400 font-mono text-xs uppercase tracking-wider">
                            {exp.period}
                        </span>
                        {isCurrent && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-teal-500/15 text-teal-600 dark:text-teal-300 border border-teal-500/20">
                                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                                Current
                            </span>
                        )}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                        {exp.role}
                    </h3>

                    <div className={`flex flex-wrap items-center gap-2.5 mb-4 ${align === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                        <h4 className="text-blue-600 dark:text-blue-300 font-semibold text-base">{exp.company}</h4>
                        <div className="flex items-center gap-1.5 bg-gray-100 dark:bg-slate-900/60 px-2.5 py-0.5 rounded-full text-xs text-gray-700 dark:text-slate-300 border border-gray-200 dark:border-white/10">
                            <span className="text-sm">{exp.flag}</span>
                            <span className="font-medium">{exp.location}</span>
                        </div>
                    </div>
                </div>

                <div className={`relative z-10 flex items-center gap-2 text-gray-500 dark:text-slate-400 text-xs font-mono uppercase tracking-wider group-hover:text-blue-500 transition-colors ${align === 'left' ? 'md:justify-end' : 'md:justify-start'}`}>
                    <span>{isOpen ? 'Close Details' : 'View Details'}</span>
                    <motion.svg
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                </div>

                <AnimatePresence initial={false}>
                    {isOpen && (
                        <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.28, ease: "easeInOut" }}
                            className="relative z-10 text-left list-disc leading-relaxed pl-5 space-y-2 text-gray-700 dark:text-slate-300 text-sm mt-4 pt-4 border-t border-gray-200/70 dark:border-white/10 overflow-hidden"
                        >
                            {exp.points.map((point, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, y: -6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -6 }}
                                    transition={{ duration: 0.18, delay: i * 0.03 }}
                                    dangerouslySetInnerHTML={{
                                        __html: point.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900 dark:text-white font-semibold">$1</strong>')
                                    }}
                                />
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
};

const Experience = () => {
    const containerRef = useRef(null);
    const { scrollY } = useScroll();
    const [layout, setLayout] = useState({ top: 0, height: 0 });
    // Auto-expand current role (index 0) by default for immediate scannability
    const [openIndices, setOpenIndices] = useState(() => new Set([0]));

    const allOpen = openIndices.size === experiences.length;

    const toggleIndex = (idx) => {
        setOpenIndices((prev) => {
            const next = new Set(prev);
            if (next.has(idx)) {
                next.delete(idx);
            } else {
                next.add(idx);
            }
            return next;
        });
    };

    const toggleAll = () => {
        if (allOpen) {
            setOpenIndices(new Set());
        } else {
            setOpenIndices(new Set(experiences.map((_, i) => i)));
        }
    };

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
    }, [openIndices]);

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
        <section id="experience" ref={containerRef} className="min-h-screen py-24 bg-white dark:bg-slate-900 text-gray-900 dark:text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/15 via-white dark:via-slate-900 to-white dark:to-slate-900 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
                    <motion.h2
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-bold text-left border-l-4 border-blue-500 pl-4"
                    >
                        Experience<span className="text-blue-500">.</span>
                    </motion.h2>

                    <button
                        onClick={toggleAll}
                        className="self-start sm:self-auto inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider bg-gray-100 dark:bg-slate-800/80 text-gray-700 dark:text-slate-300 border border-gray-200 dark:border-white/10 hover:border-blue-500/40 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                    >
                        <ChevronsUpDown className="w-3.5 h-3.5" />
                        {allOpen ? 'Collapse All' : 'Expand All'}
                    </button>
                </div>

                <div className="relative">
                    <div className="absolute left-1/2 top-0 w-1 h-full bg-gray-200 dark:bg-slate-700/50 hidden md:block -ml-0.5">
                        <motion.div
                            style={{ scaleY, transformOrigin: "top" }}
                            className="w-full h-full bg-gradient-to-b from-blue-500 via-teal-400 to-blue-600"
                        />
                    </div>

                    <div className="absolute left-[20px] top-0 w-1 h-full bg-gray-200 dark:bg-slate-700/50 md:hidden">
                        <motion.div
                            style={{ scaleY, transformOrigin: "top" }}
                            className="w-full h-full bg-gradient-to-b from-blue-500 to-teal-400"
                        />
                    </div>

                    <div className="flex flex-col gap-10 md:gap-16 pl-12 md:pl-0">
                        {experiences.map((exp, index) => (
                            <div key={`${exp.company}-${exp.period}`} className="flex justify-center w-full">
                                <ExperienceCard
                                    exp={exp}
                                    align={index % 2 === 0 ? 'left' : 'right'}
                                    isOpen={openIndices.has(index)}
                                    onToggle={() => toggleIndex(index)}
                                    isCurrent={index === 0}
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
