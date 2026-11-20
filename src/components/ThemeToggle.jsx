import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    const [pulseKey, setPulseKey] = useState(0);
    const isDark = theme === 'dark';

    const handleClick = () => {
        setPulseKey((prev) => prev + 1);
        toggleTheme();
    };

    return (
        <motion.button
            type="button"
            onClick={handleClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.92 }}
            className="theme-toggle relative w-9 h-9 rounded-full bg-gray-100/90 dark:bg-slate-800/80 hover:bg-gray-200/80 dark:hover:bg-slate-700/80 border border-gray-200/90 dark:border-white/10 hover:border-blue-500/50 dark:hover:border-blue-400/50 text-slate-900 dark:text-slate-100 transition-colors duration-200 flex items-center justify-center cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        >
            {/* Subtle expanding ring pulse on toggle */}
            <AnimatePresence>
                {pulseKey > 0 && (
                    <motion.span
                        key={pulseKey}
                        initial={{ scale: 0.85, opacity: 0.55 }}
                        animate={{ scale: 1.55, opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.45, ease: 'easeOut' }}
                        className="pointer-events-none absolute inset-0 rounded-full border border-blue-500/50 dark:border-teal-400/50"
                    />
                )}
            </AnimatePresence>

            {/* Swiss / Linear-style Minimalist Split Contrast Dial */}
            <motion.svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                initial={false}
                animate={{ rotate: isDark ? 180 : 0 }}
                transition={{ type: 'spring', stiffness: 360, damping: 24 }}
                className="theme-icon"
            >
                <circle
                    cx="12"
                    cy="12"
                    r="8.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                />
                <path
                    d="M12 3.5A8.5 8.5 0 0 0 12 20.5V3.5Z"
                    fill="currentColor"
                />
            </motion.svg>
        </motion.button>
    );
};

export default ThemeToggle;
