import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BiCodeAlt } from "react-icons/bi";
import { MdOutlineContactPage } from "react-icons/md";

function Navbar() {
  return (
    <ul className="flex gap-8 justify-center sm:gap-12 bg-indigo-50 dark:bg-gray-950 transition-colors duration-300  shadow-lg shadow-black/20 rounded-2xl w-80 sm:w-[500px]  py-3 ">
      <li>
        <NavLink
          className="flex flex-col items-center justify-center gap-1 w-[70px] sm:w-20 py-2 sm:py-3 rounded-xl "
          to="/"
        >
          <AiOutlineHome className="text-3xl" />
          <span className="text-sm">Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          className="flex flex-col items-center justify-center gap-1 w-[70px] sm:w-20 py-2 sm:py-3 rounded-xl"
          to="/projects"
        >
          <BiCodeAlt className="text-3xl" />
          <span className="text-sm">Projects</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          className="flex flex-col items-center justify-center gap-1 w-[70px]  sm:w-20 py-2 sm:py-3 rounded-xl"
          to="/contact"
        >
          <MdOutlineContactPage className="text-3xl" />
          <span className="text-sm">Contact</span>
        </NavLink>
      </li>
    </ul>
  );
}

export { Navbar };
