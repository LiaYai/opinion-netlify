import React, { useState, useEffect } from 'react';
import Switch from '../common/Switch';

export const ThemeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      setIsDarkMode(prefersDarkMode);
      document.documentElement.classList.toggle('dark', prefersDarkMode);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);

    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <div className="absolute top-8 sm:top-10.5 right-18 sm:left-33 w-8 text-accent-heading hover:text-theme-hover cursor-pointer">
      <Switch isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      {/* <span>Переключить тему</span> */}
    </div>
  );
};
