// Header.js
import React from 'react';
import styles from './style.module.scss';
import { useNavContext } from '../../context/NavContext';

function Header() {
  const { toggleVisibility, isVisible, isMobile } = useNavContext();

  return (
    <header className={styles.appHeader}>
      <div className={styles.content}>
        <div className={styles.brand}>Logo</div>
        {isMobile && (
          <div className={styles.actions} onClick={toggleVisibility}>
            <div className={`${styles.hamburger} ${isVisible ? styles.open : ''}`}>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
