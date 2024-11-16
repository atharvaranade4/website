// ProjectSection.js
import React from 'react';
import styles from './styles.module.scss';
import Gallery from '@/components/gallery/gallery'

const ProjectSection = () => {
  return (
    <section className={styles.projects}>
      <div className={styles.content}>
        <h1>Projectsssss</h1>
        <Gallery />
      </div>
    </section>
  );
};

export default ProjectSection;
