import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-md fixed w-full z-10 transition duration-300">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">M-M A</div>
        <nav
          className={`md:flex md:items-center md:space-x-6 ${
            isOpen ? "block" : "hidden"
          } w-full md:w-auto md:static absolute top-16 left-0 md:bg-transparent bg-gray-900`}
        >
          <Link
            to="home"
            smooth={true}
            className="block py-2 px-4 md:inline-block md:py-0 md:px-0 hover:text-gray-400 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="skills"
            smooth={true}
            className="block py-2 px-4 md:inline-block md:py-0 md:px-0 hover:text-gray-400 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth={true}
            className="block py-2 px-4 md:inline-block md:py-0 md:px-0 hover:text-gray-400 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="footer"
            smooth={true}
            className="block py-2 px-4 md:inline-block md:py-0 md:px-0 hover:text-gray-400 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
