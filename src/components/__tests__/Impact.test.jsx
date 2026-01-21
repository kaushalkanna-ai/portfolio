import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Impact from '../Impact';
import { MemoryRouter } from 'react-router-dom';

describe('Impact Component', () => {
    it('renders the Impact/Work section', () => {
        render(
            <MemoryRouter>
                <Impact />
            </MemoryRouter>
        );

        expect(screen.getByRole('heading', { name: /Selected Work/i, hidden: true })).toBeInTheDocument();

        // Check for tabs (buttons) - handle multiple buttons (desktop/mobile)
        const engButtons = screen.getAllByRole('button', { name: /Engineering/i });
        expect(engButtons.length).toBeGreaterThan(0);

        const strategyButtons = screen.getAllByRole('button', { name: /Strategy/i });
        expect(strategyButtons.length).toBeGreaterThan(0);
    });

    it('switches between Projects and Writing tabs (Desktop & Mobile)', () => {
        render(
            <MemoryRouter>
                <Impact />
            </MemoryRouter>
        );

        // Get all buttons
        const engButtons = screen.getAllByRole('button', { name: /Engineering/i });
        const stratButtons = screen.getAllByRole('button', { name: /Strategy/i });

        // Click Desktop Strategy
        fireEvent.click(stratButtons[0]);
        expect(stratButtons[0].className).toContain('text-blue-500');

        // Click Desktop Engineering
        fireEvent.click(engButtons[0]);
        expect(engButtons[0].className).toContain('text-blue-500');

        // Click Mobile Strategy
        fireEvent.click(stratButtons[1]);
        expect(stratButtons[1].className).toContain('text-blue-500');

        // Click Mobile Engineering
        fireEvent.click(engButtons[1]);
        expect(engButtons[1].className).toContain('text-blue-500');
    });
});
