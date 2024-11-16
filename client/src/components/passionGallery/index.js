'use client'
import styles from './style.module.css';
import { useState, useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

import Project from '../project/project';
import CursorModal from '../cursorModal';
import passionProjectData from '../../../public/data/passionInfo.json';
import phrases from '../../../public/data/phrases.json';
import ImageModal from '../imageModal';

export default function Home() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  
  const passionImageContainer = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.create({
          trigger: passionImageContainer.current,
          pin: true,
          start: "top-=60px",
          end: document.body.offsetHeight,
      })
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className={styles.passionProjectContainer}>
        <div className={styles.passionDescription}>
          <div className={styles.column}>
            <h1>Passion</h1>
            <p>{ phrases[1] }</p>
            <p>{ phrases[2] }</p>
          </div>
          <div ref={passionImageContainer} className={styles.imageContainer}>
            <ImageModal
              modal={modal}
              projects={passionProjectData}
            />
          </div>
        </div>
        <div className={styles.projectList}>
          {
            passionProjectData.map((project, index) => {
              return (
                <Project
                key={index}
                index={index}
                title={project.title}
                setModal={setModal}
                link={project.link} // Pass the link prop here
                />
              );
            })
          }
        </div>
      </div>
      <CursorModal
        modal={modal}
      />
    </>
  );
}
