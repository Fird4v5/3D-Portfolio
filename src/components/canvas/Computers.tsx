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
  const computer = useGLTF("./desktop_pc/desktop-scene.glb");

  return (
    <group>
      {isMobile ? (
        <hemisphereLight intensity={1.5} groundColor="black" />
      ) : (
        <>
          {/* Softer ambient fill */}
          <hemisphereLight intensity={1} groundColor="black" />

          {/* Stronger main shadow light */}
          <directionalLight
            position={[0, 0, 0]}
            intensity={5}
            castShadow
            shadow-mapSize={[1024, 1024]}
            shadow-camera-near={1}
            shadow-camera-far={100}
            shadow-camera-left={-20}
            shadow-camera-right={20}
            shadow-camera-top={20}
            shadow-camera-bottom={-20}
          />

          <rectAreaLight
            width={3}
            height={20}
            intensity={100}
            color="#ffffff"
            position={[0, 40, 0]}
            rotation={[-Math.PI / 2, 0, 0]} // point straight down
          />

          {/* Fill light to brighten dark side */}
          <pointLight intensity={2} />
        </>
      )}

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.6 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
        castShadow={!isMobile} // shadows only on desktop
        receiveShadow={!isMobile}
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
      dpr={[1, Math.min(3, window.devicePixelRatio)]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <AdaptiveDpr pixelated />
      <AdaptiveEvents />
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;

// Preload GLTF for better perf
useGLTF.preload("./desktop_pc/scene-optimized.glb");
