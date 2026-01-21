import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Footer from '../Footer';
import { MemoryRouter } from 'react-router-dom';

// Mock react-scroll Link
vi.mock('react-scroll', () => ({
    Link: ({ children, to }) => <a href={`#${to}`}>{children}</a>
}));

describe('Footer Component', () => {
    it('renders the footer logo and links', () => {
        render(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>
        );

        expect(screen.getByText('dontula')).toBeInTheDocument();
        expect(screen.getByText(/Architecting scalable AI & Cloud solutions/i)).toBeInTheDocument();

        // Check for navigation links
        expect(screen.getByText('About')).toBeInTheDocument();
        expect(screen.getByText('Experience')).toBeInTheDocument();

        // Check for "Now" link (should be RouterLink even at root)
        const nowLink = screen.getByText('Now');
        expect(nowLink).toBeInTheDocument();
        expect(nowLink.closest('a')).toHaveAttribute('href', '/now');
    });

    it('renders the copyright year', () => {
        render(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>
        );
        const year = new Date().getFullYear();
        expect(screen.getByText(new RegExp(year.toString()))).toBeInTheDocument();
    });

    it('scrolls to top when button is clicked', () => {
        render(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>
        );

        const scrollBtn = screen.getByLabelText(/Scroll to top/i);
        fireEvent.click(scrollBtn);

        expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
    });
});
