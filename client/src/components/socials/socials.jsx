'use client';
import styles from './styles.module.scss';
import React, { useEffect } from 'react';

export default function Socials() {
  return(
    <span className={styles.socialLinksMenu}>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialLinks}
        >
        Instagram <span className={styles.arrow}>&#8599;</span>
      </a>
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialLinks}
        >
        LinkedIn <span className={styles.arrow}>&#8599;</span>
      </a>
      <a
        href="https://www.github.com"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialLinks}
        >
        GitHub <span className={styles.arrow}>&#8599;</span>
      </a>
    </span>
  ) 
}         