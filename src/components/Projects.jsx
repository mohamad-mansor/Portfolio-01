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
        <h2 className="text-3xl font-bold mb-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Add your project cards here */}
          <ProjectCard
            image="project1.jpg"
            github="https://github.com"
            live="https://example.com"
          />
          <ProjectCard
            image="project2.jpg"
            github="https://github.com"
            live="https://example.com"
          />
          <ProjectCard
            image="project3.jpg"
            github="https://github.com"
            live="https://example.com"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
