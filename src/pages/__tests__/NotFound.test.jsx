import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import NotFound from '../NotFound';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '../../context/ThemeContext';

// Mock SEO component
vi.mock('../../components/SEO', () => ({
    default: () => null
}));

// Mock react-helmet-async just in case
vi.mock('react-helmet-async', () => ({
    Helmet: ({ children }) => <>{children}</>,
    HelmetProvider: ({ children }) => <>{children}</>
}));

// Mock ReactGA
vi.mock('react-ga4', () => ({
    default: {
        event: vi.fn(),
        send: vi.fn()
    }
}));

describe('NotFound Page', () => {
    it('renders 404 message', () => {
        render(
            <ThemeProvider>
                <MemoryRouter>
                    <NotFound />
                </MemoryRouter>
            </ThemeProvider>
        );

        expect(screen.getByText(/404/i)).toBeInTheDocument();
        expect(screen.getByText(/Lost in Space/i)).toBeInTheDocument();
    });

    it('renders link to home', () => {
        render(
            <ThemeProvider>
                <MemoryRouter>
                    <NotFound />
                </MemoryRouter>
            </ThemeProvider>
        );

        const homeLink = screen.getByRole('link', { name: /Return to Mission Control/i });
        expect(homeLink).toBeInTheDocument();
        expect(homeLink).toHaveAttribute('href', '/');
    });
});
