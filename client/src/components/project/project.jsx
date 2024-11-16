import React from 'react';
import styles from './style.module.css';
import Image from 'next/image';

export default function Project({ index, title, projectType, projectDescription, setModal, link, src, isLargeScreen }) {
  const handleClick = () => {
    if (isLargeScreen) {
      setModal({ active: true, index });
    }
  };

  return (
    <a
      href={isLargeScreen ? undefined : link}
      className={styles.project}
      onMouseEnter={() => { if (isLargeScreen) setModal({ active: true, index }); }}
      onMouseLeave={() => { if (isLargeScreen) setModal({ active: false, index }); }}
      onClick={handleClick}
      target={isLargeScreen ? undefined : "_blank"}
      rel="noopener noreferrer"
    >
      <div className={styles.projectCard}>
        <Image
          className={styles.projectImage}
          src={`/images/${src}`}
          width={300}
          height={0}
          alt="image"
        />
        <div className={styles.projectTitle}>
          <h2>{title}</h2>
          <p>{projectType}</p>
        </div>
      </div>
      <p className={styles.projectDescription}>{projectDescription}</p>
    </a>
  );
}
