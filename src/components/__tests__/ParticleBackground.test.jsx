import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeAll } from 'vitest';
import ParticleBackground from '../ParticleBackground';
import { ThemeProvider } from '../../context/ThemeContext';

describe('ParticleBackground Component', () => {
    beforeAll(() => {
        // Mock Canvas API
        HTMLCanvasElement.prototype.getContext = vi.fn(() => ({
            clearRect: vi.fn(),
            beginPath: vi.fn(),
            arc: vi.fn(),
            fill: vi.fn(),
            moveTo: vi.fn(),
            lineTo: vi.fn(),
            stroke: vi.fn(),
            closePath: vi.fn(),
            fillStyle: '',
            strokeStyle: '',
            lineWidth: 0,
            globalAlpha: 0
        }));

        // Mock requestAnimationFrame
        global.requestAnimationFrame = vi.fn((cb) => setTimeout(cb, 0));
        global.cancelAnimationFrame = vi.fn((id) => clearTimeout(id));
        global.innerWidth = 1024;
        global.innerHeight = 768;
    });

    it('renders the canvas and handles events', () => {
        const { container } = render(
            <ThemeProvider>
                <ParticleBackground />
            </ThemeProvider>
        );

        const canvas = container.querySelector('canvas');
        expect(canvas).toBeInTheDocument();

        // Simulate resize
        global.innerWidth = 500;
        fireEvent(window, new Event('resize'));

        // Simulate mouse move
        fireEvent.mouseMove(window, { clientX: 100, clientY: 100 });

        // Simulate mouse out
        fireEvent.mouseOut(window);
    });
});
