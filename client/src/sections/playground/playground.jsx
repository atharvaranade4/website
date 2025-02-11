import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useInView, motion, useMotionValue, useSpring, useScroll  } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei";
import textData from "../../../public/data/draggable.json";
import { slideUp } from "../../common/animation";
import styles from "./style.module.scss";

export default function Playground() {
  const containerRef = useRef(null);
  const [randomPositions, setRandomPositions] = useState([]);
  const [isCursorInside, setIsCursorInside] = useState(false); // Tracks if the cursor is inside the container
  const [isMouseActive, setIsMouseActive] = useState(true); // State to control mouse animation
  const description = useRef(null);
  const isInView = useInView(description);
  const [isActive, setIsActive] = useState(false);

  const cursorSvg = "/images/cursor_arrow.svg";
  const cursorSize = useMotionValue(20); // Cursor size as a motion value
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  // Smooth mouse values
  const smoothOptions = { damping: 100, stiffness: 500, mass: 0.25 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize.get() / 2);
    mouse.y.set(clientY - cursorSize.get() / 2);
  };

  const handleMouseEnter = () => {
    setIsCursorInside(true);
  };

  const handleMouseLeave = () => {
    setIsCursorInside(false);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  });

  const phrase = "Ongoing Projects";
  const images = [
    "/images/blogs.jpg",
    "/images/sketch.jpg",
    "/images/3D viewer.jpg",
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        // console.log(rect)
        const viewportHeight = window.innerHeight;
        // console.log(viewportHeight)

        // Check if more than 50% of the element is within the viewport
        if ((rect.top) < viewportHeight * 0.4) {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // Generate random positions for images within the container
  useLayoutEffect(() => {
    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();

      const positions = images.map(() => {
        const top = Math.random() * (containerRect.height - 250); // Ensure image height fits
        const left = Math.random() * (containerRect.width - 250); // Ensure image width fits
        return { top, left };
      });

      setRandomPositions(positions);
    }
  }, []); // Runs once to set random positions

  const cursorStyle = {
    left: smoothMouse.x,
    top: smoothMouse.y,
    width: cursorSize.get(), // Cursor size as motion value
    height: cursorSize.get(), // Cursor size as motion value
    pointerEvents: "none",
    transform: "translate(-50%, -50%)",
    transition: "width 0.3s ease, height 0.3s ease", // Transition for cursor size change
  };
  
  const svgContainerStyle = {
    position: "absolute", // This ensures the SVG is positioned independently of scaling
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)", // Centers the SVG within the cursor container
    width: "100%", 
    height: "100%",
    backgroundImage: isCursorInside ? `url(${cursorSvg})` : "none",
    backgroundSize: "80% 80%",  // Adjust percentage as needed;
    backgroundColor: "var(--color--foreground--33)",
    backgroundSize: "contain",  // Prevent scaling of the SVG
    backgroundRepeat: "no-repeat",
    borderRadius: "50%",
    pointerEvents: "none",
  };
   
  return (
    <div>
      {/* <div className={styles.playgroundTitle}>
        <h2>
          {phrase.split(" ").map((word, index) => (
            <span key={index} className={styles.mask}>
              <motion.span
                variants={slideUp}
                custom={index}
                animate={isInView ? "open" : "closed"}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h2>
      </div> */}
      <div
        ref={containerRef}
        className={`${styles.playgroundContainer} ${isActive ? styles.active : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
      <motion.div
        className={styles.cursor}
        style={cursorStyle}
        animate={{
          scale: isCursorInside ? 3 : 1, // Only scale the cursor container
          transition: { type: "spring", stiffness: 100, damping: 20 },
        }}
      >
        <div style={svgContainerStyle}></div> {/* This holds the static-sized SVG */}
      </motion.div>
        {randomPositions.length > 0 &&
          images.map((src, index) => (
            <motion.img
              key={index}
              src={src}
              alt={`Draggable ${index + 1}`}
              className={styles.draggable}
              initial={{
                top: randomPositions[index].top,
                left: randomPositions[index].left,
              }}
              drag
              dragConstraints={containerRef}
              dragElastic={0.2}
              style={{
                position: "absolute",
                width: "500px",
                height: "500px",
                cursor: "grab",
              }}
              whileDrag={{
                cursor: "grabbing",
              }}
            />
          ))}

        {/* Draggable 3D Cube */}
        <motion.div
          drag
          dragConstraints={containerRef}
          dragElastic={0.2}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "300px",
            height: "300px",
            cursor: "grab",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Canvas style={{ width: "100%", height: "100%" }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Box scale={[1.5, 1.5, 1.5]}>
              <meshStandardMaterial color="orange" />
            </Box>
            <OrbitControls />
          </Canvas>
        </motion.div>

        {/* Draggable Text */}
        {textData.map((item, index) => (
          <motion.div
            key={index}
            drag
            dragConstraints={containerRef}
            dragElastic={0.1}
            style={{
              position: "absolute",
              top: `${item.top}px`,
              left: `${item.left}px`,
            }}
            className={styles.draggableText}
            whileDrag={{
              cursor: "grabbing",
            }}
          >
            <h2>{item.text}</h2>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
