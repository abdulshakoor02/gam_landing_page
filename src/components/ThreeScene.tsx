'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';

const RotatingCube = () => {
  const meshRef = useRef<THREE.Mesh>(null!); // Added type assertion for meshRef

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <Box ref={meshRef} args={[2, 2, 2]} position={[0, 1, 0]}> {/* Adjusted position slightly up */}
      <meshStandardMaterial color="royalblue" />
    </Box>
  );
};

const ThreeScene = () => {
  return (
    <div style={{ height: '400px', width: '100%' }}> {/* Added a container with explicit height */}
      <Canvas camera={{ position: [0, 2, 5], fov: 75 }}> {/* Adjusted camera position */}
        <ambientLight intensity={Math.PI / 2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <RotatingCube />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default ThreeScene;
