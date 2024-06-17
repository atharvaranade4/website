// Home.js

'use client'
import styles from './styles.module.scss'
import Nav from './nav';
import Rounded from '../../common/RoundedButton';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const button = useRef(null);

  useEffect(() => {
    if (isActive) {
      // Prevent scrolling when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = ''; // Restore scrolling
    }
  }, [isActive]);

  useEffect(() => {
    setIsActive(false); // Close the menu when pathname changes
  }, [pathname]);

  useLayoutEffect( () => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(button.current, {
        scrollTrigger: {
            trigger: document.documentElement,
            start: 0,
            end: window.innerHeight,
            onLeave: () => {gsap.to(button.current, {scale: 1, duration: 0.25, ease: "power1.out"})},
            onEnterBack: () => {gsap.to(button.current, {scale: 0, duration: 0.25, ease: "power1.out"},setIsActive(false))}
        }
    })
}, [])


  return (
    <>
      <div className={styles.main}>

      <div ref={button} className={styles.menuButtonContainer}>
            <Rounded onClick={() => {setIsActive(!isActive)}} className={`${styles.button}`}>
                <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
            </Rounded>
        </div>
      </div>

      {isActive && <div className={styles.overlay} onClick={() => setIsActive(false)}></div>}

      <AnimatePresence>
        {isActive && (
          <Nav />
        )}
      </AnimatePresence>
    </>
  )
}
