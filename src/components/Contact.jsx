import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Copy, Check } from 'lucide-react';
import ContactForm from './ContactForm';

const Contact = () => {
    // ... (keep state for copy button)
    const [copied, setCopied] = useState(false);
    const email = "kaushal.dontula@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
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
                    Have a project in mind or just want to chat? Fill out the form below or shoot me an email directly.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="mb-16"
                >
                    <ContactForm />
                </motion.div>

                {/* Direct Email Fallback */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col items-center gap-4"
                >
                    <span className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-widest font-medium">Or email me directly</span>

                    <div
                        className="flex items-center gap-4 px-6 py-3 bg-white dark:bg-slate-800 rounded-full border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <Mail className="w-5 h-5 text-blue-500" />
                        <span className="font-mono text-lg text-gray-800 dark:text-gray-200 select-all">
                            {email}
                        </span>
                        <div className="h-6 w-px bg-gray-300 dark:bg-slate-600 mx-2" />
                        <button
                            onClick={handleCopy}
                            className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-full transition-colors relative"
                            title="Copy to Clipboard"
                        >
                            <AnimatePresence mode="wait">
                                {copied ? (
                                    <motion.div
                                        key="check"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        exit={{ scale: 0 }}
                                    >
                                        <Check className="w-5 h-5 text-green-500" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="copy"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        exit={{ scale: 0 }}
                                    >
                                        <Copy className="w-5 h-5 text-gray-500 dark:text-gray-400 hover:text-blue-500" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
