import React from 'react';

// context with default values
const ThemeContext = React.createContext({
  isDark: false,
  toggleTheme: () => {},
});

export default ThemeContext;