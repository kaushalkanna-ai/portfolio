# Kaushal Dontula | SVP Engineering & Product

![Portfolio Banner](https://img.shields.io/badge/Status-Production_Ready-success?style=for-the-badge)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![Tailwind](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=for-the-badge&logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-Fast-646cff?style=for-the-badge&logo=vite)
![Coverage](https://img.shields.io/badge/Coverage-98%25-brightgreen?style=for-the-badge)

> **"Bridging the gap between deeply technical execution and high-level product strategy."**

This repository houses the source code for my personal executive portfolio. It is engineered to be a living dashboard of my work, combining engineering leadership case studies with strategic thought leadership in a unified, high-performance interface.

[**View Live Site →**](https://kaushalkanna-ai.github.io/portfolio/)

---

## ⚡ The Stack

Built with a focus on **performance**, **maintainability**, and **developer experience**.

- **Core:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Routing:** [React Router v7](https://reactrouter.com/)
- **Deployment:** GitHub Pages

---

## 🚀 Key Features

### 1. Unified Impact Dashboard
Moved away from traditional "Projects vs. Blog" silos. The **Selected Work** section features a seamless tabbed interface switching between:
- **Engineering:** Technical execution and architecture diagrams.
- **Strategy:** Thought leadership and organizational design.

### 2. Executive Aesthetic
A clean, minimalist design language that supports Dark Mode out of the box. Features subtle micro-interactions, glassmorphism effects, and a custom particle background without compromising readability.

### 3. Developer Soul
Includes an interactive **Console Welcome** component that greets fellow engineers in the browser's developer tools—a nod to my technical roots.

---

## 🛠️ Local Development

Clone the project and start the development server:

```bash
# Clone the repository
git clone https://github.com/kaushalkanna-ai/portfolio.git

# Install dependencies
npm install

# Start the dev server
npm run dev
```

## 📦 Deployment

The project is configured for seamless deployment to GitHub Pages.

```bash
# Build and Deploy
npm run deploy
```

This command runs the production build (`vite build`) and pushes the `dist` folder to the `gh-pages` branch.

---

## 🧪 Testing

The project maintains **98%+ test coverage** using Vitest and React Testing Library.

### Running Tests

```bash
# Run all tests
npm test

# Run tests with coverage report
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

### Coverage Highlights

- **Overall Coverage:** 98.37% (Lines)
- **Components:** 97.97% average
- **Utilities:** 100% coverage

Key tested areas:
- UI components (Hero, Navbar, Footer, etc.)
- Form validation and submission
- Theme switching
- Particle animation system
- Routing and navigation

---

## 📂 Project Structure

```
src/
├── components/      # Reusable UI components (Hero, Navbar, Impact, Footer)
│   └── __tests__/   # Component unit tests
├── data/            # Content sources (projects.js, writing.js)
├── pages/           # Route views (Home, CaseStudy, BlogPost, Now)
│   └── __tests__/   # Page unit tests
├── utils/           # Utility functions (particles.js)
│   └── __tests__/   # Utility unit tests
├── context/         # Global state (ThemeContext)
└── test/            # Test setup and configuration
```

---

© 2026 Kaushal Dontula. All rights reserved.
