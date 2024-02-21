import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import avatar from "../assets/avatar.webp"
import { motion } from "framer-motion";
function InfoCard() {

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      className="infoCard relative mt-32 lg:mt-0 z-10 w-full lg:max-w-md bg-indigo-50 dark:bg-gray-950 transition-colors duration-300  shadow-lg shadow-black/20 rounded-2xl flex flex-col items-center pt-36 sm:px-8 gap-2"
    >
      <figure className="absolute w-56 h-56   -top-28 overflow-hidden ">
        <img className="w-full h-full scale-125" src={avatar} alt="Avatar"/>
      </figure>
      <h1 className="text-3xl font-medium text-center">
       Carlos Elías Mangandí Escobar
      </h1>
      <h2 className="px-8 py-2 text-gray-600 dark:text-gray-400">Front-End Developer</h2>
      <section className="flex gap-5 text-3xl mb-8">
        <a
          href="https://github.com/Carlos-Mangandi"
          aria-label="My github"
          target="__blank"
          className="cursor-pointer w-10 h-10 grid place-content-center bg-indigo-400 hover:bg-indigo-500 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white rounded-xl transition-colors duration-300"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://linkedin.com/in/carlos-mangandí-34a839295"
          target="__blank"
          aria-label="My Linkdn"
          className="cursor-pointer w-10 h-10 grid place-content-center bg-indigo-400 hover:bg-indigo-500 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white rounded-xl transition-colors duration-300"
        >
          <AiFillLinkedin />
        </a>
      </section>
      <section className="w-full rounded-2xl flex flex-col divide-y-2 items-center">
     
        <article className="flex items-center w-11/12 py-2 sm:p-2 gap-3">
          <div className="bg-indigo-400 hover:bg-indigo-500 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white p-2 transition-colors duration-300 rounded-2xl">
            <AiOutlineMail />
          </div>
          <div className="flex flex-col">
            <span className="font-light text-sm">Email</span>
            <a
              className="hover:text-indigo-400 dark:hover:text-emerald-500 "
              href="mailto:carlosmescobar46@gmail.com"
            >
              carlosmescobar46@gmail.com
            </a>
          </div>
        </article>
      </section>
      <a href="https://drive.google.com/file/d/10ge49aTcDguzg4AHHfgQwf4R3xzANAaw/view?usp=sharing" target="__blank" className="h-10 w-40 grid place-content-center font-medium text-slate-50 rounded-2xl mt-10 mb-12 bg-indigo-400 cursor-pointer hover:bg-indigo-500 dark:bg-emerald-500 dark:hover:bg-emerald-600 transition-colors duration-300">
        Download CV
      </a>
    </motion.section>
  );
}

export { InfoCard };
