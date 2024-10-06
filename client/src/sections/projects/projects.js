import React from 'react';
import styles from './styles.module.scss';
import { useScroll } from '@/context/ScrollContext';

const ProjectSection = () => {
  const sectionRefs = useScroll();
  return (
    <section ref={sectionRefs.projects} className={styles.projects}>
      <h1>Projects</h1>
    </section>
  );
};

export default ProjectSection;
