import React, { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

export default function DarkModeProvider({ children }) {
  const [_darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!_darkMode);
    updateDarkMode(!_darkMode);
  };

  useEffect(() => {
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(isDark);
    updateDarkMode(isDark);
  }, []);

  return (
    <DarkModeContext.Provider value={{ _darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

const updateDarkMode = (_darkMode) => {
  if (_darkMode) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "");
  }
};

export const useDarkModeContext = () => useContext(DarkModeContext);
