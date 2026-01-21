import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import Button from './Button';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error
    const [errorMessage, setErrorMessage] = useState('');

    // TODO: Replace with actual Access Key from User
    const ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        const object = {
            access_key: ACCESS_KEY,
            ...formData
        };
        const json = JSON.stringify(object);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            }).then((res) => res.json());

            if (res.success) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                // Reset success message after 5 seconds
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
                setErrorMessage(res.message || "Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
            setErrorMessage("Failed to send message. Please checking your connection.");
        }
    };

    return (
        <div className="w-full max-w-lg mx-auto bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 dark:border-slate-700 shadow-xl">
            <AnimatePresence mode="wait">
                {status === 'success' ? (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-12"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                            className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4"
                        >
                            <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                        </motion.div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Thanks for reaching out, {formData.name}. I'll get back to you soon.
                        </p>
                        <button
                            onClick={() => setStatus('idle')}
                            className="mt-6 text-sm text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            Send another message
                        </button>
                    </motion.div>
                ) : (
                    <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400 resize-none"
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        {status === 'error' && (
                            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-start gap-3 text-sm text-red-600 dark:text-red-400">
                                <AlertCircle className="w-5 h-5 shrink-0" />
                                <p>{errorMessage}</p>
                            </div>
                        )}

                        <Button
                            type="submit"
                            variant="primary"
                            size="lg"
                            className="w-full justify-center"
                            disabled={status === 'submitting'}
                        >
                            {status === 'submitting' ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <Send className="w-5 h-5 mr-2" />
                                    Send Message
                                </>
                            )}
                        </Button>
                    </motion.form>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ContactForm;
