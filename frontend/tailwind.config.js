/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Core colors
        background: 'hsl(var(--color-background) / <alpha-value>)',
        foreground: 'hsl(var(--color-foreground) / <alpha-value>)',
        border: 'hsl(var(--color-border) / <alpha-value>)',
        
        // Card colors
        card: {
          DEFAULT: 'hsl(var(--color-card) / <alpha-value>)',
          foreground: 'hsl(var(--color-card-foreground) / <alpha-value>)',
          border: 'hsl(var(--color-card-border) / <alpha-value>)',
        },
        
        // Sidebar colors
        sidebar: {
          DEFAULT: 'hsl(var(--color-sidebar) / <alpha-value>)',
          foreground: 'hsl(var(--color-sidebar-foreground) / <alpha-value>)',
          border: 'hsl(var(--color-sidebar-border) / <alpha-value>)',
          primary: 'hsl(var(--color-sidebar-primary) / <alpha-value>)',
          'primary-foreground': 'hsl(var(--color-sidebar-primary-foreground) / <alpha-value>)',
          accent: 'hsl(var(--color-sidebar-accent) / <alpha-value>)',
          'accent-foreground': 'hsl(var(--color-sidebar-accent-foreground) / <alpha-value>)',
          ring: 'hsl(var(--color-sidebar-ring) / <alpha-value>)',
        },
        
        // Popover colors
        popover: {
          DEFAULT: 'hsl(var(--color-popover) / <alpha-value>)',
          foreground: 'hsl(var(--color-popover-foreground) / <alpha-value>)',
          border: 'hsl(var(--color-popover-border) / <alpha-value>)',
        },
        
        // Primary colors
        primary: {
          DEFAULT: 'hsl(var(--color-primary) / <alpha-value>)',
          foreground: 'hsl(var(--color-primary-foreground) / <alpha-value>)',
        },
        
        // Secondary colors
        secondary: {
          DEFAULT: 'hsl(var(--color-secondary) / <alpha-value>)',
          foreground: 'hsl(var(--color-secondary-foreground) / <alpha-value>)',
        },
        
        // Muted colors
        muted: {
          DEFAULT: 'hsl(var(--color-muted) / <alpha-value>)',
          foreground: 'hsl(var(--color-muted-foreground) / <alpha-value>)',
        },
        
        // Accent colors
        accent: {
          DEFAULT: 'hsl(var(--color-accent) / <alpha-value>)',
          foreground: 'hsl(var(--color-accent-foreground) / <alpha-value>)',
        },
        
        // Destructive colors
        destructive: {
          DEFAULT: 'hsl(var(--color-destructive) / <alpha-value>)',
          foreground: 'hsl(var(--color-destructive-foreground) / <alpha-value>)',
        },
        
        // Input colors
        input: 'hsl(var(--color-input) / <alpha-value>)',
        ring: 'hsl(var(--color-ring) / <alpha-value>)',
        
        // Chart colors
        chart: {
          1: 'hsl(var(--color-chart-1) / <alpha-value>)',
          2: 'hsl(var(--color-chart-2) / <alpha-value>)',
          3: 'hsl(var(--color-chart-3) / <alpha-value>)',
          4: 'hsl(var(--color-chart-4) / <alpha-value>)',
          5: 'hsl(var(--color-chart-5) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'Menlo', 'monospace'],
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        '2xs': 'var(--shadow-2xs)',
        'xs': 'var(--shadow-xs)',
        'sm': 'var(--shadow-sm)',
        'DEFAULT': 'var(--shadow)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
        'xl': 'var(--shadow-xl)',
        '2xl': 'var(--shadow-2xl)',
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
    },
  },
  plugins: [],
}