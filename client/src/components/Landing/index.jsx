'use client'
import Image from 'next/image'
import styles from './style.module.scss'
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Landing() {

  const firstText = useRef(null)
  const secondText = useRef(null)
  const slider = useRef(null)

  let xPercent = 0
  let direction = 1

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    requestAnimationFrame(animation)
    
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 1,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-=300px",
    })

  }, [])


  const animation = () => {
    if (xPercent <= -100){
      xPercent = 0
    }
    if (xPercent > 0){
      xPercent = -100
    }
    
    gsap.set(firstText.current, {xPercent: xPercent})
    gsap.set(secondText.current, {xPercent: xPercent})  
    xPercent += 0.1 * direction;
    requestAnimationFrame(animation);
  }

  return (
    // <main className={styles.main}>
    //   <Image 
    //     src="/images/portrait.jpg"
    //     fill={true}
    //     alt="background"
    //   />
    //   <div className={styles.sliderContainer}>
    //   <div ref={slider} className={styles.slider}>
    //     <p ref={firstText}>Atharva Ranade -</p>
    //     <p ref={secondText}>Atharva Ranade -</p>
    //   </div>
    //   </div>
    // </main>
    <main className={styles.main}>
      <Image 
        src="/images/portrait.jpg"
        fill={true}
        alt="background"
      />
    </main>
  )
}