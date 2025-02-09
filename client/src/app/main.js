// Main.jss
import React from 'react';
import styles from './page.module.css';
import Intro from '@/sections/intro/intro';
import Background from '@/sections/background/background';
import Project from '../sections/projects/projects';
import Playground from '@/sections/playground/playground';
import Values from '@/sections/values/values';
import Contact from '@/sections/contact/contact';

import { useScroll } from '@/context/ScrollContext';

export default function Main() {
  const { sectionRefs } = useScroll();
  
  return (
    <main className={styles.main}>
      <section ref={sectionRefs.intro} className={styles.section} data-section="intro">
        <Intro />
      </section>
      {/* <section ref={sectionRefs.skills} className={styles.section} data-section="skills">
        <Values />
        </section> */}
      <section ref={sectionRefs.projects} className={styles.section} data-section="projects">
        <Project />
      </section>
      <section ref={sectionRefs.playground} className={styles.section} data-section="playground">
        <Playground />
      </section>
      {/* <section ref={sectionRefs.background} className={styles.section} data-section="background">
        <Background />
      </section> */}
      <section ref={sectionRefs.contact} className={styles.section} data-section="contact">
        <Contact />
      </section>
    </main>
  );
}
