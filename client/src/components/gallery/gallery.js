'use client';
import styles from './style.module.css';
import { useState, useEffect } from 'react';
import Project from '../project/project';
import Modal from '../modal/modal';
import projectData from '../../../public/data/projectsInfo.json';

export default function Home() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const [isLargeScreen, setIsLargeScreen] = useState(false); // Initialize with false to avoid SSR issues

  // Check screen size and update state
  useEffect(() => {
    // Only run on the client
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1280);
    };

    handleResize(); // Set initial state on component mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.gallery}>
      {projectData.map((project, index) => (
        <Project
          key={index}
          index={index}
          title={project.title}
          projectType={project.projectType}
          projectDescription={project.description}
          setModal={setModal}
          link={project.link}
          src={project.src} // Add image property for direct display
          isLargeScreen={isLargeScreen} // Pass screen size condition
        />
      ))}

      {/* Show Modal only on large screens */}
      {isLargeScreen && modal.active && (
        <Modal
          modal={modal}
          projects={projectData}
        />
      )}
    </div>
  );
}
