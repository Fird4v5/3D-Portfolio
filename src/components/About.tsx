import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";
import { SectionWrapper } from "../hoc";

type serviceCardProps = {
  index: number;
  title: string;
  icon: string;
};

const ServiceCard = ({ index, title, icon }: serviceCardProps) => {
  return (
    <Tilt
      className="xs:w-[250px] w-full"
      tiltMaxAngleX={45}
      tiltMaxAngleY={45}
      scale={1}
      transitionSpeed={450}
    >
      <motion.div
        variants={fadeIn("up", "tween", 0.15 * index, 0.6)}
        className="w-full bg-green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <motion.div
      variants={staggerContainer(0.15, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      {/* Section heading */}
      <motion.div variants={textVariant(0.2)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      {/* Grid: text + cards */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl lg:mx-auto items-start">
        {/* About paragraph */}
        <motion.p
          variants={fadeIn("up", "tween", 0.3, 0.6)}
          className="text-secondary text-[17px] leading-[30px]"
        >
          I’m a self-taught front-end developer who loves turning ideas into
          smooth, modern web experiences. My core stack is React, TypeScript,
          Next.js, and Tailwind CSS, with a growing edge in 3D visuals and
          motion design using React Three Fiber and Framer Motion. On top of
          that, I also build Telegram bots and MiniApps, giving me experience
          beyond the usual web stack. I learn fast, adapt to any tool, and
          enjoy making projects feel polished, interactive, and alive.
        </motion.p>

        {/* Services */}
        <motion.div
          variants={fadeIn("up", "tween", 0.4, 0.6)}
          className="flex flex-wrap justify-center gap-10"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(About, "about");
