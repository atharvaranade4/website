// Main.js
import React from 'react';
import styles from './page.module.css';

import Intro from '@/sections/intro/intro';
import About from '@/sections/about/about';
import Project from '../sections/projects/projects';
import Playground from '@/sections/playground/playground';
import Values from '@/sections/values/values';
import Contact from '@/sections/contact/contact';

import { useScroll } from '@/context/ScrollContext';

export default function Main() {
  const { sectionRefs } = useScroll();
  
  return (
    <main className={styles.main}>
      <section ref={sectionRefs.intro} data-section="intro">
        <Intro />
      </section>
      <section ref={sectionRefs.about} data-section="about">
        <About />
      </section>
      <section ref={sectionRefs.projects} data-section="projects">
        <Project />
      </section>
      <section ref={sectionRefs.playground} data-section="playground">
        <Playground />
      </section>
      <section ref={sectionRefs.values} data-section="values">
        <Values />
      </section>
      <section ref={sectionRefs.contact} data-section="contact">
        <Contact />
      </section>
    </main>
  );
}
