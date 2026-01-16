import React, { lazy, Suspense, useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ConsoleWelcome from './components/ConsoleWelcome';
import SEO from './components/SEO';
import Footer from './components/Footer';

const About = lazy(() => import('./components/About'));
const Education = lazy(() => import('./components/Education'));
const Experience = lazy(() => import('./components/Experience'));
const Impact = lazy(() => import('./components/Impact'));
const Contact = lazy(() => import('./components/Contact'));
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
        <Impact />
        <Education />
        <Contact />
      </Suspense>
    </>
  );
};

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <ConsoleWelcome />
          <div className="bg-white dark:bg-slate-900 min-h-screen text-gray-900 dark:text-gray-100 transition-colors duration-300">
            <ScrollProgress />

            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
              <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-blue-500 rounded-full mix-blend-screen filter blur-[80px] md:blur-[120px] opacity-20 dark:opacity-20 animate-pulse max-md:animate-none" />
              <div className="hidden md:block absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-teal-500 rounded-full mix-blend-screen filter blur-[120px] opacity-20 dark:opacity-20 animate-pulse max-md:animate-none" />
            </div>

            <div className="relative z-10">
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects/:slug" element={
                  <Suspense fallback={<LoadingScreen message="Loading Case Study..." />}>
                    <CaseStudy />
                  </Suspense>
                } />
                <Route path="/now" element={
                  <Suspense fallback={<LoadingScreen message="Loading..." />}>
                    <Now />
                  </Suspense>
                } />
                <Route path="/writing/:slug" element={
                  <Suspense fallback={<LoadingScreen message="Loading Article..." />}>
                    <BlogPost />
                  </Suspense>
                } />
                <Route path="*" element={
                  <Suspense fallback={<LoadingScreen message="Searching..." />}>
                    <NotFound />
                  </Suspense>
                } />
              </Routes>
              <Footer />
            </div>
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
