import './mode.css'
import React, { useState, useEffect } from 'react';

export default function Mode() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'dark'
  );

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <h1>My React App</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}