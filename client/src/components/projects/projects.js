import React from 'react';
import styles from './styles.module.scss';
import { useScroll } from '@/context/ScrollContext';

const ProjectSection = () => {
  const sectionRefs = useScroll();
  return (
    <div ref={sectionRefs.projects} className={styles.projects}>
      Projects
    </div>
  );
};

export default ProjectSection;
