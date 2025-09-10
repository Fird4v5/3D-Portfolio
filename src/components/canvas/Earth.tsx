import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
  AdaptiveDpr,
  AdaptiveEvents,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

type MobileProps = {
  isMobile: boolean;
};

const Earth = ({ isMobile }: MobileProps) => {
  const earth = useGLTF("./planet/scene.glb");

  return (
    <primitive
      object={earth.scene}
      scale={isMobile ? 2 : 2.5}
      position-y={0}
      rotation-y={0}
      castShadow
      receiveShadow
    />
  );
};

const EarthCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={isMobile ? [1, 2] : [1, Math.min(3, window.devicePixelRatio)]}
      gl={{
        preserveDrawingBuffer: !isMobile,
        powerPreference: "high-performance",
      }}
      camera={{
        fov: isMobile ? 50 : 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={isMobile ? 1 : 2}
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth isMobile={isMobile} />
      </Suspense>

      <AdaptiveDpr />
      <AdaptiveEvents />
      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;

// Preload for better performance
useGLTF.preload("./planet/scene.glb");
