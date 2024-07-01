//Footer.jsx Component
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 transition duration-300">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/mohamad-mansor"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://de.linkedin.com/in/mohamad-mansor-al-hajr-2a7485316"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
        <a
          className="bg-gray-800 text-white py-2 px-6 rounded hover:bg-gray-700 transition duration-300"
          onClick={() => (window.location.href = "mailto:m.m.alhajr@web.de")}
          target="_blank"
        >
          Contact Me
        </a>
        <p className="mt-4 text-gray-500">
          &copy; 2024 Mohamad Mansor. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
