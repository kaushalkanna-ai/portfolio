import React, { useEffect, useMemo } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Tag, Share2, Linkedin, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import { articles } from '../data/writing';

const BlogPost = () => {
    const { slug } = useParams();
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const article = useMemo(() => {
        return articles.find(a => a.slug === slug);
    }, [slug]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!article) {
        return <Navigate to="/404" replace />;
    }

    return (
        <article className="min-h-screen bg-white dark:bg-slate-900 text-gray-900 dark:text-white pt-24 pb-20 relative">
            <SEO
                title={`${article.title} | Kaushal Dontula`}
                description={article.summary}
                url={`/writing/${article.slug}`}
                type="article"
            />

            {/* Reading Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
                style={{ scaleX }}
            />

            <div className="max-w-3xl mx-auto px-4">
                {/* Navigation */}
                <Link
                    to="/#impact"
                    className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-blue-500 mb-8 transition-colors group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Writing
                </Link>

                {/* Header */}
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12 border-b border-gray-100 dark:border-white/10 pb-12"
                >
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6 font-mono">
                        <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {article.date}
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {article.readTime}
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-gray-900 dark:text-white">
                        {article.title}
                    </h1>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {article.tags.map(tag => (
                            <span
                                key={tag}
                                className="px-3 py-1 bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 rounded-full text-xs font-medium text-blue-600 dark:text-blue-400"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>

                    <p className="text-xl md:text-2xl text-gray-600 dark:text-slate-300 leading-relaxed font-light">
                        {article.summary}
                    </p>
                </motion.header>

                {/* Key Takeaways - Only render if available */}
                {article.keyTakeaways && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-gray-50 dark:bg-slate-800/50 rounded-2xl p-8 mb-12 border border-gray-100 dark:border-white/5"
                    >
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2 uppercase tracking-wider text-gray-900 dark:text-white">
                            <CheckCircle2 className="w-5 h-5 text-teal-500" />
                            Executive Summary
                        </h3>
                        <ul className="space-y-3">
                            {article.keyTakeaways.map((point, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-slate-300">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="prose prose-lg dark:prose-invert max-w-none
                        prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-headings:scroll-mt-24
                        prose-p:text-gray-700 dark:prose-p:text-slate-300 prose-p:leading-8
                        prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
                        prose-strong:text-gray-900 dark:prose-strong:text-white
                        prose-ul:my-6 prose-li:my-2
                        prose-blockquote:border-l-4 prose-blockquote:border-blue-500/50 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-500 dark:prose-blockquote:text-slate-400
                        prose-code:text-blue-600 dark:prose-code:text-blue-400 prose-code:bg-blue-50 dark:prose-code:bg-blue-900/20 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                />

                {/* Connect / Share */}
                <div className="mt-16 pt-12 border-t border-gray-200 dark:border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 bg-gray-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-gray-100 dark:border-white/5">
                        <div className="text-center md:text-left">
                            <h3 className="text-xl font-bold mb-2">Enjoyed this perspective?</h3>
                            <p className="text-gray-600 dark:text-slate-400">
                                Let's discuss engineering leadership and product strategy.
                            </p>
                        </div>
                        <a
                            href="https://www.linkedin.com/in/kaushaldontula/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-[#0077b5] text-white rounded-lg font-medium hover:bg-[#006396] transition-colors"
                        >
                            <Linkedin className="w-5 h-5" />
                            Connect on LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default BlogPost;
