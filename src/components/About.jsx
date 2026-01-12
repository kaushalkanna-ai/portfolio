import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col justify-center px-4 relative">
            <div className="max-w-7xl w-full mx-auto">
                <motion.h2
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold mb-12 border-l-4 border-blue-500 pl-4"
                >
                    About Me<span className="text-blue-500">.</span>
                </motion.h2>

                <div className="flex flex-col items-start">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.2
                                }
                            }
                        }}
                        className="pl-6 md:pl-12"
                    >
                        <motion.p
                            variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                            className="text-lg text-gray-700 dark:text-slate-300 mb-6 leading-relaxed"
                        >
                            As a Senior Vice President of Engineering & Product, I lead the convergence of technical excellence and strategic vision. I am passionate about building high-performing, cross-functional teams and fostering a culture of innovation that transforms ambitious concepts into market-defining solutions.
                        </motion.p>
                        <motion.p
                            variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                            className="text-lg text-gray-700 dark:text-slate-300 mb-6 leading-relaxed"
                        >
                            With deep roots in software architecture, I specialize in designing scalable, complex systems and integrating cutting-edge AI technologies. My expertise spans cloud-native infrastructure, intelligent automation, and data-driven product development, ensuring every solution is not just robust, but future-proof.
                        </motion.p>
                        <motion.p
                            variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                            className="text-lg text-gray-700 dark:text-slate-300 mb-6 leading-relaxed"
                        >
                            I bring a proven track record of delivering high-impact products from concept to market leadership. By bridging the gap between engineering execution and business strategy, I ensure that every release not only meets technical standards but also drives tangible value and accelerates growth.
                        </motion.p>



                        <motion.div
                            variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                            className="flex flex-wrap gap-2 mt-8"
                        >
                            {['Technical Leadership', 'Product Strategy', 'AI & Automation', 'Cloud Architecture', 'Distributed Systems', 'Microservices', 'Golang', 'Python', 'Django', 'AWS', 'Machine Learning', 'Kafka', 'Redis', 'Docker', 'Kubernetes', 'Scalable Systems', 'Team Building', 'Innovation Management'].map((tech) => (
                                <span key={tech} className="px-3 py-1 bg-gray-200 dark:bg-slate-800/50 rounded-full text-sm font-semibold text-blue-600 dark:text-blue-300 border border-blue-300 dark:border-blue-500/20">
                                    {tech}
                                </span>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
