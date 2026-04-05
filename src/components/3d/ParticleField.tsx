"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ParticleFieldProps {
  count?: number;
}

export default function ParticleField({ count = 1000 }: ParticleFieldProps) {
  const points = useRef<THREE.Points>(null);
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Distribute particles in a large cube
      pos[i * 3] = (Math.random() - 0.5) * 50; // x
      pos[i * 3 + 1] = (Math.random() - 0.5) * 50; // y
      pos[i * 3 + 2] = (Math.random() - 0.5) * 50; // z
    }
    return pos;
  }, [count]);
  
  const initialPositions = useMemo(() => positions.slice(), [positions]);
  
  useFrame((state) => {
    if (!points.current) return;
    
    const time = state.clock.elapsedTime;
    const positionArray = points.current.geometry.attributes.position.array as Float32Array;
    
    // Subtle floating motion
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positionArray[i3 + 1] = initialPositions[i3 + 1] + Math.sin(time * 0.3 + i) * 0.02;
    }
    
    points.current.geometry.attributes.position.needsUpdate = true;
  });
  
  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#0057FF"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}