import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">M-M A</div>
      <nav className="hidden md:flex space-x-4">
        <Link to="home" smooth={true} className="hover:underline">
          Home
        </Link>
        <Link to="skills" smooth={true} className="hover:underline">
          Skills
        </Link>
        <Link to="projects" smooth={true} className="hover:underline">
          Projects
        </Link>
        <Link to="footer" smooth={true} className="hover:underline">
          Contact
        </Link>
      </nav>
      <div className="flex space-x-4 items-center">
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "🌞" : "🌙"}
        </button>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
      <button className="block md:hidden">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </header>
  );
};

export default Header;
