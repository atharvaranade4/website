import React, { useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei";
import textData from "../../../public/data/draggable.json"; // Import the JSON file
import styles from "./style.module.scss";

export default function Playground() {
  const containerRef = useRef(null);
  const [randomPositions, setRandomPositions] = useState([]);

  const images = [
    "/images/blogs.jpg",
    "/images/sketch.jpg",
    "/images/3D viewer.jpg",
  ];

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

  return (
    <div ref={containerRef} className={styles.playgroundContainer}>
      {/* Draggable Images */}
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
              width: "250px",
              height: "250px",
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
            position:"absolute",
            top: `${item.top}px`,
            left: `${item.left}px`,
          }}
          className={styles.draggableText}
          whileDrag={{
            cursor: "grabbing",
          }}
        >
          {item.text}
        </motion.div>
      ))}
    </div>
  );
}
