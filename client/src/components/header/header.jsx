import {useRef, useState } from 'react';
import styles from './style.module.scss';
import { useNavContext } from '../../context/NavContext';
import Theme from '../theme/theme';
import Magnetic from '@/common/Magnetic'

function Header() {
  const { toggleVisibility, isVisible, isMobile } = useNavContext();
  const header = useRef(null);

  return (
    <>
      <div ref={header} className={styles.header}>
        <div className={styles.logo}>
          <p className={styles.copyright}>©</p>
          <div className={styles.name}>
            <p className={styles.codeBy}>Code by</p>
            <p className={styles.atharva}>Atharva</p>
            <p className={styles.ranade}>Ranade</p>
          </div>
        </div>
        <div className={styles.themeSocialContainer}>
        <Theme />
        <div className={styles.social}>
          <Magnetic>
              <div className={styles.el}>
                <a>LinkedIn</a>
                <div className={styles.indicator}></div>
              </div>
          </Magnetic>
          <Magnetic>
              <div className={styles.el}>
                  <a>Github</a>
                  <div className={styles.indicator}></div>
              </div>
          </Magnetic>
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
    </>
  );
}

export default Header;
