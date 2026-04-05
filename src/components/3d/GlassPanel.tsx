"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";

interface GlassPanelProps {
  children?: React.ReactNode;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
  width?: number;
  height?: number;
}

export default function GlassPanel({
  children,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = [1, 1, 1],
  width = 4,
  height = 3,
}: GlassPanelProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Subtle floating animation
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
  });
  
  return (
    <group position={position} rotation={rotation} scale={scale}>
      {/* Main panel */}
      <RoundedBox ref={meshRef} args={[width, height, 0.1]} radius={0.02} smoothness={4}>
        <meshStandardMaterial
          color="#0C0C0C"
          transparent
          opacity={0.9}
          roughness={0.1}
          metalness={0.1}
        />
      </RoundedBox>
      
      {/* Edge glow (signal color) */}
      <mesh position={[0, 0, -0.06]}>
        <planeGeometry args={[width + 0.02, height + 0.02]} />
        <meshBasicMaterial
          color="#0057FF"
          transparent
          opacity={0.3}
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {/* Content container */}
      {children && (
        <group position={[0, 0, 0.1]}>
          {children}
        </group>
      )}
    </group>
  );
}