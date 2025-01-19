'use client';
import React, { useEffect } from 'react';
import styles from './styles.module.scss';
import { useTheme } from '@/context/ThemeContext';

export default function Theme() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.body.className = `theme--${theme}`; // Apply the theme class to the body
  }, [theme]);

  const handleThemeToggle = (event) => {
    const selectedTheme = event.target.getAttribute('data-theme'); // Get the theme from data-theme attribute
    if (selectedTheme) {
      setTheme(selectedTheme); // Update the theme directly
    }
  };

  return (
    <>
      <div className={styles.circleContainer}>
        <div
          className={`${styles.circle} ${styles.theme01}`} // Assign class for theme 01
          data-theme="01"
          onClick={handleThemeToggle}
        ></div>
        <div
          className={`${styles.circle} ${styles.theme02}`} // Assign class for theme 02
          data-theme="02"
          onClick={handleThemeToggle}
        ></div>
        <div
          className={`${styles.circle} ${styles.theme03}`} // Assign class for theme 03
          data-theme="03"
          onClick={handleThemeToggle}
        ></div>
        <div
          className={`${styles.circle} ${styles.theme04}`} // Assign class for theme 03
          data-theme="03"
          onClick={handleThemeToggle}
        ></div>
        <div
          className={`${styles.circle} ${styles.theme05}`} // Assign class for theme 03
          data-theme="03"
          onClick={handleThemeToggle}
        ></div>
      </div>
    </>
  );
}
