/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: '#914bb8',
        logo: '#ff0000',
        'dark-bg': '#262626',
        'dark-surface': '#333333',
        'dark-border': '#404040',
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
