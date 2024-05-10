'use client'
import Image from 'next/image'
import styles from './page.module.css'
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Landing from '../components/Landing'

export default function Home() {

  return (
    <main className={styles.main}>
      <Landing />
    </main>
  )
}