// ProjectSection.js
import { useEffect, useRef } from "react";
import styles from './styles.module.scss';
import '@/app/styles/globals.scss'
import Gallery from '@/components/gallery/gallery'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const ProjectSection = () => {
  const sliderRef = useRef(null);
  const activeSlideRef = useRef(null) 
  const projectRef = useRef(null) 

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (!sliderRef.current) return;
    const slides = gsap.utils.toArray(sliderRef.current.children);
    console.log("Slides Found via Ref:", slides);

    // const activeSlideImages = gsap.utils.toArray(activeSlideRef.current.children);
    // console.log(activeSlideImages)

    function getInitialTranslateZ(slide) {
      const style = window.getComputedStyle(slide);
      const matrix = style.transform.match(/matrix3d\((.+)\)/);
      if (matrix) {
        const values = matrix[1].split(", ");
        return parseFloat(values[14] || 0);
      }
      return 0;
    }

    function mapRange (value, inMin, inMax, outMin, outMax) {
      return ((value - inMin)*(outMax - outMin)) / (inMax - inMin) + outMin;
    };
  
    slides.forEach((slide, index) => {
      const initialZ = getInitialTranslateZ(slide);
  
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
  
          // gsap.to(activeSlideImages[index], 1.5, {
          //   opacity: currentZ < 100 ? 1 : 0,
          //   ease: "power3.out",
          //   duration: 1.5,
          // });
        },
      });
    });
  
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
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

      <div ref={sliderRef} className={styles.slider}>
        <div className={styles.blackContainer} id='slide-0'>
          <div className={styles.slide}>
            <div className={styles.innerRectangle}></div>
          </div>
        </div>
        {/* <div className={styles.slide} id='slide-1'>          
        </div> */}

        <div className={styles.slide} id='slide-2'>
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
    </section>
  );
};

export default ProjectSection;
