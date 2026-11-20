import React, { useEffect, useMemo, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, Clock, Linkedin, CheckCircle2, List } from 'lucide-react';
import SEO from '../components/SEO';
import { articles } from '../data/writing';

const slugifyHeading = (text) =>
    text
        .toLowerCase()
        .replace(/<[^>]+>/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');

const BlogPost = () => {
    const { slug } = useParams();
    const [activeHeading, setActiveHeading] = useState('');
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const articleIndex = useMemo(
        () => articles.findIndex(a => a.slug === slug),
        [slug]
    );
    const article = articleIndex >= 0 ? articles[articleIndex] : null;
    const prevArticle = articleIndex > 0 ? articles[articleIndex - 1] : null;
    const nextArticle = articleIndex >= 0 && articleIndex < articles.length - 1 ? articles[articleIndex + 1] : null;

    // Extract <h2> headings and inject anchor IDs for Table of Contents
    const { processedContent, headings } = useMemo(() => {
        if (!article) return { processedContent: '', headings: [] };
        const extracted = [];
        const updated = article.content.replace(/<h2>(.*?)<\/h2>/gi, (_, inner) => {
            const cleanText = inner.replace(/<[^>]+>/g, '').trim();
            const id = slugifyHeading(cleanText);
            extracted.push({ id, text: cleanText });
            return `<h2 id="${id}">${inner}</h2>`;
        });
        return { processedContent: updated, headings: extracted };
    }, [article]);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (headings.length > 0) setActiveHeading(headings[0].id);
    }, [slug, headings]);

    useEffect(() => {
        if (headings.length === 0) return;

        const handleScroll = () => {
            const offset = 150;
            let current = headings[0].id;
            for (const h of headings) {
                const el = document.getElementById(h.id);
                if (el && el.getBoundingClientRect().top <= offset) {
                    current = h.id;
                }
            }
            setActiveHeading(current);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [headings]);

    if (!article) {
        return <Navigate to="/404" replace />;
    }

    return (
        <article className="min-h-screen bg-white dark:bg-slate-900 text-gray-900 dark:text-white pt-24 pb-20 relative">
            <SEO
                title={article.title}
                description={article.summary}
                url={`/writing/${article.slug}`}
                type="article"
            />

            {/* Reading Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
                style={{ scaleX }}
            />

            <div className="max-w-6xl mx-auto px-4">
                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    {/* Main Article Column */}
                    <div className="lg:col-span-8 lg:col-start-1 max-w-3xl w-full">
                        {/* Navigation */}
                        <Link
                            to="/#impact"
                            state={{ activeTab: 'writing' }}
                            className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-blue-500 mb-8 transition-colors group text-sm"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Back to Writing
                        </Link>

                        {/* Header */}
                        <motion.header
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-10 border-b border-gray-200/80 dark:border-white/10 pb-10"
                        >
                            <div className="flex flex-wrap gap-4 text-xs text-gray-500 dark:text-gray-400 mb-5 font-mono">
                                <div className="flex items-center gap-1.5">
                                    <Calendar className="w-3.5 h-3.5" />
                                    {article.date}
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Clock className="w-3.5 h-3.5" />
                                    {article.readTime}
                                </div>
                            </div>

                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight text-gray-900 dark:text-white">
                                {article.title}
                            </h1>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {article.tags.map(tag => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 rounded-full text-xs font-mono font-medium text-blue-600 dark:text-blue-400"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>

                            <p className="text-lg md:text-xl text-gray-600 dark:text-slate-300 leading-relaxed font-light">
                                {article.summary}
                            </p>
                        </motion.header>

                        {/* Key Takeaways */}
                        {article.keyTakeaways && (
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="bg-gray-50 dark:bg-slate-800/50 rounded-2xl p-6 md:p-8 mb-10 border border-gray-200/70 dark:border-white/10"
                            >
                                <h3 className="text-xs font-mono font-bold mb-4 flex items-center gap-2 uppercase tracking-wider text-gray-900 dark:text-white">
                                    <CheckCircle2 className="w-4 h-4 text-teal-500" />
                                    Key Takeaways
                                </h3>
                                <ul className="space-y-3">
                                    {article.keyTakeaways.map((point, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-gray-700 dark:text-slate-300">
                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
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
                            transition={{ delay: 0.18 }}
                            className="prose prose-lg dark:prose-invert max-w-none
                                prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-headings:scroll-mt-28
                                prose-p:text-gray-700 dark:prose-p:text-slate-300 prose-p:leading-8
                                prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
                                prose-strong:text-gray-900 dark:prose-strong:text-white
                                prose-ul:my-6 prose-li:my-2
                                prose-blockquote:border-l-4 prose-blockquote:border-blue-500/50 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-500 dark:prose-blockquote:text-slate-400
                                prose-code:text-blue-600 dark:prose-code:text-blue-400 prose-code:bg-blue-50 dark:prose-code:bg-blue-900/20 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none"
                            dangerouslySetInnerHTML={{ __html: processedContent }}
                        />

                        {/* Previous / Next Article */}
                        {(prevArticle || nextArticle) && (
                            <div className="mt-14 pt-10 border-t border-gray-200 dark:border-white/10 grid sm:grid-cols-2 gap-4">
                                {prevArticle ? (
                                    <Link
                                        to={`/writing/${prevArticle.slug}`}
                                        className="group p-5 rounded-2xl border border-gray-200/80 dark:border-white/10 hover:border-blue-500/40 bg-gray-50/70 dark:bg-slate-800/40 transition-all"
                                    >
                                        <span className="text-[11px] font-mono uppercase tracking-wider text-gray-500 dark:text-slate-400 flex items-center gap-1 mb-1.5">
                                            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                                            Newer
                                        </span>
                                        <span className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                                            {prevArticle.title}
                                        </span>
                                    </Link>
                                ) : <div />}

                                {nextArticle && (
                                    <Link
                                        to={`/writing/${nextArticle.slug}`}
                                        className="group p-5 rounded-2xl border border-gray-200/80 dark:border-white/10 hover:border-blue-500/40 bg-gray-50/70 dark:bg-slate-800/40 transition-all text-right"
                                    >
                                        <span className="text-[11px] font-mono uppercase tracking-wider text-gray-500 dark:text-slate-400 inline-flex items-center justify-end gap-1 mb-1.5">
                                            Older
                                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                                        </span>
                                        <span className="block text-sm font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                                            {nextArticle.title}
                                        </span>
                                    </Link>
                                )}
                            </div>
                        )}

                        {/* Connect / Share */}
                        <div className="mt-10 pt-10 border-t border-gray-200 dark:border-white/10">
                            <div className="flex flex-col md:flex-row justify-between items-center gap-6 bg-gray-50 dark:bg-slate-800/50 p-7 rounded-2xl border border-gray-200/70 dark:border-white/10">
                                <div className="text-center md:text-left">
                                    <h3 className="text-lg font-bold mb-1">Enjoyed this perspective?</h3>
                                    <p className="text-sm text-gray-600 dark:text-slate-400">
                                        Let's talk engineering leadership and product strategy.
                                    </p>
                                </div>
                                <a
                                    href="https://www.linkedin.com/in/kaushaldontula/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-5 py-2.5 bg-[#0077b5] text-white rounded-xl text-sm font-medium hover:bg-[#006396] transition-colors shrink-0"
                                >
                                    <Linkedin className="w-4 h-4" />
                                    Connect on LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Sticky Desktop Table of Contents */}
                    {headings.length > 0 && (
                        <aside className="hidden lg:block lg:col-span-4 sticky top-28">
                            <div className="bg-gray-50/80 dark:bg-slate-800/40 rounded-2xl p-6 border border-gray-200/70 dark:border-white/10">
                                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-gray-500 dark:text-slate-400 mb-4">
                                    <List className="w-3.5 h-3.5 text-blue-500" />
                                    On This Page
                                </div>
                                <nav aria-label="Table of contents">
                                    <ul className="space-y-2.5 border-l border-gray-200 dark:border-white/10">
                                        {headings.map((h) => {
                                            const active = activeHeading === h.id;
                                            return (
                                                <li key={h.id}>
                                                    <a
                                                        href={`#${h.id}`}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            const el = document.getElementById(h.id);
                                                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                                                        }}
                                                        className={`block pl-4 -ml-px border-l-2 text-sm transition-colors ${
                                                            active
                                                                ? 'border-blue-500 text-blue-600 dark:text-blue-400 font-semibold'
                                                                : 'border-transparent text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white'
                                                        }`}
                                                    >
                                                        {h.text}
                                                    </a>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </nav>
                            </div>
                        </aside>
                    )}
                </div>
            </div>
        </article>
    );
};

export default BlogPost;
