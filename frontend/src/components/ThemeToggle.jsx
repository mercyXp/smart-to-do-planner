import { useTheme } from '../contexts/ThemeContext';

export const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="bg-secondary-bg text-secondary-text px-4 py-2 rounded hover:opacity-90 transition-opacity"
    >
      {isDark ? 'Light' : 'Dark'}
    </button>
  );
};