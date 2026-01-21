import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation, animationVariants } from '../hooks/useScrollAnimation';

const Skills = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const { ref, inView } = useScrollAnimation({ threshold: 0.2 });

    const skillCategories = {
        'Leadership & Strategy': [
            { name: 'Technical Leadership', level: 95, color: 'from-purple-500 to-pink-500' },
            { name: 'Product Strategy', level: 92, color: 'from-blue-500 to-cyan-500' },
            { name: 'Team Building', level: 90, color: 'from-green-500 to-teal-500' },
            { name: 'Innovation Management', level: 88, color: 'from-orange-500 to-red-500' }
        ],
        'AI & Machine Learning': [
            { name: 'Machine Learning', level: 90, color: 'from-indigo-500 to-purple-500' },
            { name: 'AI & Automation', level: 88, color: 'from-violet-500 to-fuchsia-500' },
            { name: 'NLP', level: 85, color: 'from-pink-500 to-rose-500' },
            { name: 'Deep Learning', level: 82, color: 'from-purple-600 to-pink-600' }
        ],
        'Cloud & Infrastructure': [
            { name: 'AWS', level: 92, color: 'from-orange-500 to-amber-500' },
            { name: 'Cloud Architecture', level: 90, color: 'from-sky-500 to-blue-500' },
            { name: 'Docker', level: 88, color: 'from-blue-600 to-cyan-600' },
            { name: 'Kubernetes', level: 85, color: 'from-blue-500 to-indigo-500' }
        ],
        'Backend & Systems': [
            { name: 'Distributed Systems', level: 92, color: 'from-emerald-500 to-teal-500' },
            { name: 'Microservices', level: 90, color: 'from-teal-500 to-cyan-500' },
            { name: 'Golang', level: 88, color: 'from-cyan-500 to-blue-500' },
            { name: 'Python', level: 90, color: 'from-blue-600 to-indigo-600' },
            { name: 'Django', level: 85, color: 'from-green-600 to-emerald-600' }
        ],
        'Data & Messaging': [
            { name: 'Kafka', level: 88, color: 'from-gray-700 to-gray-900' },
            { name: 'Redis', level: 86, color: 'from-red-500 to-rose-500' },
            { name: 'PostgreSQL', level: 85, color: 'from-blue-700 to-indigo-700' },
            { name: 'MongoDB', level: 82, color: 'from-green-500 to-emerald-500' }
        ]
    };

    const categories = ['all', ...Object.keys(skillCategories)];

    const getFilteredSkills = () => {
        if (selectedCategory === 'all') {
            return Object.entries(skillCategories).flatMap(([category, skills]) =>
                skills.map(skill => ({ ...skill, category }))
            );
        }
        return skillCategories[selectedCategory].map(skill => ({ ...skill, category: selectedCategory }));
    };

    return (
        <section
            ref={ref}
            id="skills"
            className="py-20 bg-white dark:bg-slate-900 text-gray-900 dark:text-white relative overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-4">
                <motion.h2
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={animationVariants.slideUp}
                    className="text-4xl md:text-5xl font-bold mb-4 border-l-4 border-blue-500 pl-4"
                >
                    Technical Expertise<span className="text-blue-500">.</span>
                </motion.h2>

                <motion.p
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={{ ...animationVariants.slideUp, visible: { ...animationVariants.slideUp.visible, transition: { delay: 0.1 } } }}
                    className="text-lg text-gray-600 dark:text-slate-400 mb-12 pl-4"
                >
                    A comprehensive skill set spanning leadership, AI, cloud infrastructure, and scalable systems
                </motion.p>

                {/* Category Filter */}
                <motion.div
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={{ ...animationVariants.fadeIn, visible: { ...animationVariants.fadeIn.visible, transition: { delay: 0.2 } } }}
                    className="flex flex-wrap gap-3 mb-12 justify-center"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${selectedCategory === category
                                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/30'
                                    : 'bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-700'
                                }`}
                        >
                            {category === 'all' ? 'All Skills' : category}
                        </button>
                    ))}
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={animationVariants.staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {getFilteredSkills().map((skill, index) => (
                        <motion.div
                            key={`${skill.category}-${skill.name}`}
                            variants={animationVariants.staggerItem}
                            whileHover={{ scale: 1.03, y: -5 }}
                            className="bg-white dark:bg-slate-800/50 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-slate-700/50 backdrop-blur-sm hover:shadow-xl transition-shadow"
                        >
                            <div className="flex justify-between items-center mb-3">
                                <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                                    {skill.name}
                                </h3>
                                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                                    {skill.level}%
                                </span>
                            </div>

                            {/* Progress Bar */}
                            <div className="relative h-2 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                                    transition={{ duration: 1, delay: index * 0.05, ease: "easeOut" }}
                                    className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full`}
                                />
                            </div>

                            {/* Category Badge */}
                            <div className="mt-3">
                                <span className="text-xs text-gray-500 dark:text-slate-400 font-medium">
                                    {skill.category}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Stats Summary */}
                <motion.div
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={{ ...animationVariants.fadeIn, visible: { ...animationVariants.fadeIn.visible, transition: { delay: 0.5 } } }}
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl border border-blue-200 dark:border-blue-800/30">
                        <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                            {Object.keys(skillCategories).length}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-slate-400 font-medium">
                            Categories
                        </div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-200 dark:border-purple-800/30">
                        <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                            {Object.values(skillCategories).flat().length}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-slate-400 font-medium">
                            Skills
                        </div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-xl border border-green-200 dark:border-green-800/30">
                        <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                            {Math.round(Object.values(skillCategories).flat().reduce((sum, s) => sum + s.level, 0) / Object.values(skillCategories).flat().length)}%
                        </div>
                        <div className="text-sm text-gray-600 dark:text-slate-400 font-medium">
                            Avg Proficiency
                        </div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl border border-orange-200 dark:border-orange-800/30">
                        <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                            15+
                        </div>
                        <div className="text-sm text-gray-600 dark:text-slate-400 font-medium">
                            Years Experience
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
