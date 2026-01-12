import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const ParticleBackground = () => {
    const canvasRef = useRef(null);
    const { theme } = useTheme();
    const themeRef = useRef(theme);

    // Update theme ref without triggering re-initialization
    useEffect(() => {
        themeRef.current = theme;
    }, [theme]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];
        let mouse = { x: null, y: null, radius: 150 };

        const getParticleColor = () => {
            if (themeRef.current === 'light') {
                return `rgba(37, 99, 235, ${Math.random() * 0.5 + 0.3})`;
            }
            return `rgba(59, 130, 246, ${Math.random() * 0.4 + 0.5})`;
        };


        const getConnectionColor = (opacity) => {
            if (themeRef.current === 'light') {
                return `rgba(37, 99, 235, ${Math.min(opacity, 0.6)})`;
            }
            return `rgba(59, 130, 246, ${Math.min(opacity, 1.0)})`;
        };

        const isMobile = window.innerWidth < 768;

        const handleMouseMove = (event) => {
            if (isMobile) return;
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




        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2 + 1;
                this.baseX = this.x;
                this.baseY = this.y;
                this.density = (Math.random() * 30) + 1;
                this.color = null; // Will be set in draw/update
            }

            update() {
                if (mouse.x != null) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < mouse.radius) {
                        let forceDirectionX = dx / distance;
                        let forceDirectionY = dy / distance;
                        let maxDistance = mouse.radius;
                        let force = (maxDistance - distance) / maxDistance;
                        let directionX = forceDirectionX * force * this.density;
                        let directionY = forceDirectionY * force * this.density;
                        this.x -= directionX;
                        this.y -= directionY;
                    }
                }

                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            }

            draw() {
                // Dynamic color based on current theme ref
                if (!this.color || Math.random() > 0.99) {
                    this.color = getParticleColor();
                }
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }

        function initParticles() {
            particles = [];
            let particleCount = Math.min(window.innerWidth / 10, 100);
            if (window.innerWidth < 768) particleCount = 50;

            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
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

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            if (window.innerWidth >= 768) {
                const maxDist = 150;
                // Optimization: Simple nested loop, but could use spatial partitioning if N was larger.
                // For N=100, N^2 is 10000 iterations, which is fine for JS 60fps.
                // Added simple AABB check to avoid expensive sqrt
                for (let i = 0; i < particles.length; i++) {
                    const a = particles[i];
                    for (let j = i + 1; j < particles.length; j++) {
                        const b = particles[j];
                        const dx = a.x - b.x;
                        const dy = a.y - b.y;

                        // Fast AABB check
                        if (Math.abs(dx) > maxDist || Math.abs(dy) > maxDist) continue;

                        const distance = Math.sqrt(dx * dx + dy * dy);

                        if (distance < maxDist) {
                            ctx.beginPath();
                            let opacity = 0.25 * (1 - distance / maxDist);

                            if (mouse.x != null) {
                                // Optimization: Only calc mouse distance if needed
                                const distToMouseX = a.x - mouse.x;
                                const distToMouseY = a.y - mouse.y;
                                if (Math.abs(distToMouseX) < mouse.radius && Math.abs(distToMouseY) < mouse.radius) {
                                    // Refined check
                                    const distToMouse = Math.sqrt(distToMouseX * distToMouseX + distToMouseY * distToMouseY);
                                    if (distToMouse < mouse.radius) {
                                        opacity += 0.3;
                                    }
                                }
                            }

                            ctx.strokeStyle = getConnectionColor(opacity);
                            ctx.lineWidth = 1;
                            ctx.moveTo(a.x, a.y);
                            ctx.lineTo(b.x, b.y);
                            ctx.stroke();
                        }
                    }
                }
            }

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
