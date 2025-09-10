import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  AdaptiveDpr,
  AdaptiveEvents,
  OrbitControls,
  Preload,
  useGLTF,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

type MobileProps = {
  isMobile: boolean;
};

const Computers = ({ isMobile }: MobileProps) => {
  const computer = useGLTF("./desktop_pc/scene-optimized.glb");

  return (
    <group>
      {/* Softer ambient fill */}
      <hemisphereLight intensity={isMobile ? 0.6 : 1} groundColor="black" />

      {/* Main shadow light - heavy for desktop, lighter for mobile */}
      <directionalLight
        position={[0, 0, 0]}
        intensity={isMobile ? 2.5 : 5}
        castShadow
        shadow-mapSize={isMobile ? [512, 512] : [1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={100}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
      />

      {/* Only add expensive rect light for desktop */}
      {!isMobile && (
        <rectAreaLight
          width={3}
          height={20}
          intensity={100}
          color="#ffffff"
          position={[0, 40, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      )}

      {/* Fill light to brighten dark side */}
      <pointLight intensity={isMobile ? 1 : 2} />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.55 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
        castShadow
        receiveShadow
      />
    </group>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={isMobile ? [1, 2] : [1, Math.min(3, window.devicePixelRatio)]}
      camera={{ position: [20, 3, 5], fov: isMobile ? 28 : 25 }}
      gl={{
        preserveDrawingBuffer: !isMobile, // lighter on mobile
        powerPreference: "high-performance",
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      {/* Auto-adjust quality */}
      <AdaptiveDpr />
      <AdaptiveEvents />
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;

// Preload GLTF for better perf
useGLTF.preload("./desktop_pc/scene-optimized.glb");
