import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';
import DownloadResumeButton from './DownloadResumeButton';
import Button from './Button';

const phrases = [
    'Senior Engineering & Product Executive',
    'Architecting Scalable AI & Cloud Solutions',
    'Driving Product Strategy & Innovation',
    'Building High-Performing Global Teams'
];

const Hero = () => {
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="h-screen w-full flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white relative overflow-hidden">

            <div className="absolute inset-0 z-0">
                <ParticleBackground />
            </div>

            <div className="absolute inset-0 bg-white/10 dark:bg-gray-900/10 z-0 pointer-events-none" />

            <div className="z-10 text-center px-4 pointer-events-none">
                <h1 className="hero-title text-6xl md:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400 drop-shadow-lg pointer-events-auto">
                    Kaushal Dontula
                </h1>

                <div className="hero-subtitle text-xl md:text-2xl text-gray-700 dark:text-gray-100 font-light mb-8 drop-shadow-md pointer-events-auto min-h-[60px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={currentPhraseIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="inline-block"
                        >
                            {phrases[currentPhraseIndex]}
                        </motion.span>
                    </AnimatePresence>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="pointer-events-auto flex flex-col sm:flex-row gap-4 items-center justify-center"
                >
                    <Button href="#impact" variant="primary" size="lg">
                        View My Work
                    </Button>
                    <DownloadResumeButton variant="glass" />
                </motion.div>
            </div>

            <div className="scroll-indicator absolute bottom-10 z-10 pointer-events-none">
                <svg className="w-6 h-6 text-gray-700 dark:text-white drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
