import React, { createContext, useState } from 'react';

// Create the ThemeContext
const ThemeContext = createContext();

// Create a ThemeProvider component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };










