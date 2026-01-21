import { render, screen, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Hero from '../Hero';
import { MemoryRouter } from 'react-router-dom';

import { ThemeProvider } from '../../context/ThemeContext';

// Mock react-scroll Link (Hero uses it for "Explore My Work")
vi.mock('react-scroll', () => ({
    Link: ({ children, to }) => <a href={`#${to}`}>{children}</a>
}));

vi.mock('../ParticleBackground', () => ({
    default: () => <div data-testid="particle-bg">Particle Background</div>
}));

vi.mock('framer-motion', () => ({
    motion: {
        span: ({ children, ...props }) => <span {...props}>{children}</span>,
        div: ({ children, ...props }) => <div {...props}>{children}</div>,
        button: ({ children, ...props }) => <button {...props}>{children}</button>,
        a: ({ children, ...props }) => <a {...props}>{children}</a>,
    },
    AnimatePresence: ({ children }) => <>{children}</>
}));

describe('Hero Component', () => {
    it('renders the main headline and subheadline', () => {
        render(
            <ThemeProvider>
                <MemoryRouter>
                    <Hero />
                </MemoryRouter>
            </ThemeProvider>
        );

        expect(screen.getByText(/Kaushal Dontula/i)).toBeInTheDocument();
        expect(screen.getByText(/Senior Engineering/i)).toBeInTheDocument();
    });

    it('renders call-to-action buttons', () => {
        render(
            <ThemeProvider>
                <MemoryRouter>
                    <Hero />
                </MemoryRouter>
            </ThemeProvider>
        );
        expect(screen.getByText(/View My Work/i)).toBeInTheDocument();
        expect(screen.getByText(/View Resume/i)).toBeInTheDocument();
    });


    it('rotates phrases over time', async () => {
        vi.useFakeTimers();
        render(
            <ThemeProvider>
                <MemoryRouter>
                    <Hero />
                </MemoryRouter>
            </ThemeProvider>
        );

        expect(screen.getByText(/Senior Engineering/i)).toBeInTheDocument();

        // Advance time
        await act(async () => {
            vi.advanceTimersByTime(2500);
        });

        // Check next phrase
        expect(screen.getByText(/Architecting Scalable/i)).toBeInTheDocument();

        vi.useRealTimers();
    });
});
