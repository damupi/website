# AGENTS.md

## Project Overview

This project is a refactoring of the personal website [www.damupi.com](https://www.damupi.com).

**Source repository:** https://github.com/damupi/website.git

The goal is to modernize the original static HTML/CSS/JS website into a React-based application with TailwindCSS.

## Project Structure

```
website/
├── css/, js/, *.html          # Original static website (reference)
└── website-react/             # React refactored version (main work)
    ├── src/
    │   ├── components/        # React components
    │   ├── App.js             # Main application
    │   └── index.js           # Entry point
    ├── public/
    │   ├── img/               # Image assets
    │   └── fonts/             # Custom fonts
    └── tailwind.config.js     # TailwindCSS configuration
```

## Setup Commands

```bash
# Navigate to React project
cd website/website-react

# Install dependencies
npm install

# Start development server (runs on port 3000)
npm start

# Run tests
npm test

# Build for production
npm run build
```

## Tech Stack

- **React 19** - UI framework
- **TailwindCSS 3.4** - Utility-first CSS
- **Create React App** - Build tooling
- **PostCSS** - CSS processing

## Code Style

- Use functional components with hooks
- Prefer arrow functions for component definitions
- Use TailwindCSS utility classes for styling
- Component files: PascalCase (e.g., `Header.js`)
- CSS files paired with components (e.g., `Header.css` for `Header.js`)
- Keep components small and focused on single responsibility

## Component Guidelines

- Each component should have its own file in `src/components/`
- Import order: React, third-party, local components, styles
- Use semantic HTML elements where appropriate
- Support both dark and light themes (assets available in `/public/img/`)

## Assets

- Images are in `public/img/` - includes light/dark theme variants
- Custom font: `public/fonts/damupi.ttf`
- Favicon: `public/favicon.ico`

## Testing

```bash
# Run tests in watch mode
npm test

# Run tests once (CI mode)
CI=true npm test
```

## Reference Material

The original website files in `website/` (css/, js/, index.html, form.html) serve as the design reference for the React refactor. Preserve the visual design while improving code structure.

## PR Guidelines

- Test changes locally before committing
- Ensure `npm test` passes
- Keep commits focused and descriptive
- Reference any design decisions from the original website
