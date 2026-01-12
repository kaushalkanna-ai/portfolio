import React, { useEffect, useMemo } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import SEO from '../components/SEO';
import { articles } from '../data/writing';

const BlogPost = () => {
    const { slug } = useParams();

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
        <article className="min-h-screen bg-white dark:bg-slate-900 text-gray-900 dark:text-white pt-24 pb-20">
            <SEO
                title={`${article.title} | Kaushal Dontula`}
                description={article.summary}
                url={`/writing/${article.slug}`}
                type="article"
            />

            <div className="max-w-3xl mx-auto px-4">
                {/* Navigation */}
                <Link
                    to="/#writing"
                    className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-blue-500 mb-8 transition-colors group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Writing
                </Link>

                {/* Header */}
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
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

                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        {article.title}
                    </h1>

                    <div className="flex flex-wrap gap-2">
                        {article.tags.map(tag => (
                            <span
                                key={tag}
                                className="px-3 py-1 bg-gray-100 dark:bg-slate-800 rounded-full text-xs font-medium text-gray-600 dark:text-gray-300"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                </motion.header>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="prose prose-lg dark:prose-invert max-w-none 
                        prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white
                        prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed
                        prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
                        prose-strong:text-gray-900 dark:prose-strong:text-white
                        prose-code:text-blue-600 dark:prose-code:text-blue-400 prose-code:bg-blue-50 dark:prose-code:bg-blue-900/20 prose-code:px-1 prose-code:rounded prose-code:before:content-none prose-code:after:content-none"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                />

                {/* Footer */}
                <div className="mt-16 pt-8 border-t border-gray-100 dark:border-white/10">
                    <p className="text-gray-500 dark:text-gray-400 text-sm italic">
                        Thoughts? Reach out on <a href="https://www.linkedin.com/in/kaushaldontula/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn</a>.
                    </p>
                </div>
            </div>
        </article>
    );
};

export default BlogPost;
