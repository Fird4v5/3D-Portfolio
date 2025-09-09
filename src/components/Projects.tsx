import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projectsInfo } from "../constants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";

import ProjectCard from "./ProjectCard";
import { useState } from "react";


const Projects = () => {

  const [activeCategory, setActiveCategory] = useState("featured"); 

  const categories = [
    { key: "featured", label: "Featured"},
    { key: "javascript", label: "JavaScript"}, 
    { key: "html_css", label: "HTML|CSS"},
  ]

  const filteredProjects = projectsInfo.filter(
    (project) => project.category === activeCategory
  ); 


  return (
    <motion.div
      variants={staggerContainer(0.15, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0 }}
    >
      <motion.div variants={textVariant(0.2)}>
        <p className={styles.sectionSubText}>My projects</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("up", "tween", 0.3, 0.6)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      <motion.div
        className="scroll-fade sm:scroll-fade-none 
          flex gap-3 mt-10 bg-white/5 backdrop-blur-md rounded-full p-2 
          w-full sm:w-fit sm:px-4 
          max-w-[95%] sm:max-w-none 
          mx-auto shadow-card 
          overflow-x-auto sm:overflow-x-visible 
          no-scrollbar 
          whitespace-nowrap sm:whitespace-normal 
          justify-start sm:justify-center"
      >
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={
              `relative px-6 py-2 rounded-full font-medium transition cursor-pointer 
              ${activeCategory === cat.key
                          ? "text-white"
                          : "text-gray-400 hover:text-white"
              }`
            }
          >
            {cat.label}
            {activeCategory === cat.key && (
              <motion.div 
                layoutId="active-pill"
                className="absolute inset-0 bg-green-pink-gradient rounded-full -z-10"
                transition={{ type: "spring", bounce: 0.25, duration: 0.5}}
              />
            )}
          </button>
        ))}
      </motion.div>

      <div className="mt-20 grid justify-center gap-7 [grid-template-columns:repeat(auto-fit,minmax(300px,360px))]">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.name} index={index} {...project} />
        ))}
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Projects, "projects");
