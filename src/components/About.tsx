import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";
import { SectionWrapper } from "../hoc";

type serviceCardProps = {
  index: number;
  title: string;
  issuer: string; 
  description: string; 
  view: string; 
};

const ServiceCard = ({ index, title, issuer, description, view}: serviceCardProps) => {
  return (
    <Tilt
      className="grid mx-auto 
  [grid-template-columns:repeat(auto-fit,minmax(240px,240px))] 
  max-w-6xl"
      tiltMaxAngleX={45}
      tiltMaxAngleY={45}
      scale={1}
      transitionSpeed={450}
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="bg-green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[200px] flex items-center justify-center flex-col gap-1">
          <h3 className="text-white font-bold text-center text-[14px] break-words">{title}
          </h3>
          <p className="text-secondary text-center text-[12px]">
            {issuer}
          </p>
          <p className="text-secondary text-center text-[12px]">
            {description}
          </p>
          <a 
            href={view} 
            target="_blank" 
            className="text-secondary hover:text-white text-center text-[12px] mt-4"
          >
            View the certificate
          </a>
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
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

        {/* About paragraph */}
        <motion.p
          variants={fadeIn("up", "tween", 0.3, 0.6)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I’m a self-taught front-end developer who loves turning ideas into
          smooth, modern web experiences. My core stack is React, TypeScript,
          Next.js, and Tailwind CSS, with a growing edge in 3D visuals and
          motion design using React Three Fiber and Framer Motion. On top of
          that, I also build Telegram bots and MiniApps, giving me experience
          beyond the usual web stack. I learn fast, adapt to any tool, and
          enjoy making projects feel polished, interactive, and alive.
          <br/><br/>
          <span className="font-bold">Languages:</span> English (IELTS 8.0), Uzbek (Native), Russian (A2-B1)
        </motion.p>

        {/* Services */}
        <motion.div
          variants={fadeIn("up", "tween", 0.4, 0.6)}
          className="mt-10 flex flex-wrap gap-10"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </motion.div>
    </motion.div>
  );
};

export default SectionWrapper(About, "about");
