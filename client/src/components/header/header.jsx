// Header.js
import React from 'react';
import styles from './style.module.scss';
import { useNavContext } from '../../context/NavContext';

function Header() {
  const { toggleVisibility, isMobile } = useNavContext();

  return (
    <header className={styles.appHeader}>
      <div className={styles.content}>
        <div className={styles.brand}>Logo</div>
        {isMobile && ( // Show only on mobile screens
          <div className={styles.actions}>
            <div className={styles.navigation} onClick={toggleVisibility}>
              Actions
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
