import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Particle, getConnectionColor, animateParticles } from '../utils/particles';
import { detectPerformance, getOptimalParticleCount } from '../utils/performanceDetection';

const ParticleBackground = () => {
    const canvasRef = useRef(null);
    const { theme } = useTheme();
    const themeRef = useRef(theme);

    useEffect(() => {
        themeRef.current = theme;
    }, [theme]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];
        let mouse = { x: null, y: null, radius: 150 };

        const performance = detectPerformance();
        const isMobile = window.innerWidth < 768;

        const handleMouseMove = (event) => {
            if (isMobile || performance.shouldReduceParticles) return;
            const rect = canvas.getBoundingClientRect();
            mouse.x = event.clientX - rect.left;
            mouse.y = event.clientY - rect.top;
        };

        const handleTouchMove = (event) => {
            return;
        }

        const handleLeave = () => {
            mouse.x = null;
            mouse.y = null;
        }

        function initParticles() {
            particles = [];
            const particleCount = getOptimalParticleCount(window.innerWidth, performance);

            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle(canvas.width, canvas.height));
            }
        };

        let lastFrameTime = 0;
        const targetFPS = 60;
        const frameInterval = 1000 / targetFPS;

        const animate = (currentTime = 0) => {
            if (currentTime - lastFrameTime < frameInterval) {
                animationFrameId = requestAnimationFrame(animate);
                return;
            }
            lastFrameTime = currentTime;

            animateParticles(ctx, canvas.width, canvas.height, particles, mouse, themeRef.current);

            animationFrameId = requestAnimationFrame(animate);
        };

        const resizeCanvas = () => {
            // Mobile Optimization: Ignore resize if width hasn't changed (address bar toggle)
            if (window.innerWidth === canvas.width && window.innerWidth < 768) return;

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            mouse.radius = window.innerWidth < 768 ? 80 : 150;
            initParticles();
        };

        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);
        // Optimization: Removed unused touchmove listener to improve scroll performance
        window.addEventListener('touchend', handleLeave);
        window.addEventListener('mouseout', handleLeave);

        // Initial setup
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        mouse.radius = window.innerWidth < 768 ? 80 : 150;
        initParticles();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchend', handleLeave);
            window.removeEventListener('mouseout', handleLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []); // Empty dependency array = Initialize ONCE. Theme updates via ref.

    return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />;
};

export default ParticleBackground;
