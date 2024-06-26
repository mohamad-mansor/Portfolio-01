import {
  FaLinux,
  FaGit,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaNode,
  FaFigma,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Skills</h2>
        <div className="marquee">
          <div className="marquee-content flex space-x-8">
            <FaLinux size={40} />
            <FaGit size={40} />
            <FaHtml5 size={40} />
            <FaCss3Alt size={40} />
            <FaBootstrap size={40} />
            <SiTailwindcss size={40} />
            <FaJs size={40} />
            <FaReact size={40} />
            <FaNode size={40} />
            <FaFigma size={40} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
