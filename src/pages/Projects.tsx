import { motion } from "framer-motion";
import { ProjectCard } from "../components/ProjectCard";
import { projectsInfo } from "../info/projectsInfo";

motion;
function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-wrap justify-center"
    >
      {projectsInfo.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </motion.section>
  );
}

export { Projects };
