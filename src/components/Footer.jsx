import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll'; // Assuming you use react-scroll for homepage sections
import { Github, Linkedin, Mail, Twitter, ChevronUp, Copy, Check } from 'lucide-react';

const Footer = () => {
    const [copied, setCopied] = useState(false);
    const email = "kaushal.dontula@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const footerLinks = [
        { name: 'About', to: 'about', type: 'scroll' },
        { name: 'Experience', to: 'experience', type: 'scroll' },
        { name: 'Projects', to: 'projects', type: 'scroll' },
        { name: 'Writing', to: 'writing', type: 'scroll' },
        { name: 'Now', to: '/now', type: 'router' },
        { name: 'Education', to: 'education', type: 'scroll' },
    ];

    return (
        <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-white/5 pt-16 pb-8 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute bottom-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -mr-20 -mb-20" />
            </div>

            <div className="max-w-6xl mx-auto px-6 md:px-4 relative z-10">
                <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
                                dontula
                            </span>
                            <span className="text-2xl font-bold text-gray-400">/&gt;</span>
                        </div>
                        <p className="text-gray-600 dark:text-slate-400 mb-8 max-w-sm leading-relaxed">
                            Architecting scalable AI & Cloud solutions.
                            Building high-performance engineering teams and delivering strategic product value.
                        </p>
                        <div className="flex gap-4">

                            <SocialLink href="https://www.linkedin.com/in/kaushaldontula/" icon={Linkedin} label="LinkedIn" />
                            {/* <SocialLink href="https://twitter.com/yourhandle" icon={Twitter} label="Twitter" /> */}
                            <button
                                onClick={handleCopy}
                                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-slate-800 flex items-center justify-center text-gray-600 dark:text-slate-400 hover:bg-blue-500 hover:text-white transition-all duration-300 relative group"
                                aria-label="Copy Email"
                            >
                                <AnimatePresence mode="wait">
                                    {copied ? (
                                        <motion.div
                                            key="check"
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            exit={{ scale: 0 }}
                                        >
                                            <Check className="w-5 h-5" />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="mail"
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            exit={{ scale: 0 }}
                                        >
                                            <Mail className="w-5 h-5" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                    {copied ? 'Copied!' : 'Copy Email'}
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Navigation Column */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Navigation</h4>
                        <ul className="space-y-3">
                            {footerLinks.map(link => (
                                <li key={link.name}>
                                    {link.type === 'scroll' ? (
                                        <Link
                                            to={link.to}
                                            smooth={true}
                                            duration={500}
                                            className="text-gray-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer transition-colors block py-1"
                                        >
                                            {link.name}
                                        </Link>
                                    ) : (
                                        <a
                                            href={link.to}
                                            className="text-gray-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer transition-colors block py-1"
                                        >
                                            {link.name}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Status / Location Column */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Status</h4>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-gray-600 dark:text-slate-400">Open to opportunities</span>
                        </div>
                        <p className="text-gray-600 dark:text-slate-400 text-sm">
                            Based in<br />
                            Tampa, FL
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500 dark:text-slate-500 text-center md:text-left">
                        © {new Date().getFullYear()} Kaushal Dontula. All rights reserved.
                    </p>

                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                        <p className="text-xs text-gray-400 dark:text-slate-600">
                            Built with React 19 & Tailwind v4
                        </p>
                        <button
                            onClick={scrollToTop}
                            className="w-10 h-10 rounded-full bg-gray-100 dark:bg-slate-800 flex items-center justify-center text-gray-500 hover:bg-blue-500 hover:text-white transition-all"
                            aria-label="Scroll to top"
                        >
                            <ChevronUp className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const SocialLink = ({ href, icon: Icon, label }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-gray-100 dark:bg-slate-800 flex items-center justify-center text-gray-600 dark:text-slate-400 hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110"
        aria-label={label}
    >
        <Icon className="w-5 h-5" />
    </a>
);

export default Footer;
