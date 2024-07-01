import { FaGithub, FaArrowRight } from "react-icons/fa";

const ProjectCard = ({ image, github, live }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <img src={image} alt="Project" className="w-full h-56 object-cover" />
    <div className="p-4 flex justify-between items-center">
      <a href={github} target="_blank" rel="noopener noreferrer">
        <FaGithub size={24} className="text-gray-800" />
      </a>
      <a href={live} target="_blank" rel="noopener noreferrer">
        <FaArrowRight size={24} className="text-gray-800" />
      </a>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Selected Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Add your project cards here */}
          <ProjectCard
            image="https://raw.githubusercontent.com/mohamad-mansor/Snake-Game/main/images/snake-game.png"
            github="https://github.com/mohamad-mansor/Snake-Game"
            live="https://mohamad-mansor.github.io/Snake-Game/"
          />
          <ProjectCard
            image="https://raw.githubusercontent.com/mohamad-mansor/Portfolio-00/main/Screenshot%20from%202024-02-07%2012-42-29.png"
            github="https://github.com/mohamad-mansor/Portfolio-00"
            live="https://mohamad-mansor.github.io/Portfolio-00/"
          />
          <ProjectCard
            image="https://raw.githubusercontent.com/mohamad-mansor/TO-DO-List/main/images/Screenshot%20from%202024-06-27%2012-33-49.png"
            github="https://github.com/mohamad-mansor/TO-DO-List"
            live="https://mohamad-mansor.github.io/TO-DO-List/"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
