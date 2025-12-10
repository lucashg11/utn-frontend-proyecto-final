import { useState, createContext } from "react";

export const ThemeContext = createContext();
const ThemeContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const changeToDarkMode = () => {
    setIsDark(true);
  };

  const changeToLightMode = () => {
    setIsDark(false);
  };

  const providedValue = {
    isDark,
    toggleTheme,
    changeToDarkMode,
    changeToLightMode,
  };

  return (
    <ThemeContext.Provider value={providedValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
