import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import DownloadResumeButton from './DownloadResumeButton';

const NAV_ITEMS = [
    { label: 'About', id: 'about', path: '/#about' },
    { label: 'Experience', id: 'experience', path: '/#experience' },
    { label: 'Work', id: 'impact', path: '/#impact' },
    { label: 'Education', id: 'education', path: '/#education' },
    { label: 'Contact', id: 'contact', path: '/#contact' }
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);

            if (location.pathname !== '/') return;

            const sectionIds = ['about', 'experience', 'impact', 'education', 'contact'];
            let current = '';
            const offset = window.innerHeight * 0.35;

            for (const id of sectionIds) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= offset && rect.bottom > 100) {
                        current = id;
                    }
                }
            }
            setActiveSection(current);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    useEffect(() => {
        setIsOpen(false);
        if (location.pathname === '/now') {
            setActiveSection('now');
        } else if (location.pathname.startsWith('/projects') || location.pathname.startsWith('/writing')) {
            setActiveSection('impact');
        } else {
            setActiveSection('');
        }
    }, [location]);

    const isItemActive = (item) => {
        if (item.isRoute) return location.pathname === item.path;
        return activeSection === item.id;
    };

    return (
        <nav
            data-scrolled={scrolled ? 'true' : 'false'}
            className="navbar-slide-in fixed top-0 left-0 w-full z-50 px-3 sm:px-6 pt-3.5"
        >
            <div
                className={`max-w-5xl mx-auto px-5 sm:px-6 py-2.5 flex justify-between items-center rounded-full border transition-[background-color,border-color,box-shadow] duration-300 ease-out ${
                    scrolled || isOpen
                        ? 'bg-white/85 dark:bg-slate-900/85 backdrop-blur-xl border-gray-200/90 dark:border-white/15 shadow-lg shadow-blue-950/10'
                        : 'bg-white/60 dark:bg-slate-900/55 backdrop-blur-lg border-gray-200/60 dark:border-white/10 shadow-sm shadow-blue-950/5'
                }`}
            >
                <Link
                    to="/"
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        setIsOpen(false);
                    }}
                    className="font-bold text-2xl tracking-tighter text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                    dontula<span className="text-blue-500">.</span>
                </Link>

                <div className="flex items-center gap-3 md:gap-4">
                    <ul className="hidden md:flex space-x-1 lg:space-x-2 items-center">
                        {NAV_ITEMS.map((item) => {
                            const active = isItemActive(item);
                            return (
                                <li key={item.label} className="relative">
                                    <Link
                                        to={item.path}
                                        className={`relative px-3 py-1.5 rounded-full text-xs font-medium uppercase tracking-wide transition-colors duration-200 inline-block ${
                                            active
                                                ? 'text-blue-600 dark:text-blue-400 font-semibold'
                                                : 'text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
                                        }`}
                                    >
                                        {active && (
                                            <motion.span
                                                layoutId="navbarActivePill"
                                                transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                                                className="absolute inset-0 rounded-full bg-blue-500/10 border border-blue-500/15"
                                            />
                                        )}
                                        <span className="relative z-10">{item.label}</span>
                                    </Link>
                                </li>
                            );
                        })}
                        <li className="pl-2">
                            <DownloadResumeButton variant="nav" />
                        </li>
                    </ul>

                    <ThemeToggle />

                    <button
                        className="md:hidden text-gray-900 dark:text-white cursor-pointer focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {isOpen && (
                <div
                    id="mobile-menu"
                    className="mobile-menu-open md:hidden max-w-5xl mx-auto mt-2 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-gray-200/80 dark:border-white/10 shadow-xl"
                >
                    <ul className="flex flex-col p-6 space-y-4 items-end">
                        {NAV_ITEMS.map((item) => (
                            <li key={item.label}>
                                <Link
                                    to={item.path}
                                    className={`text-lg font-medium transition-colors block ${
                                        isItemActive(item)
                                            ? 'text-blue-600 dark:text-blue-400 font-semibold'
                                            : 'text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
                                    }`}
                                    onClick={() => {
                                        if (!item.isRoute) {
                                            const targetHash = `#${item.id}`;
                                            if (location.hash === targetHash) {
                                                const element = document.querySelector(targetHash);
                                                if (element) {
                                                    setTimeout(() => {
                                                        element.scrollIntoView({ behavior: 'smooth' });
                                                    }, 50);
                                                }
                                            }
                                        }

                                        setIsOpen(false);
                                        setTimeout(() => setIsOpen(false), 150);
                                    }}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <DownloadResumeButton variant="nav" className="text-lg" />
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
