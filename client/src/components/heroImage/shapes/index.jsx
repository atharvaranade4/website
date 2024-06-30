import * as THREE from "three";
import { Suspense, useEffect, useRef } from "react";
import styles from './style.module.css';

import { Canvas, useFrame } from "@react-three/fiber";
import { EdgesGeometry, LineSegments, LineBasicMaterial } from 'three';

function TransparentMeshWithEdges() {
  const meshRef = useRef();
  const edgesRef = useRef();

  // Effect to create edges and add them to the scene
  useEffect(() => {
    const edgesGeometry = new EdgesGeometry(meshRef.current.geometry);
    const edgesMaterial = new LineBasicMaterial({ color: 'black' });
    const edges = new LineSegments(edgesGeometry, edgesMaterial);
    edgesRef.current = edges;
    meshRef.current.add(edges);
  }, []);

  // Use useFrame hook to rotate both mesh and edges
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.002;
      meshRef.current.rotation.y += 0.002;
    }
    if (edgesRef.current) {
      edgesRef.current.rotation.x += 0.002;
      edgesRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[7.5, 0]} />
      <meshStandardMaterial color="white" transparent opacity={0.0} />
    </mesh>
  );
}

function Index() {
  return (
    <Canvas
      className="z-0"
      shadows
      gl={{ antialias: false }}
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 25], fov: 30, near: 1, far: 40 }}
    >
      <Suspense fallback={null}>
        <TransparentMeshWithEdges />
      </Suspense>
    </Canvas>
  );
}

export default Index;
