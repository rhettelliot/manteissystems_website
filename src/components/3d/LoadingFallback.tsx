"use client";

import { Center, Text } from "@react-three/drei";

export default function LoadingFallback() {
  return (
    <Center>
      <Text
        fontSize={0.5}
        color="#0057FF"
        anchorX="center"
        anchorY="middle"
        font="/fonts/SpaceGrotesk-Bold.woff"
      >
        INITIALIZING
      </Text>
    </Center>
  );
}