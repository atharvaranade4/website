import React, {  useEffect, useLayoutEffect, useRef, useState  } from 'react';
import { usePathname } from 'next/navigation';
import menuItems from '../../../public/data/menuItems';
import styles from './styles.module.scss';
import { useScroll } from '@/context/ScrollContext';
import { useNavContext } from '../../context/NavContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Socials from '../socials/socials';

const Nav = () => {
  const { currentSection, sectionRefs } = useScroll();
  const { isVisible, toggleVisibility, isMobile } = useNavContext();
  const button = useRef(null);

  useEffect(() => {
    // Toggle body scroll based on mobile menu visibility
    document.body.style.overflow = isVisible && isMobile ? 'hidden' : 'auto';
    return () => {
      // Reset body overflow on cleanup
      document.body.style.overflow = 'auto';
    };
  }, [isVisible, isMobile]);


  // useLayoutEffect(() => {
  // if (!isMobile) {
  //   gsap.registerPlugin(ScrollTrigger);
  //   gsap.to(button.current, {
  //     scrollTrigger: {
  //       trigger: document.documentElement,
  //       start: "top top",
  //       end: window.innerHeight / 2,
  //       onLeave: () => {
  //         gsap.to(button.current, { scale:1, duration: 0.25, ease: "power1.out" });
  //       },
  //       onEnterBack: () => {
  //         gsap.to(button.current, { scale: 0, duration: 0.25, ease: "power1.out" });
  //       },
  //     },
  //   });
  // }   
  // }, [isMobile]);

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
          <div  ref={button} className={styles.navMenu}>
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
          </div>
        )}
      </nav>
      {/* Overlay appears only on mobile when the menu is visible */}
      {isMobile && isVisible && <div className={styles.overlay}></div>}
    </>
  );
};

export default Nav;
