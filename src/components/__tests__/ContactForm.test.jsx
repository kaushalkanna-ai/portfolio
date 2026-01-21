import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import ContactForm from '../ContactForm';
import { ThemeProvider } from '../../context/ThemeContext';

// Mock fetch
const fetchMock = vi.fn();
global.fetch = fetchMock;

describe('ContactForm Component', () => {
    afterEach(() => {
        vi.clearAllMocks();
    });

    it('renders form inputs', () => {
        render(
            <ThemeProvider>
                <ContactForm />
            </ThemeProvider>
        );

        expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Send Message/i })).toBeInTheDocument();
    });

    it('submits form successfully and resets', async () => {
        // Mock successful response
        fetchMock.mockResolvedValueOnce({
            json: async () => ({ success: true })
        });

        render(
            <ThemeProvider>
                <ContactForm />
            </ThemeProvider>
        );

        // Fill out form
        fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John Doe' } });
        fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john@example.com' } });
        fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Hello!' } });

        // Submit
        fireEvent.click(screen.getByRole('button', { name: /Send Message/i }));

        // Check for loading state (optional, might happen too fast)
        expect(screen.getByText(/Sending.../i)).toBeInTheDocument();

        // Check for success message
        await waitFor(() => {
            expect(screen.getByText(/Message Sent!/i)).toBeInTheDocument();
        });

        // Verify fetch call
        expect(fetchMock).toHaveBeenCalledTimes(1);
        expect(fetchMock).toHaveBeenCalledWith(
            "https://api.web3forms.com/submit",
            expect.objectContaining({
                method: "POST"
            })
        );

        // Test Reset
        fireEvent.click(screen.getByText(/Send another message/i));

        // Expect form to be back
        await waitFor(() => {
            expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
        });
    });

    it('handles submission error', async () => {
        // Mock error response
        fetchMock.mockResolvedValueOnce({
            json: async () => ({ success: false, message: "Invalid API Key" })
        });

        render(
            <ThemeProvider>
                <ContactForm />
            </ThemeProvider>
        );

        fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John Doe' } });
        fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john@example.com' } });
        fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Hello!' } });

        fireEvent.click(screen.getByRole('button', { name: /Send Message/i }));

        await waitFor(() => {
            expect(screen.getByText(/Invalid API Key/i)).toBeInTheDocument();
        });
    });
    it('handles network error (catch block)', async () => {
        // Mock network error
        fetchMock.mockRejectedValueOnce(new Error('Network error'));

        render(
            <ThemeProvider>
                <ContactForm />
            </ThemeProvider>
        );

        fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John Doe' } });
        fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john@example.com' } });
        fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Hello!' } });

        fireEvent.click(screen.getByRole('button', { name: /Send Message/i }));

        await waitFor(() => {
            expect(screen.getByText(/Failed to send message/i)).toBeInTheDocument();
        });
    });


});
