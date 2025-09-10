import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt"

import { github, live } from "../assets";
import { fadeIn,  } from "../utils/motion";

interface ProjectCardProps {
  index: number;
  name: string;
  category: string;
  description: string;
  tags: { name: string; color: string }[];
  image: string;
  source_code_link: string;
  live_code_link: string;
}

const ProjectCard = ({
  index,
  name, 
  description,
  tags,
  image,
  source_code_link,
  live_code_link,
}: ProjectCardProps) => {
  return (
    <motion.div 
       initial="hidden"
  animate="show"
  exit="hidden"
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    >
      <Tilt
        tiltMaxAngleX={45}
        tiltMaxAngleY={45}
        scale={1}
        transitionSpeed={450}
        className="bg-tertiary p-5 rounded-2xl w-full h-full flex flex-col"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={`${name} preview`}
            loading="lazy"
            className="w-full h-full object-cover rounded-2xl"
          />
          {/* GITHUB AND LIVE ICONS */}
          <div className="absolute inset-0 flex justify-end gap-1 m-3 card_img_hover">
            {source_code_link && (
              <a
                href={source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} source code`}
                className="bg-black-gradient w-10 h-10 rounded-full flex justify-center items-center"
              >
                <img
                  src={github}
                  alt="GitHub"
                  className="w-1/2 h-1/2 object-contain"
                />
              </a>
            )}

            {live_code_link && (
              <a
                href={live_code_link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} live demo`}
                className="bg-black-gradient w-10 h-10 rounded-full flex justify-center items-center"
              >
                <img
                  src={live}
                  alt="Live demo"
                  className="w-1/2 h-1/2 object-contain"
                />
              </a>
            )}
          </div>
        </div>

        {/* PROJECT INFO */}
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">
            {name}
          </h3>
          <p className="mt-2 text-secondary text-[14px]">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
        </div>
      </Tilt>
    </motion.div>
  );
};


export default ProjectCard; 