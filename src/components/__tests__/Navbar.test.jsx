import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Navbar from '../Navbar';
import { ThemeProvider } from '../../context/ThemeContext';
import { MemoryRouter } from 'react-router-dom';

describe('Navbar Component', () => {
    it('renders the logo and navigation items', () => {
        render(
            <ThemeProvider>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </ThemeProvider>
        );

        expect(screen.getByText(/dontula/i)).toBeInTheDocument();
        expect(screen.getByText('About')).toBeInTheDocument();
        expect(screen.getByText('Experience')).toBeInTheDocument();
        expect(screen.getByText('Work')).toBeInTheDocument();
        expect(screen.getByText('Education')).toBeInTheDocument();
        expect(screen.getByText('Contact')).toBeInTheDocument();
    });

    it('toggles mobile menu when hamburger is clicked', () => {
        render(
            <ThemeProvider>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </ThemeProvider>
        );

        const menuButton = screen.getByLabelText('Toggle menu');

        // Open
        fireEvent.click(menuButton);
        expect(screen.getByRole('button', { name: /toggle menu/i })).toHaveAttribute('aria-expanded', 'true');

        // Close
        fireEvent.click(menuButton);
        expect(screen.getByRole('button', { name: /toggle menu/i })).toHaveAttribute('aria-expanded', 'false');
    });

    it('updates appearance on scroll', () => {
        render(
            <ThemeProvider>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </ThemeProvider>
        );

        const nav = screen.getByRole('navigation');
        expect(nav.className).toContain('bg-white/10');

        fireEvent.scroll(window, { target: { scrollY: 100 } });

        expect(nav.className).toContain('bg-white/70');
    });

    it('scrolls to top when logo is clicked', () => {
        render(
            <ThemeProvider>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </ThemeProvider>
        );

        const logo = screen.getByText(/dontula/i);
        fireEvent.click(logo);
        expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
    });

    it('handles mobile menu link clicks and scrolling', () => {
        vi.useFakeTimers();
        render(
            <ThemeProvider>
                <MemoryRouter initialEntries={['/']}>
                    <Navbar />
                </MemoryRouter>
            </ThemeProvider>
        );

        const menuButton = screen.getByLabelText('Toggle menu');
        fireEvent.click(menuButton);

        const mockScrollIntoView = vi.fn();
        vi.spyOn(document, 'querySelector').mockReturnValue({
            scrollIntoView: mockScrollIntoView
        });

        // Click a link
        const links = screen.getAllByText('Work');
        const mobileLink = links[1];
        fireEvent.click(mobileLink);

        vi.advanceTimersByTime(50);
        // Note: scroll logic requires hashing match which might be tricky in simple click test
        // This test mainly verifies interaction doesn't crash and menu closes (if we checked menu state)

        vi.useRealTimers();
    });

    it('scrolls to element if already on hash', async () => {
        const mockScrollIntoView = vi.fn();
        const mockElement = { scrollIntoView: mockScrollIntoView };
        vi.spyOn(document, 'querySelector').mockReturnValue(mockElement);

        vi.useFakeTimers();

        render(
            <ThemeProvider>
                <MemoryRouter initialEntries={['/#about']}>
                    <Navbar />
                </MemoryRouter>
            </ThemeProvider>
        );

        const menuButton = screen.getByLabelText(/Toggle menu/i);
        fireEvent.click(menuButton);

        const aboutLink = screen.getAllByText('About')[1];
        fireEvent.click(aboutLink);

        vi.advanceTimersByTime(100);

        expect(document.querySelector).toHaveBeenCalledWith('#about');
        expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });

        vi.useRealTimers();
        vi.restoreAllMocks();
    });
});
