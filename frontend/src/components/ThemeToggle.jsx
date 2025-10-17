import { useTheme } from '../contexts/ThemeProvider';

export const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="bg-secondary-bg text-secondary-text px-4 py-2 rounded hover:opacity-90 transition-opacity"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};