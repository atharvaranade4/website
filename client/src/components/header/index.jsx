'use client'
import React, { useEffect } from 'react';
import styles from './style.module.scss';
import Magnetic from '../../common/Magnetic';

function Index() {

  useEffect(() => {
    // Set the default theme to black
    document.body.style.backgroundColor = '#1C1D20';
    document.body.classList.add('text-white');
  }, []);


  const changeTheme = (backgroundColor, textColorClass) => {
    document.body.style.backgroundColor = backgroundColor;
    
    // Remove the other class if it exists
    document.body.classList.remove(textColorClass === 'text-white' ? 'text-black' : 'text-white');
    
    // Add the new class
    document.body.classList.add(textColorClass);
  };

  return (
    <div className={styles.headerContainer}>
      <div>
        <p>Logo</p>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.circleContainer}>
          <div
            className={`${styles.circle} ${styles.white}`}
            onClick={() => changeTheme('white', '#1C1D20')}
          ></div>
          <div
            className={`${styles.circle} ${styles.black}`}
            onClick={() => changeTheme('#1C1D20', 'text-white')}
          ></div>
        </div>
        <div className={styles.navContainer}>
          <Magnetic>
            <div className={styles.el}>
                <a>Work</a>
                <div className={styles.indicator}></div>
            </div>
          </Magnetic>
          <Magnetic>
            <div className={styles.el}>
                <a>Contact</a>
                <div className={styles.indicator}></div>
            </div>
          </Magnetic>
        </div>
      </div>
    </div>
  );
}

export default Index;
