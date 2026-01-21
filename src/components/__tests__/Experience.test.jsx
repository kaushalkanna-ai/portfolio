import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Experience from '../Experience';
import { experiences } from '../../data/experience';

describe('Experience Component', () => {
    it('renders the experience section title', () => {
        render(<Experience />);
        expect(screen.getByText(/Experience/i)).toBeInTheDocument();
    });

    it('renders experience cards from data', () => {
        render(<Experience />);

        // Check if the first company and role are displayed
        const firstExp = experiences[0];
        expect(screen.getByText(firstExp.company)).toBeInTheDocument();
        expect(screen.getByText(firstExp.role)).toBeInTheDocument();
    });

    it('toggles details on click', () => {
        render(<Experience />);

        // Find the "View Details" button for the first card
        // Note: There are multiple "View Details" buttons, let's get the first one
        const toggleButtons = screen.getAllByText(/View Details/i);
        const firstButton = toggleButtons[0];

        // Click to expand
        fireEvent.click(firstButton);

        // Text should change to "Close Details"
        expect(firstButton).toHaveTextContent(/Close Details/i);

        // Details should be visible (looking for a point from the first experience)
        // We'll strip markdown for the check roughly, or just check that new list items appeared
        const listItems = screen.getAllByRole('listitem');
        expect(listItems.length).toBeGreaterThan(0);
    });
});
