import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, Linkedin } from 'lucide-react';
import ContactForm from './ContactForm';

const EMAIL = 'kaushal.dontula@gmail.com';

const Contact = () => {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = async () => {
        try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(EMAIL);
            }
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
        } catch {
            setCopied(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-white dark:bg-slate-900 text-gray-900 dark:text-white flex flex-col justify-center items-center px-4 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 min-w-[500px] h-[500px] bg-blue-600 rounded-full mix-blend-screen filter blur-[100px] opacity-10 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="max-w-4xl w-full text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold mb-6"
                >
                    Let's Work Together
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-lg text-gray-700 dark:text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed"
                >
                    Want to talk engineering leadership, AI architecture, or an advisory role? Send a message below. I read everything myself and usually reply within a couple of days.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="mb-10"
                >
                    <ContactForm />
                </motion.div>

                {/* Direct Contact Options */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.45 }}
                    className="flex flex-col items-center gap-3"
                >
                    <span className="text-xs font-mono uppercase tracking-wider text-gray-500 dark:text-slate-400">
                        Or reach out directly
                    </span>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <button
                            type="button"
                            onClick={handleCopyEmail}
                            className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-gray-100 dark:bg-slate-800/80 hover:bg-blue-50 dark:hover:bg-slate-800 border border-gray-200 dark:border-white/10 hover:border-blue-500/40 text-sm font-medium text-gray-800 dark:text-slate-200 transition-all cursor-pointer"
                            aria-label="Copy email address"
                        >
                            <Mail className="w-4 h-4 text-blue-500" />
                            <span>{EMAIL}</span>
                            <span className={`inline-flex items-center gap-1 pl-2 ml-1 border-l border-gray-300 dark:border-white/10 text-xs font-mono ${copied ? 'text-teal-600 dark:text-teal-400' : 'text-gray-500 dark:text-slate-400'}`}>
                                {copied ? (
                                    <>
                                        <Check className="w-3.5 h-3.5" />
                                        Copied
                                    </>
                                ) : (
                                    <>
                                        <Copy className="w-3.5 h-3.5" />
                                        Copy
                                    </>
                                )}
                            </span>
                        </button>

                        <a
                            href="https://www.linkedin.com/in/kaushaldontula/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gray-100 dark:bg-slate-800/80 hover:bg-blue-50 dark:hover:bg-slate-800 border border-gray-200 dark:border-white/10 hover:border-blue-500/40 text-sm font-medium text-gray-800 dark:text-slate-200 transition-all"
                        >
                            <Linkedin className="w-4 h-4 text-[#0077b5] dark:text-blue-400" />
                            <span>Message on LinkedIn</span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
