import { useEffect, useState } from 'react';

const useDarkMode = () => {
  const [mode, setMode] = useState('light');

  const toggle = () => {
    if (mode === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  return { mode, toggle };
};

export default useDarkMode;
