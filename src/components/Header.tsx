import { Navbar } from "./Navbar";
import { ToogleDarkMode } from "./ToogleDarkMode";
import { motion } from "framer-motion";
function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      className="header relative z-10 flex items-center justify-center lg:justify-normal gap-6 mt-10 lg:mt-0 mb-6 lg:mb-0"
    >
      <Navbar />
      <ToogleDarkMode />
    </motion.header>
  );
}

export { Header };
