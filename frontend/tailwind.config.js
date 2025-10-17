/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // Background colors
        bg: 'rgb(var(--color-bg) / <alpha-value>)',
        'bg-muted': 'rgb(var(--color-bg-muted) / <alpha-value>)',
        
        // Text colors
        text: 'rgb(var(--color-text) / <alpha-value>)',
        'text-muted': 'rgb(var(--color-text-muted) / <alpha-value>)',
        
        // Component colors
        'primary-bg': 'rgb(var(--color-primary-bg) / <alpha-value>)',
        'primary-text': 'rgb(var(--color-primary-text) / <alpha-value>)',
        'secondary-bg': 'rgb(var(--color-secondary-bg) / <alpha-value>)',
        'secondary-text': 'rgb(var(--color-secondary-text) / <alpha-value>)',
        'destructive-bg': 'rgb(var(--color-destructive-bg) / <alpha-value>)',
        'destructive-text': 'rgb(var(--color-destructive-text) / <alpha-value>)',
        
        // Card & Popover
        'card-bg': 'rgb(var(--color-card-bg) / <alpha-value>)',
        'card-text': 'rgb(var(--color-card-text) / <alpha-value>)',
        'popover-bg': 'rgb(var(--color-popover-bg) / <alpha-value>)',
        'popover-text': 'rgb(var(--color-popover-text) / <alpha-value>)',
        
        // Chart colors
        'chart-1': 'rgb(var(--color-chart-1) / <alpha-value>)',
        'chart-2': 'rgb(var(--color-chart-2) / <alpha-value>)',
        'chart-3': 'rgb(var(--color-chart-3) / <alpha-value>)',
        'chart-4': 'rgb(var(--color-chart-4) / <alpha-value>)',
        'chart-5': 'rgb(var(--color-chart-5) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'Menlo', 'monospace'],
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
      }
    },
  },
  plugins: [],
}
