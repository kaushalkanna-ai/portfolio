import { useEffect, useRef, useState } from 'react';
import { detectPerformance } from '../utils/performanceDetection';

/**
 * Custom hook for scroll-triggered animations using Intersection Observer
 * Respects user preferences for reduced motion and device performance
 * 
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Intersection threshold (0-1)
 * @param {string} options.rootMargin - Root margin for intersection
 * @param {boolean} options.triggerOnce - Only trigger animation once
 * @returns {Object} { ref, inView, shouldAnimate }
 */
export const useScrollAnimation = (options = {}) => {
    const {
        threshold = 0.1,
        rootMargin = '0px',
        triggerOnce = true
    } = options;

    const ref = useRef(null);
    const [inView, setInView] = useState(false);
    const [hasTriggered, setHasTriggered] = useState(false);

    // Check if animations should be enabled
    const performance = detectPerformance();
    const shouldAnimate = !performance.prefersReducedMotion &&
        !performance.animationsDisabled;

    useEffect(() => {
        // Skip if animations disabled or already triggered
        if (!shouldAnimate || (triggerOnce && hasTriggered)) {
            return;
        }

        const element = ref.current;
        if (!element) return;

        // Create Intersection Observer
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    if (triggerOnce) {
                        setHasTriggered(true);
                        observer.unobserve(element);
                    }
                } else if (!triggerOnce) {
                    setInView(false);
                }
            },
            {
                threshold,
                rootMargin
            }
        );

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [shouldAnimate, threshold, rootMargin, triggerOnce, hasTriggered]);

    return {
        ref,
        inView: shouldAnimate ? inView : true, // Always "in view" if animations disabled
        shouldAnimate
    };
};

/**
 * Animation variants for common patterns
 */
export const animationVariants = {
    fadeIn: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.6, ease: 'easeOut' }
        }
    },

    slideUp: {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' }
        }
    },

    slideInLeft: {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: 'easeOut' }
        }
    },

    slideInRight: {
        hidden: { opacity: 0, x: 20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: 'easeOut' }
        }
    },

    scaleIn: {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.4, ease: 'easeOut' }
        }
    },

    staggerContainer: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    },

    staggerItem: {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: 'easeOut' }
        }
    }
};

export default useScrollAnimation;
