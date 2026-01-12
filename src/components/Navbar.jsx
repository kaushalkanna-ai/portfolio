import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import DownloadResumeButton from './DownloadResumeButton';

const NAV_ITEMS = ['About', 'Experience', 'Projects', 'Education', 'Contact'];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getLinkPath = (item) => {
        return `/#${item.toLowerCase()}`;
    };

    return (
        <nav
            className={`navbar-slide-in fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 ${isOpen
                ? 'bg-white/30 dark:bg-slate-900/30 backdrop-blur-[10px]'
                : scrolled
                    ? 'bg-white/70 dark:bg-slate-900/70 backdrop-blur-[10px] shadow-lg shadow-blue-900/10'
                    : 'bg-white/10 dark:bg-slate-900/10 backdrop-blur-[10px]'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
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

                <div className="flex items-center gap-4">
                    <ul className="hidden md:flex space-x-8 items-center">
                        {NAV_ITEMS.map((item) => (
                            <li key={item}>
                                <Link
                                    to={getLinkPath(item)}
                                    className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors uppercase tracking-wide"
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                        <li>
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
                    className="mobile-menu-open md:hidden bg-white/30 dark:bg-slate-900/30 backdrop-blur-[10px] border-t border-gray-200 dark:border-white/10"
                >
                    <ul className="flex flex-col p-6 space-y-4 items-end">
                        {NAV_ITEMS.map((item) => (
                            <li key={item}>
                                <Link
                                    to={getLinkPath(item)}
                                    className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors block"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item}
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
