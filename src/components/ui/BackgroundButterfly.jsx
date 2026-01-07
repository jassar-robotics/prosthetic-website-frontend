import { Environment } from '@react-three/drei';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ButterflyModel = () => {
  const gltf = useLoader(GLTFLoader, '/butterfly.glb');
  const meshRef = useRef();
  const mixerRef = useRef();

  useEffect(() => {
    if (gltf.animations && gltf.animations.length > 0) {
      mixerRef.current = new THREE.AnimationMixer(gltf.scene);
      const action = mixerRef.current.clipAction(gltf.animations[0]);
      action.play();
    }
  }, [gltf]);

  useFrame((state, delta) => {
    if (mixerRef.current) {
      mixerRef.current.update(delta);
    }

    if (meshRef.current) {
      // Gentle floating motion
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      meshRef.current.position.x = Math.cos(state.clock.elapsedTime * 0.2) * 0.3;

      // Slow rotation
      meshRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <primitive ref={meshRef} object={gltf.scene} scale={[0.2, 0.2, 0.2]} position={[0, 0, 0]} />
  );
};

const BackgroundButterfly = ({ className = '' }) => {
  return (
    <div className={`w-full h-48 ${className}`}>
      <Canvas camera={{ position: [0, 0, 3], fov: 45 }} style={{ background: 'transparent' }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.6} />

        <ButterflyModel />

        <Environment preset="dawn" />
      </Canvas>
    </div>
  );
};

export default BackgroundButterfly;
