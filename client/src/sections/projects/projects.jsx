// ProjectSection.js
import { useEffect, useRef } from "react";
import styles from './styles.module.scss';
import '@/app/styles/globals.scss'
import Gallery from '@/components/gallery/gallery'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Playground from "../playground/playground";


const ProjectSection = () => {
  const sliderRef = useRef(null);
  const maskRef = useRef(null); 
  const projectRef = useRef(null); 
  const slide2Ref = useRef(null);
  const dotContainerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    if (!sliderRef.current || !projectRef.current) return;
    const slides = gsap.utils.toArray(sliderRef.current.children);

    function getInitialTranslateZ(slide) {
      const style = window.getComputedStyle(slide);
      const matrix = style.transform.match(/matrix3d\((.+)\)/);
      if (matrix) {
        const values = matrix[1].split(", ");
        return parseFloat(values[14] || 0);
      }
      return 0;
    }
  
    function mapRange(value, inMin, inMax, outMin, outMax) {
      return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
    }
  
    slides.forEach((slide, index) => {
      const initialZ = getInitialTranslateZ(slide);
      // console.log(initialZ)
  
      ScrollTrigger.create({
        trigger: projectRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const zIncrement = progress * 14000;
          const currentZ = initialZ + zIncrement;
  
          let opacity;
          if (currentZ > -2500) {
            opacity = mapRange(currentZ, -2500, 0, 0.5, 1);
          } else {
            opacity = mapRange(currentZ, -5000, -2500, 0, 0.5);
          }
  
          slide.style.opacity = opacity;
          slide.style.transform = `translateX(-50%) translateY(-50%) translateZ(${currentZ}px)`;
        },
      });
    });

    const initialZMask = getInitialTranslateZ(maskRef.current);
    // console.log(initialZMask)
    let lastScrollY = window.scrollY;

    ScrollTrigger.create({
      trigger: projectRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        // console.log("ScrollTrigger updating...");

        if (!maskRef.current) return; // Ensure ref is attached

        const progress = self.progress;
        const zIncrement = progress * 5000;
        const currentZmaskDown = initialZMask + zIncrement;
        
        // Ensure maskRef.current is defined before updating styles
        if (maskRef.current) {
          if (currentZmaskDown > 0) {
          maskRef.current.style.position = 'fixed'
          maskRef.current.children[0].style.transform = `translateX(0%) translateY(0%) translateZ(${3*currentZmaskDown}px)`;
            if (currentZmaskDown > 250) {
              maskRef.current.style.position = 'relative'; 
              maskRef.current.style.zIndex = '-3';
              // maskRef.current.style.width = 'auto';
            } else if (currentZmaskDown < 250) 
            maskRef.current.style.zIndex = '1';
          }
          if (progress <= 0.0001) {
            maskRef.current.style.position = "relative";            
          }
        } 
      },
    });

    gsap.set(dotContainerRef.current, { opacity: 1, transition: "opacity 0.75s ease-in-out" });

    ScrollTrigger.create({
      trigger: projectRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        const slide2Transform = window.getComputedStyle(slide2Ref.current);
        const matrix = slide2Transform.transform.match(/matrix3d\((.+)\)/);
        // console.log(matrix)
        let translateZ = 0;
  
        if (matrix) {
          const values = matrix[1].split(", ");
          translateZ = parseFloat(values[14] || 0); // X translation value
          // console.log(translateZ)
        }
  
        if (translateZ > 500) {
          dotContainerRef.current.style.opacity = "0";
        } else {
          dotContainerRef.current.style.opacity = "1";
        }
      },
    });



  
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  


  return (
    <section ref={projectRef} className={styles.projects}>
      {/* <div className={styles.content}>
        <h2>Featured Projects</h2>
        <Gallery />
      </div> */}
      {/* <div ref={activeSlideRef} className={styles.activeSlide}>
        <img className={styles.image} src="/images/blogs.jpg"/>
        <img className={styles.image} src="/images/sketch.jpg"/>
        <img className={styles.image} src="/images/3D viewer.jpg"/>
        <img className={styles.image} src="/images/blogs.jpg"/>
        <img className={styles.image} src="/images/sketch.jpg"/>
        <img className={styles.image} src="/images/3D viewer.jpg"/>
      </div> */}
      

        <div 
          ref={dotContainerRef} 
          className={styles.dotContainer} 
          id='slide-dots'>
        </div>
      <div ref={sliderRef} className={styles.slider}>
        <div className={styles.blackContainer} id='slide-0'>
          <div className={styles.slide}>
            <div className={styles.innerRectangle}></div>
          </div>
        </div>
        {/* <div className={styles.slide} id='slide-1'>          
        </div> */}
        <div ref={slide2Ref} className={styles.slide} id='slide-2'>
          <div className={styles.slideCopy}>
            <p>Neo Elegance</p>
            <p id='index'>02</p>
          </div>
          <div className={styles.slideImg}>
            <img className={styles.image} src="/images/sketch.jpg"/>
          </div>
        </div>

        <div className={styles.slide} id='slide-3'>
          <div className={styles.slideCopy}>
            <p>Neo Elegance</p>
            <p id='index'>03</p>
          </div>
          <div className={styles.slideImg}>
            <img className={styles.image} src="/images/3D viewer.jpg"/>
          </div>
        </div>
        <div className={styles.slide} id='slide-4'>
          <div className={styles.slideCopy}>
            <p>Neo Elegance</p>
            <p id='index'>04</p>
          </div>
          <div className={styles.slideImg}>
            <img className={styles.image} src="/images/blogs.jpg"/>
          </div>
        </div>
        <div className={styles.slide} id='slide-5'>
          <div className={styles.slideCopy}>
            <p>Neo Elegance</p>
            <p id='index'>05</p>
          </div>
          <div className={styles.slideImg}>
            <img className={styles.image} src="/images/sketch.jpg"/>
          </div>
        </div>
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className={styles.slide} id='slide-6'>
          <div  className={styles.slideLink}>
            <div className={styles.slideCopy}>
              <p>Neo Elegance</p>
              <p id="index">06</p>
            </div>
            <div className={styles.slideImg}>
              <img className={styles.image} src="/images/3D viewer.jpg" alt="Neo Elegance Project" />
            </div>
          </div>    
        </a>
      </div>

      <div ref={maskRef} className={styles.maskedParent}>        
        <div 
          className={styles.maskedContent} 
          id='slide-00'>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
