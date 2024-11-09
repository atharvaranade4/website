import React, { useEffect } from 'react';
import menuItems from '../../../public/data/menuItems';
import styles from './styles.module.scss';
import { useScroll } from '@/context/ScrollContext';
import { useNavContext } from '../../context/NavContext';

const Nav = () => {
  const { currentSection, sectionRefs } = useScroll();
  const { isVisible, toggleVisibility, isMobile } = useNavContext();

  useEffect(() => {
    // Toggle body scroll based on mobile menu visibility
    document.body.style.overflow = isVisible && isMobile ? 'hidden' : 'auto';
    return () => {
      // Reset body overflow on cleanup
      document.body.style.overflow = 'auto';
    };
  }, [isVisible, isMobile]);

  const scrollToSection = (section) => {
    const sectionRef = sectionRefs[section.toLowerCase()];
    if (sectionRef && sectionRef.current) {
      window.scrollTo({
        top: sectionRef.current.offsetTop,
        behavior: 'smooth',
      });
    }
    if (isMobile) toggleVisibility(); // Close NavContainer on mobile after click
  };

  const navItemClass = (item) => {
    const isActive = currentSection === item.toLowerCase();
    return `${styles.navitem} ${isActive ? styles.navItemActive : ''}`;
  };

  return (
    <>
      <nav
        className={`${styles.navContainer} ${isVisible || !isMobile ? styles.visible : styles.hidden} ${isMobile ? styles.fullscreen : ''}`}
      >
        {/* Only render menuItems when visible */}
        {isVisible && (
          <section className={styles.menuItems}>
            {menuItems.map((item, index) => (
              <div
                key={index}
                onClick={() => scrollToSection(item)}
                className={navItemClass(item)}
              >
                {item}
              </div>
            ))}
          </section>
        )}
      </nav>
      {/* Overlay appears only on mobile when the menu is visible */}
      {isMobile && isVisible && <div className={styles.overlay}></div>}
    </>
  );
};

export default Nav;
