import styles from './style.module.scss';
import gsap from 'gsap';
import { React, useEffect, useRef } from 'react';

function Index() {

  const firstName = "Hi, I am Atharva, a"
  const lastName = " developer"
  const tagLine = "creative"

  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.timeline()
        .fromTo(
          ".name-animation",
          { x: 100, opacity: 0, rotate: -10 },
          {
            x: 0,
            opacity: 1,
            rotate: 0,
            ease: "elastic.out(1, 0.3)",
            duration: 1,
            transformOrigin: "left top",
            stagger: { each: 0.05, from: "random" },
          }
        )
        .fromTo(
          ".tagline",
          { y: 100, opacity: 0 }, // Start 100px below the visible area
          {
            opacity: 1,
            y: 0, // Move to the final position
            duration: 1,
            ease: "power4.out",
          }
        );
    }, component);
    return () => ctx.revert();
  }, []);

  const renderLetters = (name, key) => {
    if (!name) return;
    return name.split("").map((letter, index) => (
      <span
        key={index}
        className={`name-animation ${styles['name-animation']} ${styles[`name-animation-${key}`]} block`}
      >
        {letter}
      </span>
    ));
  };

  return (
    <div className={styles.developerTitleContainer} ref={component}>
      <h2>
        <span>{renderLetters(firstName, "first")}</span><br />
        <span className={`tagline ${styles.bluetext}`}>{tagLine}</span>
        <span>{renderLetters(lastName, "last")}</span>
      </h2>
    </div>
  );
}

export default Index;
