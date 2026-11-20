import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Experience from '../Experience';
import { experiences } from '../../data/experience';

describe('Experience Component', () => {
    it('renders the experience section title', () => {
        render(<Experience />);
        expect(screen.getByText(/Experience/i)).toBeInTheDocument();
    });

    it('renders experience cards from data with current role expanded by default', () => {
        render(<Experience />);

        const firstExp = experiences[0];
        expect(screen.getByText(firstExp.company)).toBeInTheDocument();
        expect(screen.getByText(firstExp.role)).toBeInTheDocument();
        expect(screen.getByText(/Current/i)).toBeInTheDocument();

        const listItems = screen.getAllByRole('listitem');
        expect(listItems.length).toBeGreaterThan(0);
    });

    it('toggles details on click and supports Expand All / Collapse All', () => {
        render(<Experience />);

        // Second card starts collapsed ("View Details")
        const viewButtons = screen.getAllByText(/View Details/i);
        fireEvent.click(viewButtons[0]);
        expect(viewButtons[0]).toHaveTextContent(/Close Details/i);

        // Expand All opens every role
        const expandAllBtn = screen.getByRole('button', { name: /Expand All/i });
        fireEvent.click(expandAllBtn);
        expect(screen.getByRole('button', { name: /Collapse All/i })).toBeInTheDocument();
    });
});
