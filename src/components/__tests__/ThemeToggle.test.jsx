import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ThemeToggle from '../ThemeToggle';
import { ThemeProvider } from '../../context/ThemeContext';

describe('ThemeToggle Component', () => {
    it('toggles theme on click', () => {
        render(
            <ThemeProvider>
                <ThemeToggle />
            </ThemeProvider>
        );

        const button = screen.getByRole('button');

        // Check initial state (default is dark usually, but let's just check aria-label updates)
        const initialLabel = button.getAttribute('aria-label');

        fireEvent.click(button);

        const newLabel = button.getAttribute('aria-label');
        expect(newLabel).not.toBe(initialLabel);
    });
});
