import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
    return (
        <section id="education" className="py-20 bg-white dark:bg-slate-900 text-gray-900 dark:text-white flex flex-col justify-center items-center px-4 relative">
            <div className="max-w-7xl w-full">
                <motion.h2
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold mb-12 border-l-4 border-blue-500 pl-4"
                >
                    Education<span className="text-blue-500">.</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-slate-700/50 backdrop-blur-sm"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                            <span className="bg-blue-500/20 p-2 rounded-lg mr-3 text-blue-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                </svg>
                            </span>
                            Academic Background
                        </h3>
                        <div className="space-y-8">
                            <div className="relative pl-6 border-l-2 border-gray-300 dark:border-slate-700 pb-2">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                                <h4 className="font-bold text-gray-900 dark:text-white text-xl">Master of Science (MS)</h4>
                                <p className="text-teal-400 font-medium">Computer Science</p>
                                <p className="text-gray-600 dark:text-slate-400 text-sm mt-1">Illinois Institute of Technology</p>
                            </div>
                            <div className="relative pl-6 border-l-2 border-gray-300 dark:border-slate-700 pb-2">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-teal-500"></div>
                                <h4 className="font-bold text-gray-900 dark:text-white text-xl">Bachelor of Technology (BTech)</h4>
                                <p className="text-teal-400 font-medium">Information Technology</p>
                                <p className="text-gray-600 dark:text-slate-400 text-sm mt-1">Jawaharlal Nehru Technological University</p>
                            </div>
                        </div>

                        <div className="bg-gray-100 dark:bg-slate-700/30 p-6 rounded-xl border border-gray-300 dark:border-slate-600/30 mt-8">
                            <h4 className="font-bold text-teal-400 mb-3 block">Specialized Coursework</h4>
                            <p className="text-sm text-gray-700 dark:text-slate-300 leading-relaxed">
                                Advanced Data Structures, Distributed Systems, Cloud Computing, Enterprise Web Development, Machine Learning, Operating System Design, Software Architecture, Software Project Management.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-slate-700/50 backdrop-blur-sm flex flex-col"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                            <span className="bg-teal-500/20 p-2 rounded-lg mr-3 text-teal-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </span>
                            Volunteering
                        </h3>
                        <div className="bg-gray-100 dark:bg-slate-700/30 p-6 rounded-xl border border-gray-300 dark:border-slate-600/30 hover:border-teal-500/30 transition-colors">
                            <h4 className="font-bold text-gray-900 dark:text-white text-lg">YouthBuild USA</h4>
                            <p className="text-gray-700 dark:text-slate-300 mt-2">Education Support</p>
                            <p className="text-gray-600 dark:text-slate-400 text-sm mt-4 leading-relaxed">
                                Supporting education initiatives to help young people unleash their intelligence and positive energy to transform their lives and rebuild their communities.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;
