import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";  // Ensure CanvasLoader is properly defined

// Ball component for 3D ball
const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);  // Load texture

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      {/* Add ambient and directional lighting */}
      <ambientLight intensity={0.25} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}  // Adjust decal position
          rotation={[2 * Math.PI, 0, 6.25]}  // Rotate decal texture
          scale={1}
          map={decal}  // Apply the texture map to the decal
          flatShading
        />
      </mesh>
    </Float>
  );
};

// Canvas component that renders the 3D ball
const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}  // Set display pixel ratio for better quality
      gl={{ preserveDrawingBuffer: true }}  // Preserve the canvas for screenshots
      shadows  // Enable shadows for better realism
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        {/* Ball component with imgUrl prop */}
        <Ball imgUrl={icon} />
      </Suspense>

      {/* Preload textures */}
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
