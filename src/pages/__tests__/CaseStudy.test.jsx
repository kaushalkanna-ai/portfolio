import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import CaseStudy from '../CaseStudy';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '../../context/ThemeContext';
import { projects } from '../../data/projects';

// Mock SEO component to avoid Helmet issues
vi.mock('../../components/SEO', () => ({
    default: () => null
}));

describe('CaseStudy Page', () => {
    it('renders project details for a valid slug', () => {
        const project = projects[0];

        render(
            <ThemeProvider>
                <MemoryRouter initialEntries={[`/projects/${project.slug}`]}>
                    <Routes>
                        <Route path="/projects/:slug" element={<CaseStudy />} />
                    </Routes>
                </MemoryRouter>
            </ThemeProvider>
        );

        // Check for project title (level 1 heading)
        expect(screen.getByRole('heading', { level: 1, name: project.title })).toBeInTheDocument();

        // Check for project description (maybe partial match)
        // Note: Project descriptions can be long, testing a substring
        expect(screen.getByText(project.description)).toBeInTheDocument();

        // Check for "Back to Portfolio" button
        expect(screen.getByText(/Back to Portfolio/i)).toBeInTheDocument();
    });

    it('renders "Project Not Found" for invalid slug', () => {
        render(
            <ThemeProvider>
                <MemoryRouter initialEntries={['/projects/invalid-slug']}>
                    <Routes>
                        <Route path="/projects/:slug" element={<CaseStudy />} />
                    </Routes>
                </MemoryRouter>
            </ThemeProvider>
        );

        expect(screen.getByText(/Project Not Found/i)).toBeInTheDocument();
        expect(screen.getByText(/Return Home/i)).toBeInTheDocument();
    });
});
