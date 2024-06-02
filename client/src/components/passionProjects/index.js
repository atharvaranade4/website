import React, { useState, useLayoutEffect, useEffect, useRef } from 'react'
import styles from './style.module.css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import projects from '../../../public/data/passionInfo.json'

export default function Index() {

  const [selectedProject, setSelectedProject] = useState(0);
  const container = useRef(null);
  const imageContainer = useRef(null);


  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.create({
          trigger: imageContainer.current,
          pin: true,
          start: "top-=100px",
          end: document.body.offsetHeight,
      })
    });
    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className={styles.projects}>
      <motion.div className={styles.projectDescription}>
          <div className={styles.column}>
            <h1>Passion</h1>
            <p>Some, like the southern viscacha, vicuña and Darwins rhea, are classified as endangered species. Others, such as Andean goose, horned coot, Andean gull, puna tinamou and the three flamingo species inhabiting in Chile (Andean flamingo, Chilean flamingo, and Jamess flamingo) are considered vulnerable.</p>
          </div>
          <div ref={imageContainer} className={styles.imageContainer}>
            <Image 
                src={`/images/${projects[selectedProject].src}`}
                fill={true}
                alt="project image"
                priority={true}
            />
          </div>
      </motion.div>
      <motion.div className={styles.projectList}>
        {
          projects.map( (project, index) => {
            return <div key={index} onMouseOver={() => {setSelectedProject(index)}} className={styles.projectEl}>
                <h2>{project.title}</h2>
            </div>
          })
        }
      </motion.div>
    </div>
  )
}