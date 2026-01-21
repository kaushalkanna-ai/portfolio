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

        // "About Me" is in a text node, followed by a span. getByText should find it.
        expect(screen.getByText(/About Me/i, { selector: 'h2', hidden: true })).toBeInTheDocument();

        // "Product" appears multiple times. Check that at least one exists.
        const productTexts = screen.getAllByText(/Product/i, { exact: false, hidden: true });
        expect(productTexts.length).toBeGreaterThan(0);
    });

    it('renders tags', () => {
        render(
            <ThemeProvider>
                <About />
            </ThemeProvider>
        );
        // Tags wrapper also has hidden variant
        expect(screen.getByText('Technical Leadership', { hidden: true })).toBeInTheDocument();
    });
});
