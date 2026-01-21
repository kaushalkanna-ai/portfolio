import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import About from '../About';
import { ThemeProvider } from '../../context/ThemeContext';

describe('About Component', () => {
    it('renders the About Me section', () => {
        render(
            <ThemeProvider>
                <About />
            </ThemeProvider>
        );

        expect(screen.getByText(/About Me/i, { selector: 'h2', hidden: true })).toBeInTheDocument();

        const productTexts = screen.getAllByText(/Product/i, { exact: false, hidden: true });
        expect(productTexts.length).toBeGreaterThan(0);
    });

    it('renders tags', () => {
        render(
            <ThemeProvider>
                <About />
            </ThemeProvider>
        );
        expect(screen.getByText('Technical Leadership', { hidden: true })).toBeInTheDocument();
    });
});
