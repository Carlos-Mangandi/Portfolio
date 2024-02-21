
import React from "react";
import { BiCodeAlt } from "react-icons/bi";
import { BsEyeFill } from "react-icons/bs";
import { motion } from "framer-motion";

interface Project {
  name: string;
  img: string;
  technologies: string[];
  SourceCode?: string;
  LiveDemo: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <>
      <motion.article
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col justify-center items-center w-[320px] h-[300px] m-5"
      >
        <h2 className="text-xl mb-2 font-medium text-center">{project.name}</h2>
        <picture className="flex justify-center items-center w-full h-full rounded-lg overflow-hidden relative">
          <img
            className={`w-full h-full object-cover`}
            src={project.img}
            alt={project.name}
          />
          <div className="flex flex-col items-center justify-evenly absolute z-20 w-full h-full opacity-0 bg-black/70 text-white ease-in duration-300 hover:opacity-100">
            <div className="flex w-full justify-evenly">
              {project.technologies.map((technologie, index) => (
                <picture
                  className="bg-whited w-16 h-16 p-2 rounded-full"
                  key={index}
                >
                  <img
                    className="w-full h-full object-cover"
                    src={technologie}
                    alt="icon"
                  />
                </picture>
              ))}
            </div>
            <div className="flex w-full justify-center gap-10">
              {project.SourceCode && (
                <a
                  className="w-12 h-12 rounded-full ease-in p-1 duration-300 hover:bg-indigo-500 dark:hover:bg-emerald-500 "
                  target="__blank"
                  aria-label="go to source code"
                  href={project.SourceCode}
                >
                  <BiCodeAlt className="w-full h-full" />
                </a>
              )}
              <a
                className="w-12 h-12 rounded-full ease-in p-1 duration-300 hover:bg-indigo-500 dark:hover:bg-emerald-500 "
                target="__blank"
                aria-label="go to live demo"
                href={project.LiveDemo}
              >
                <BsEyeFill className="w-full h-full" />
              </a>
            </div>
          </div>
        </picture>
      </motion.article>
    </>
  );
}

export { ProjectCard };
