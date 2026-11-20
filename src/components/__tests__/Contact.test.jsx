import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Contact from '../Contact';
import { ThemeProvider } from '../../context/ThemeContext';

describe('Contact Component', () => {
    it('renders heading, direct email copy button, and LinkedIn link', () => {
        render(
            <ThemeProvider>
                <Contact />
            </ThemeProvider>
        );

        expect(screen.getByText(/Let's Work Together/i)).toBeInTheDocument();
        expect(screen.getByText('kaushal.dontula@gmail.com')).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /Message on LinkedIn/i })).toHaveAttribute(
            'href',
            'https://www.linkedin.com/in/kaushaldontula/'
        );
    });

    it('copies email to clipboard and displays Copied state', async () => {
        const writeText = vi.fn().mockResolvedValue(undefined);
        Object.assign(navigator, {
            clipboard: { writeText }
        });

        render(
            <ThemeProvider>
                <Contact />
            </ThemeProvider>
        );

        const copyButton = screen.getByRole('button', { name: /Copy email address/i });
        fireEvent.click(copyButton);

        expect(writeText).toHaveBeenCalledWith('kaushal.dontula@gmail.com');
        await waitFor(() => {
            expect(screen.getByText(/Copied/i)).toBeInTheDocument();
        });
    });
});
