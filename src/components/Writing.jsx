import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { articles } from '../data/writing';
import Button from './Button';

const Writing = () => {
    return (
        <section id="writing" className="py-20 bg-gray-50 dark:bg-slate-800/50 text-gray-900 dark:text-white relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Thought Leadership</h2>
                        <p className="text-gray-600 dark:text-slate-400 max-w-xl text-lg">
                            Sharing insights on engineering leadership, system architecture, and the future of tech.
                        </p>
                    </motion.div>

                    <motion.a
                        href="https://medium.com/@kaushaldontula" // Placeholder
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:underline mt-4 md:mt-0"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        View all articles <ArrowRight className="w-4 h-4" />
                    </motion.a>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {articles.map((article, index) => (
                        <motion.article
                            key={article.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-white/5 p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative flex flex-col"
                            whileHover={{ y: -5 }}
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-slate-500">
                                    <Calendar className="w-4 h-4" />
                                    <span>{article.date}</span>
                                    <span className="mx-2">•</span>
                                    <Clock className="w-4 h-4" />
                                    <span>{article.readTime}</span>
                                </div>
                                <div className="p-2 bg-blue-50 dark:bg-blue-500/10 rounded-lg text-blue-500">
                                    <article.icon className="w-5 h-5" />
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-500 transition-colors">
                                <a href={article.link} className="focus:outline-none">
                                    <span className="absolute inset-0" aria-hidden="true" />
                                    {article.title}
                                </a>
                            </h3>

                            <p className="text-gray-600 dark:text-slate-400 mb-6 leading-relaxed flex-grow">
                                {article.summary}
                            </p>

                            <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100 dark:border-white/5">
                                <div className="flex gap-2">
                                    {article.tags.map(tag => (
                                        <span key={tag} className="text-xs font-medium px-2 py-1 bg-gray-100 dark:bg-slate-800 rounded text-gray-600 dark:text-slate-400">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <span className="text-blue-500 font-medium text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                    Read Article <ArrowRight className="w-4 h-4" />
                                </span>
                            </div>
                        </motion.article>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Button href="#" variant="ghost">View all articles</Button>
                </div>
            </div>
        </section>
    );
};

export default Writing;
