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
    <>
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
      <Modal
        modal={modal} 
        projects={projectData}
      />
    </>
  )
}