import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-gray-800 text-white p-4 flex justify-between items-center"
    >
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
        Contact Me
      </button>
      <div className="space-x-4">
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
    </footer>
  );
};

export default Footer;
