import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

function ThemeToggleButton() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-colors duration-300"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <FontAwesomeIcon icon={faSun} className="text-yellow-400 w-5 h-5" />
      ) : (
        <FontAwesomeIcon icon={faMoon} className="text-gray-700 w-5 h-5" />
      )}
    </button>
  );
}

export default ThemeToggleButton;
