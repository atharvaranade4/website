'use client';
import React, { createContext, useRef, useEffect } from 'react';
import Nav from './nav'; // Import the Nav component
import styles from './styles.module.scss';

export default function Menu () {

  useEffect(() => {
    // Set the default theme to white
    document.body.style.backgroundColor = 'white';
    document.body.classList.add('text-black');
    updateIndicatorColor('black');
  }, []);

  const changeTheme = (backgroundColor, textColorClass, indicatorColor) => {
    document.body.style.backgroundColor = backgroundColor;

    // Remove the other class if it exists
    document.body.classList.remove(textColorClass === 'text-white' ? 'text-black' : 'text-white');
    // Add the new class
    document.body.classList.add(textColorClass);

    // Update the indicator color
    updateIndicatorColor(indicatorColor);
  };

  const updateIndicatorColor = (color) => {
    const indicators = document.querySelectorAll(`.${styles.indicator}`);
    indicators.forEach(indicator => {
      indicator.style.backgroundColor = color;
    });
  };

  return (
    <div className={styles.menuContainer}>
      <div className={styles.rightContainer}>
        <div className={styles.circleContainer}>
          <div
            className={`${styles.circle} ${styles.white}`}
            onClick={() => changeTheme('white', 'text-black', 'black')}
          ></div>
          <div
            className={`${styles.circle} ${styles.black}`}
            onClick={() => changeTheme('#1C1D20', 'text-white', 'white')}
          ></div>
        </div>
      </div>
      <Nav />
    </div>
  );
};