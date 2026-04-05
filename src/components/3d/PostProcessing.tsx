"use client";

import { EffectComposer, Bloom, ChromaticAberration, Vignette } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { Vector2 } from "three";

export default function PostProcessing() {
  return (
    <EffectComposer>
      {/* Signal glow effect */}
      <Bloom
        intensity={1.2}
        luminanceThreshold={0.8}
        luminanceSmoothing={0.9}
        mipmapBlur
      />
      
      {/* Slight chromatic aberration for depth */}
      <ChromaticAberration
        offset={new Vector2(0.0005, 0.0005)}
        blendFunction={BlendFunction.NORMAL}
        radialModulation={false}
        modulationOffset={0}
      />
      
      {/* Edge darkening for focus */}
      <Vignette
        eskil={false}
        offset={0.1}
        darkness={0.8}
        blendFunction={BlendFunction.NORMAL}
      />
    </EffectComposer>
  );
}