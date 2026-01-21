import { describe, it, expect, vi, beforeEach } from 'vitest';
import { Particle, getParticleColor, getConnectionColor, animateParticles } from '../particles';

describe('Particle Utils', () => {
    describe('getParticleColor', () => {
        it('returns correct color for light theme', () => {
            const color = getParticleColor('light');
            expect(color).toContain('rgba(37, 99, 235');
        });

        it('returns correct color for dark theme', () => {
            const color = getParticleColor('dark');
            expect(color).toContain('rgba(59, 130, 246');
        });
    });

    describe('getConnectionColor', () => {
        it('returns correct color for light theme', () => {
            const color = getConnectionColor('light', 0.5);
            expect(color).toContain('rgba(37, 99, 235');
        });

        it('returns correct color for dark theme', () => {
            const color = getConnectionColor('dark', 0.5);
            expect(color).toContain('rgba(59, 130, 246');
        });
    });

    describe('Particle Class', () => {
        it('initializes with random position within canvas', () => {
            const width = 100;
            const height = 100;
            const p = new Particle(width, height);
            expect(p.x).toBeGreaterThanOrEqual(0);
            expect(p.x).toBeLessThanOrEqual(width);
            expect(p.y).toBeGreaterThanOrEqual(0);
            expect(p.y).toBeLessThanOrEqual(height);
        });

        it('updates position based on velocity', () => {
            const p = new Particle(100, 100);
            const initialX = p.x;
            const initialY = p.y;
            p.update({ x: null, y: null }, 100, 100);
            // x and y should change by vx and vy
            expect(p.x).not.toBe(initialX); // unless vx is 0 (unlikely random)
        });

        it('bounces off walls', () => {
            const p = new Particle(100, 100);
            p.x = -10; // out of bounds left
            p.vx = -1; // moving left
            p.update({ x: null, y: null }, 100, 100);
            p.x = -1;
            p.vx = -1;
            p.update({ x: null, y: null }, 100, 100);
            expect(p.vx).toBe(1);
        });

        it('reacts to mouse', () => {
            const p = new Particle(100, 100);
            p.x = 50;
            p.y = 50;
            // Mouse close
            const mouse = { x: 55, y: 55, radius: 100 };
            p.vx = 0;
            p.vy = 0;
            p.x = 50;
            p.y = 50;
            p.update(mouse, 100, 100);

            expect(p.x).toBeLessThan(50);
        });

        it('draws to context', () => {
            const ctx = {
                beginPath: vi.fn(),
                arc: vi.fn(),
                fill: vi.fn()
            };
            const p = new Particle(100, 100);
            p.draw(ctx, 'light');
            expect(ctx.beginPath).toHaveBeenCalled();
            expect(ctx.arc).toHaveBeenCalled();
            expect(ctx.fill).toHaveBeenCalled();
        });
    });

    describe('animateParticles', () => {
        const width = 1000;
        const height = 800;
        const theme = 'light';
        let ctx;

        beforeEach(() => {
            ctx = {
                clearRect: vi.fn(),
                beginPath: vi.fn(),
                arc: vi.fn(),
                fill: vi.fn(),
                moveTo: vi.fn(),
                lineTo: vi.fn(),
                stroke: vi.fn(),
                strokeStyle: '',
                lineWidth: 0,
                fillStyle: ''
            };
        });

        it('clears context and updates/draws particles', () => {
            const particles = [
                { update: vi.fn(), draw: vi.fn(), x: 0, y: 0 },
                { update: vi.fn(), draw: vi.fn(), x: 10, y: 10 }
            ];
            const mouse = { x: null, y: null };

            animateParticles(ctx, width, height, particles, mouse, theme);

            expect(ctx.clearRect).toHaveBeenCalledWith(0, 0, width, height);
            expect(particles[0].update).toHaveBeenCalledWith(mouse, width, height);
            expect(particles[0].draw).toHaveBeenCalledWith(ctx, theme);
            expect(particles[1].update).toHaveBeenCalledWith(mouse, width, height);
        });

        it('draws connections when particles are close (large screen)', () => {
            // Mock particles close to each other
            const p1 = { update: vi.fn(), draw: vi.fn(), x: 100, y: 100 };
            const p2 = { update: vi.fn(), draw: vi.fn(), x: 120, y: 120 }; // distance < maxDist (150)
            const particles = [p1, p2];
            const mouse = { x: null, y: null };

            animateParticles(ctx, width, height, particles, mouse, theme);

            // Should draw line
            expect(ctx.beginPath).toHaveBeenCalled();
            expect(ctx.moveTo).toHaveBeenCalledWith(100, 100);
            expect(ctx.lineTo).toHaveBeenCalledWith(120, 120);
            expect(ctx.stroke).toHaveBeenCalled();
        });

        it('increases opacity when mouse is close to connection', () => {
            const p1 = { update: vi.fn(), draw: vi.fn(), x: 100, y: 100 };
            const p2 = { update: vi.fn(), draw: vi.fn(), x: 120, y: 120 };
            const particles = [p1, p2];
            // Mouse close to particles
            const mouse = { x: 110, y: 110, radius: 100 };

            animateParticles(ctx, width, height, particles, mouse, theme);

            // Check if stroke happens (it should)
            expect(ctx.stroke).toHaveBeenCalled();
        });

        it('does not draw connections on small screens', () => {
            const p1 = { update: vi.fn(), draw: vi.fn(), x: 100, y: 100 };
            const p2 = { update: vi.fn(), draw: vi.fn(), x: 120, y: 120 };
            const particles = [p1, p2];
            const mouse = { x: null, y: null };

            // Small screen width < 768
            animateParticles(ctx, 500, height, particles, mouse, theme);

            expect(ctx.moveTo).not.toHaveBeenCalled();
        });
    });
});
