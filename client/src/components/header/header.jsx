import React from 'react';
import Image from 'next/image'; // Import Next.js Image component
import styles from './style.module.scss';
import { useNavContext } from '../../context/NavContext';
import logo from '../../../public/images/Logo.svg'; // This path seems correct

function Header() {
  const { toggleVisibility, isVisible, isMobile } = useNavContext();

  return (
    <header className={styles.appHeader}>
      <div className={styles.content}>
        <div className={styles.brand}>
          {/* Use Next.js Image component */}
          <div className={styles.overlayContainer}>
          <Image
            src="/images/Logo.svg"
            alt="Logo"
            width={isMobile ? 30 : 40}
            height={isMobile ? 30 : 40}
            className={styles.Logo}
            />
          </div>
        </div>
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
