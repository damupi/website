/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: '#914bb8',
        'accent-dark': '#a78bfa',
        logo: '#ff0000',
        'dark-bg': '#0d0d0f',
        'dark-surface': '#1a1a1d',
        'dark-border': '#33333a',
        'dark-text': '#eeeeee',
        'dark-muted': '#cccccc',
        'light-bg': '#f0f0f0',
        'light-surface': '#ffffff',
        'light-border': '#d0d0d0',
        'light-text': '#111111',
        'light-muted': '#555555',
      },
      fontFamily: {
        mono: ['"Anonymous Pro"', 'monospace'],
      },
    },
  },
  plugins: [],
}
