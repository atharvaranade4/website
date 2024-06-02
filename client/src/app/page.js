'use client'
import styles from './page.module.css'
import { useState } from 'react'
import Project from '../components/project'
import Modal from '../components/modal'
import projectData from '../../public/data/projectsInfo.json'


export default function Home() {
  // console.log(projectData)

  const [modal, setModal] = useState({ active:false, index:0 })


  return (
    <main className={styles.main}>
      <div className={styles.body}>
      {
        projectData.map((project, index) => {
          return <Project 
            key={index}
            index={index}
            title={project.title}
            projectType={project.projectType}
            setModal={setModal} 
            link={project.link} // Pass the link prop here
          />
        })
      }
      </div>
      <Modal
        modal={modal} 
        projects={projectData}
      />
    </main>
  )
}