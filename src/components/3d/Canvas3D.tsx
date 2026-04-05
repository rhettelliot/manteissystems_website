"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import ScrollScene from "./ScrollScene";
import ParticleField from "./ParticleField";
import PostProcessing from "./PostProcessing";
import LoadingFallback from "./LoadingFallback";

export default function Canvas3D() {
  return (
    <div className="canvas-container">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        gl={{ antialias: true, alpha: false }}
        dpr={[1, 2]}
      >
        {/* Void Background */}
        <color attach="background" args={["#000000"]} />
        
        {/* Fog for depth */}
        <fog attach="fog" args={["#000000", 10, 50]} />
        
        {/* Lighting */}
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#0057FF" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#0057FF" />
        
        {/* Scene Content */}
        <Suspense fallback={<LoadingFallback />}>
          <ScrollScene />
          <ParticleField count={1000} />
          <PostProcessing />
        </Suspense>
      </Canvas>
    </div>
  );
}