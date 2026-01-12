import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock } from 'lucide-react';
import Button from '../components/Button';
import SEO from '../components/SEO';
import { nowData } from '../data/now';

const Now = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white dark:bg-slate-900 text-gray-900 dark:text-white pt-20">
            <SEO
                title="Now | What I'm Doing"
                description={`What Kaushal Dontula is focused on right now: ${nowData.sections[0].items[0].text}`}
                url="/now"
            />

            <section className="py-20 px-4">
                <div className="max-w-3xl mx-auto">
                    {/* Header */}
                    <div className="mb-12">
                        <Button
                            href="/"
                            variant="ghost"
                            size="sm"
                            icon={ArrowLeft}
                            className="text-gray-600 dark:text-gray-400 mb-8"
                        >
                            Back to Home
                        </Button>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl font-bold mb-6"
                        >
                            Now
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="flex items-center gap-2 text-gray-500 dark:text-slate-400 text-sm font-mono"
                        >
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span>Updated {nowData.updated}</span>
                            <span className="mx-2">•</span>
                            <span>{nowData.location}</span>
                        </motion.div>
                    </div>

                    {/* Content Sections */}
                    <div className="space-y-16">
                        {nowData.sections.map((section, index) => (
                            <motion.div
                                key={section.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + (index * 0.1) }}
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 bg-blue-50 dark:bg-blue-500/10 rounded-lg text-blue-500">
                                        <section.icon className="w-5 h-5" />
                                    </div>
                                    <h2 className="text-2xl font-bold">{section.title}</h2>
                                </div>

                                <ul className="space-y-6 border-l-2 border-gray-100 dark:border-white/5 pl-6 ml-3">
                                    {section.items.map((item, idx) => (
                                        <li key={idx} className="relative">
                                            <span className="absolute -left-[31px] top-2 w-3 h-3 rounded-full bg-gray-200 dark:bg-slate-700 border-2 border-white dark:border-slate-900" />
                                            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-1">
                                                {item.text}
                                            </h3>
                                            {item.subtext && (
                                                <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
                                                    {item.subtext}
                                                </p>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mt-20 pt-10 border-t border-gray-100 dark:border-white/5 text-center text-gray-500 dark:text-slate-500 italic text-sm"
                    >
                        Inspired by <a href="https://nownownow.com/abouthttps://nownownow.com/about" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-500">Derek Sivers</a>.
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Now;
