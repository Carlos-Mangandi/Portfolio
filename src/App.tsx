import {  motion } from "framer-motion"
import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home.tsx";
import { Projects } from "./pages/Projects.tsx";
import { Contact } from "./pages/Contact";
import { InfoCard } from "./components/InfoCard.tsx";
import { Header } from "./components/Header.tsx";

function App() {
  return (
    <>
      <InfoCard />
      <Header />

      <motion.main
        initial={{ opacity: 0, scale: 0}}
        animate={{ opacity: 1, scale: 1}}
        transition={{ duration: 0.5 }}
        className="main bg-indigo-50 dark:bg-gray-950 transition-colors duration-300 shadow-lg shadow-black/20 relative z-[1] w-full max-w-4xl min-h-[720px] mx-auto lg:mx-0 lg:max-h-[720px] p-5 md:p-8 md:px-12 rounded-2xl"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.main>
    </>
  )
}

export default App
