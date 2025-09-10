import { Html, useProgress } from "@react-three/drei"; 


const CanvasLoader = () => {
  const { progress } = useProgress(); 

  return (
    <Html>
      <span>
        <p
          className="text-[14px] text-[#f1f1f1] font-bold mt-[40px]"
        >
          {progress.toFixed(2)}%
        </p>
      </span>
    </Html>
  )
}

export default CanvasLoader