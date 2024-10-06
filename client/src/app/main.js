'use client';
import styles from './page.module.css';

import Intro from '@/sections/intro/intro';
import About from '@/sections/about/about';
import Project from '../sections/projects/projects';
import Playground from '@/sections/playground/playground';
import Values from '@/sections/values/values';
import Contact from '@/sections/contact/contact';

import { ScrollProvider } from '@/context/ScrollContext'; // Import ScrollProvider

export default function Main() {
  return (
    <main className={styles.main}>
      <Intro />
      <About />
      <Project />
      <Playground />
      <Values />
      <Contact />
    </main>
  );
}
