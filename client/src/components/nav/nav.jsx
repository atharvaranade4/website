import React from 'react';
import menuItems from '../../../public/data/menuItems';
import styles from './styles.module.scss';
import { useScroll } from '@/context/ScrollContext';
import { useTheme } from '@/context/ThemeContext';

const Nav = () => {
  const { currentSection, sectionRefs } = useScroll();
  
  const scrollToSection = (section) => {
    const sectionRef = sectionRefs[section.toLowerCase()];
    if (sectionRef && sectionRef.current) {
      window.scrollTo({
        top: sectionRef.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  // Generate a class based on the current theme
  const navItemClass = (item) => {
    const isActive = currentSection === item.toLowerCase();
    return `${styles.navitem} ${isActive ? styles.navItemActive : ''}`
  };

  return (
    <nav className={styles.navContainer}>
      <div>
        {menuItems.map((item, index) => (
          <div
            key={index}
            onClick={() => scrollToSection(item)}
            className={navItemClass(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
