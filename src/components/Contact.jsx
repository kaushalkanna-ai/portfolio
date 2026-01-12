import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Copy, Check, Eye } from 'lucide-react';
import Button from './Button';

const Contact = () => {
    const [isRevealed, setIsRevealed] = useState(false);
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
                    className="text-4xl md:text-5xl font-bold mb-12"
                >
                    Let's Work Together
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-lg text-gray-700 dark:text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed"
                >
                    Have a project in mind or just want to chat? Feel free to reach out. I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                </motion.p>

                {/* Desktop: Interactive Reveal */}
                <div className="hidden md:flex justify-center items-center h-20">
                    <AnimatePresence mode="wait">
                        {!isRevealed ? (
                            <Button
                                key="reveal-btn"
                                icon={Eye}
                                variant="primary"
                                size="lg"
                                onClick={() => setIsRevealed(true)}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                            >
                                Reveal Contact Info
                            </Button>
                        ) : (
                            <motion.div
                                key="email-card"
                                initial={{ opacity: 0, scale: 0.9, width: 200 }}
                                animate={{ opacity: 1, scale: 1, width: 'auto' }}
                                className="flex items-center gap-4 px-6 py-3 bg-white dark:bg-slate-800 rounded-full border border-gray-200 dark:border-slate-700 shadow-xl relative z-20"
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
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Mobile: Classic Mailto Button */}
                <motion.div
                    className="md:hidden block"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                >
                    <Button
                        href={`mailto:${email}`}
                        variant="primary"
                        size="lg"
                        className="w-full max-w-xs"
                    >
                        Say Hello
                    </Button>
                </motion.div>

                <div className="mt-12">
                    {/* Space for visual balance */}
                </div>
            </div>
        </section>
    );
};

export default Contact;
