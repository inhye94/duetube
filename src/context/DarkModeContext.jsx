import React, { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

export default function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    updateLocalStorageDarkMode(!darkMode);
  };

  useEffect(() => {
    const isDarkMode =
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    setDarkMode(isDarkMode);
    updateLocalStorageDarkMode(isDarkMode);
  }, []);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export const useDarkModeContext = () => useContext(DarkModeContext);

const updateLocalStorageDarkMode = (darkMode) => {
  if (darkMode) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "");
  }
};
