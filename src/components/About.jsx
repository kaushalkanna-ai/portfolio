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
                            As a Senior Vice President of Engineering & Product, I lead the intersection of deep systems architecture and commercial product strategy. I build high-velocity, globally distributed teams that turn ambitious technical bets into durable, market-leading products.
                        </motion.p>
                        <motion.p
                            variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                            className="text-lg text-gray-700 dark:text-slate-300 mb-6 leading-relaxed"
                        >
                            With over a decade of hands-on architecture experience, I specialize in productionizing AI-native systems—from agentic workflows and LLM orchestration with rigorous eval pipelines to high-throughput distributed backends, cloud-native infrastructure, and internal developer platforms.
                        </motion.p>
                        <motion.p
                            variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                            className="text-lg text-gray-700 dark:text-slate-300 mb-6 leading-relaxed"
                        >
                            My focus is moving beyond prototypes to reliable enterprise scale. By connecting platform resilience, AI-accelerated developer experience, and clear business outcomes, I ensure every release compounds both engineering velocity and customer value.
                        </motion.p>



                        <motion.div
                            variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                            className="flex flex-wrap gap-2 mt-8"
                        >
                            {['Technical Leadership', 'Product Strategy', 'Agentic AI', 'LLM Orchestration', 'AI Systems & Evals', 'Platform Engineering', 'Cloud Architecture', 'Distributed Systems', 'Microservices', 'MLOps', 'Golang', 'Python', 'AWS', 'Kafka', 'Redis', 'Kubernetes', 'Docker', 'Global Team Scaling'].map((tech) => (
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
