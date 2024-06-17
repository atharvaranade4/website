'use client'
import styles from './style.module.css'
import { useState } from 'react'
import Project from '../project'
import Modal from '../modal'
import projectData from '../../../public/data/projectsInfo.json'


export default function Home() {
  // console.log(projectData)

  const [modal, setModal] = useState({ active:false, index:0 })


  return (
    <div className={styles.gallery}>
      {
        projectData.map((project, index) => {
          return <Project 
            key={index}
            index={index}
            title={project.title}
            projectType={project.projectType}
            setModal={setModal} 
            link={project.link}
          />
        })
      }
      <Modal
        modal={modal} 
        projects={projectData}
      />
    </div>
  )
}