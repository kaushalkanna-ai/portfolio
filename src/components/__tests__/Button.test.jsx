import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Button from '../Button';
import { BrowserRouter } from 'react-router-dom';

describe('Button Component', () => {
    it('renders with children text', () => {
        render(<Button>Click Me</Button>);
        expect(screen.getByText('Click Me')).toBeInTheDocument();
    });

    it('handles onClick events', () => {
        const handleClick = vi.fn();
        render(<Button onClick={handleClick}>Click Me</Button>);
        fireEvent.click(screen.getByText('Click Me'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('renders as a link when href is provided', () => {
        render(
            <BrowserRouter>
                <Button href="/test">Link Button</Button>
            </BrowserRouter>
        );
        const link = screen.getByRole('link', { name: 'Link Button' });
        expect(link).toHaveAttribute('href', '/test');
    });

    it('renders as internal router Link when href starts with / and no target', () => {
        render(
            <BrowserRouter>
                <Button href="/internal">Internal Link</Button>
            </BrowserRouter>
        );
        // It should still be a link, but verifying it uses Link component is hard directly.
        // However, checking href attribute handles both.
        // The implementation uses motion.create(Link).
        // If we want to verify distinct branch, we just ensure it renders and has href.
        const link = screen.getByRole('link', { name: 'Internal Link' });
        expect(link).toHaveAttribute('href', '/internal');
        // If it was external, it would be motion.a.
        // We can check if it has target attribute (should not).
        expect(link).not.toHaveAttribute('target');
    });
});
