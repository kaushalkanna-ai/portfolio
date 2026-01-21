import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import DownloadResumeButton from '../DownloadResumeButton';
import { BrowserRouter } from 'react-router-dom';

describe('DownloadResumeButton Component', () => {
    it('renders with default props', () => {
        render(
            <BrowserRouter>
                <DownloadResumeButton />
            </BrowserRouter>
        );
        const link = screen.getByRole('link', { name: /View Resume/i });
        expect(link).toBeInTheDocument();
        // Default variant primary results in certain classes but we just check presence
    });

    it('renders with nav variant', () => {
        render(
            <BrowserRouter>
                <DownloadResumeButton variant="nav" />
            </BrowserRouter>
        );
        const link = screen.getByRole('link', { name: /Resume/i }); // Text changes to "Resume"
        expect(link).toBeInTheDocument();
    });

    it('renders with glass variant', () => {
        render(
            <BrowserRouter>
                <DownloadResumeButton variant="glass" />
            </BrowserRouter>
        );
        const link = screen.getByRole('link', { name: /View Resume/i });
        expect(link).toBeInTheDocument();
    });
});
