import React, { lazy, Suspense, useEffect, useState, useRef } from 'react';
import { LazyMotion, domAnimation, AnimatePresence, motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import { detectPerformance } from './utils/performanceDetection';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ConsoleWelcome from './components/ConsoleWelcome';
import SEO from './components/SEO';
import Footer from './components/Footer';
import Analytics from './components/Analytics';

const About = lazy(() => import('./components/About'));
const Education = lazy(() => import('./components/Education'));
const Experience = lazy(() => import('./components/Experience'));
const Impact = lazy(() => import('./components/Impact'));
const Contact = lazy(() => import('./components/Contact'));
const Skills = lazy(() => import('./components/Skills'));
const LoadingScreen = lazy(() => import('./components/LoadingScreen'));

const CaseStudy = lazy(() => import('./pages/CaseStudy'));
const Now = lazy(() => import('./pages/Now'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const NotFound = lazy(() => import('./pages/NotFound'));

import Lenis from 'lenis';

const ScrollProgress = () => {
  const progressRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    let requestRunning = false;

    const handleScroll = () => {
      if (!requestRunning && progressRef.current) {
        requestRunning = true;
        requestAnimationFrame(() => {
          if (progressRef.current) {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = totalHeight > 0 ? window.scrollY / totalHeight : 0;
            progressRef.current.style.transform = `scaleX(${progress})`;
          }
          requestRunning = false;
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      lenis.destroy();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={progressRef}
      className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-[60] will-change-transform"
      style={{ transform: 'scaleX(0)' }}
    />
  );
};

const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      let attempts = 0;

      const scrollToElement = () => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          return true;
        }
        return false;
      };

      if (!scrollToElement()) {
        const interval = setInterval(() => {
          attempts++;
          if (scrollToElement() || attempts > 20) {
            clearInterval(interval);
          }
        }, 100);

        return () => clearInterval(interval);
      }
    }
  }, [hash]);

  return (
    <>
      <SEO />
      <Hero />
      <Suspense fallback={<LoadingScreen />}>
        <About />
        <Experience />
        <Skills />
        <Impact />
        <Education />
        <Contact />
      </Suspense>
    </>
  );
};

// Animated Routes wrapper with page transitions
const AnimatedRoutes = () => {
  const location = useLocation();
  const performance = detectPerformance();
  const shouldAnimate = !performance.prefersReducedMotion && !performance.animationsDisabled;

  const pageVariants = {
    initial: shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 },
    animate: { opacity: 1, y: 0 },
    exit: shouldAnimate ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.4
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Home />
          </motion.div>
        } />
        <Route path="/projects/:slug" element={
          <Suspense fallback={<LoadingScreen message="Loading Case Study..." />}>
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
            >
              <CaseStudy />
            </motion.div>
          </Suspense>
        } />
        <Route path="/now" element={
          <Suspense fallback={<LoadingScreen message="Loading..." />}>
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Now />
            </motion.div>
          </Suspense>
        } />
        <Route path="/writing/:slug" element={
          <Suspense fallback={<LoadingScreen message="Loading Article..." />}>
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
            >
              <BlogPost />
            </motion.div>
          </Suspense>
        } />
        <Route path="*" element={
          <Suspense fallback={<LoadingScreen message="Searching..." />}>
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
            >
              <NotFound />
            </motion.div>
          </Suspense>
        } />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <LazyMotion features={domAnimation}>
          <Router>
            <Analytics />
            <ConsoleWelcome />
            <div className="bg-white dark:bg-slate-900 min-h-screen text-gray-900 dark:text-gray-100 transition-colors duration-300">
              <ScrollProgress />

              <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                {/* Optimized Background: Radial Gradients instead of Blur/Mix-Blend */}
                <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 to-transparent animate-pulse max-md:animate-none" />
                <div className="hidden md:block absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-500/20 to-transparent animate-pulse" />
              </div>

              <div className="relative z-10">
                <Navbar />
                <AnimatedRoutes />
                <Footer />
              </div>
            </div>
          </Router>
        </LazyMotion>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
