import React from 'react';
import styles from './style.module.css';
import Image from 'next/image';

function index({ modal, projects }) {
  return (
    <>
      <div className={styles.modalContainer}>
        <div style={{ top: modal.index * -100 + '%' }} className={styles.modalSlider}>
          {projects.map((project, index) => {
            const { src, color } = project;
            return (
              <div className={styles.modal} style={{ backgroundColor: color }} key={`modal_${index}`}>
                <Image 
                  src={`/images/${src}`}
                  width={300}
                  height={300} // Set appropriate height
                  alt="image"
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default index;

