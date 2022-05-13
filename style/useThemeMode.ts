import { useEffect, useState } from 'react';
import { ThemeMode } from './Theme';

const useDarkMode = () => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(ThemeMode.light);

  const themeToggle = () => {
    const newMode =
      themeMode === ThemeMode.light ? ThemeMode.dark : ThemeMode.light;
    setThemeMode(newMode);
    localStorage.setItem('themeMode', newMode);
  };

  useEffect(() => {
    const userPrefThemeMode =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedThemeMode = localStorage.getItem('themeMode') as ThemeMode;

    if (
      savedThemeMode &&
      [ThemeMode.light, ThemeMode.dark].includes(savedThemeMode)
    ) {
      setThemeMode(savedThemeMode);
    } else if (userPrefThemeMode) {
      setThemeMode(ThemeMode.dark);
    } else {
      setThemeMode(ThemeMode.light);
    }
  }, []);

  return { themeMode, themeToggle };
};

export default useDarkMode;
