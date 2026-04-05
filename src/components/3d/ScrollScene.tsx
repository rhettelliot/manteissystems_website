"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import type * as THREE from "three";

export default function ScrollScene() {
  const { camera } = useThree();
  const scroll = useScroll();
  const groupRef = useRef<THREE.Group | null>(null);
  
  useFrame(() => {
    if (!scroll) return;
    
    const offset = scroll.offset;
    
    // Z-axis movement (scroll through the void)
    camera.position.z = 10 - offset * 20;
    
    // Subtle Y rotation (looking around)
    camera.rotation.y = offset * 0.1;
    
    // Subtle X tilt (looking up/down)
    camera.rotation.x = Math.sin(offset * Math.PI) * 0.05;
  });
  
  return (
    <group ref={groupRef}>
      {/* Scene content will be added here */}
      <mesh position={[0, 0, -5]}>
        <planeGeometry args={[20, 20]} />
        <meshBasicMaterial color="#0C0C0C" transparent opacity={0.5} />
      </mesh>
    </group>
  );
}