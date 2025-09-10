import { useRef, useEffect, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload, AdaptiveDpr, AdaptiveEvents } from "@react-three/drei";
import { inSphere } from "maath/random";
import { Points as ThreePoints } from "three";

type MobileProps = {
  isMobile: boolean;
};

const Stars = ({ isMobile }: MobileProps) => {
  const ref = useRef<ThreePoints>(null);

  // fewer points on mobile for perf
  const sphere = inSphere(
    new Float32Array(isMobile ? 2000 : 5000),
    { radius: 1.2 }
  ) as Float32Array;

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#f272c8"
          size={isMobile ? 0.0015 : 0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) =>
      setIsMobile(event.matches);

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () =>
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars isMobile={isMobile} />
        </Suspense>
        <AdaptiveDpr />
        <AdaptiveEvents />
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
