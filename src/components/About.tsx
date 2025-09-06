import Tilt from "react-parallax-tilt"; 
import { motion } from "framer-motion";

import { styles } from "../styles"; 
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

type serviceCardProps = {
  index: number; 
  title: string; 
  icon: string; 
}

const ServiceCard = ({ index, title, icon }: serviceCardProps) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full bg-green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45, 
            scale: 1, 
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        </div>
      </motion.div>   
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant(1)} className="text-center mt-10">
        <p className={styles.sectionSubText}>
          Introduction
        </p> 
        <h2 className={styles.sectionHeadText}>
          Overview
        </h2>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-5 lg:mx-auto items-center">
      <motion.p 
      variants={fadeIn("down", "spring", 0.1, 1)}
      className="text-secondary text-[17] leading-[30px]"
      >
        I’m a self-taught front-end developer who loves turning ideas into smooth, modern web experiences. My core stack is React, TypeScript, Next.js, and Tailwind CSS, with a growing edge in 3D visuals and motion design using React Three Fiber and Framer Motion. On top of that, I also build Telegram bots and MiniApps, giving me experience beyond the usual web stack. I learn fast, adapt to any tool, and enjoy making projects feel polished, interactive, and alive.
      </motion.p>

      <div className="">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      </div>
    </>
  )
}

export default About