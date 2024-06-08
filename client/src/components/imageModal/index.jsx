import React from 'react';
import styles from './style.module.css';
import Image from 'next/image';

function ImageModal({ modal, projects }) {

  const { active, index } = modal;
  
  return (
    <div className={styles.modalContainer}>
      <div style={{top: index * -100 + "%"}} className={styles.modalSlider}>
        {
          projects.map( (project, index) => {
          const { src, color } = project
          return <div className={styles.modal} style={{backgroundColor: color}} key={`modal_${index}`}>
              <Image 
              src={`/images/${src}`}
              width={500}
              height={0}
              alt="image"
              />
          </div>
          })
        }
      </div>
    </div>
  );
}

export default ImageModal;
