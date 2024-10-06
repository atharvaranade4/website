import React from 'react';
import menuItems from '../../../public/data/menuItems';
import styles from './styles.module.scss';
import { useScroll } from '@/context/ScrollContext'; // Import useScroll

const Nav = () => {
  const sectionRefs = useScroll();

  const scrollToSection = (section) => {
    const sectionRef = sectionRefs[section.toLowerCase()];
    if (sectionRef && sectionRef.current) {
      window.scrollTo({
        top: sectionRef.current.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={styles.navContainer}>
      <ul>
        {menuItems.map((item, index) => (
          <li
            key={index}
            onClick={() => scrollToSection(item)}
            style={{ cursor: 'pointer', padding: '10px 0' }}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
