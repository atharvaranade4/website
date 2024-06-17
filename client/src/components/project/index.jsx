import React from 'react';
import styles from './style.module.css';

export default function index({ index, title, projectType, setModal, link }) {
  const handleClick = () => {
    setModal({ active: true, index });
  };

  return (
    <a
      href={link}
      className={styles.project}
      onMouseEnter={() => { setModal({ active: true, index }) }}
      onMouseLeave={() => { setModal({ active: false, index }) }}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2>{title}</h2>
      <p>{projectType}</p>
    </a>
  );
}
