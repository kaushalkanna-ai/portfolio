/**
 * Detects device performance capabilities
 * @returns {Object} Performance metrics
 */
export const detectPerformance = () => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isLowEnd = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Check if user has explicitly disabled animations
    const animationsDisabled = localStorage.getItem('disableAnimations') === 'true';

    return {
        isMobile,
        isLowEnd,
        prefersReducedMotion,
        animationsDisabled,
        shouldReduceParticles: isMobile || isLowEnd || prefersReducedMotion || animationsDisabled
    };
};

/**
 * Calculate optimal particle count based on screen size and performance
 * @param {number} width - Canvas width
 * @param {Object} performance - Performance metrics
 * @returns {number} Optimal particle count
 */
export const getOptimalParticleCount = (width, performance) => {
    if (performance.animationsDisabled || performance.prefersReducedMotion) {
        return 0; // No particles if animations disabled
    }

    if (performance.isMobile) {
        return performance.isLowEnd ? 20 : 40;
    }

    if (performance.isLowEnd) {
        return 50;
    }

    // Desktop: scale with screen width, max 100
    return Math.min(Math.floor(width / 15), 100);
};
