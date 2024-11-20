import PropTypes from "prop-types";
import { FaCode, FaTools, FaProjectDiagram, FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function LeftSection({ activeSection, className }) {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  const sectionIcons = {
    about: <FaCode className="mr-2 text-xl" />,
    skills: <FaTools className="mr-2 text-xl" />,
    projects: <FaProjectDiagram className="mr-2 text-xl" />,
    contact: <FaEnvelope className="mr-2 text-xl" />,
  };

  return (
    <div className={`w-full lg:w-1/2 p-8 flex flex-col justify-between bg-[#0a1123] text-white ${className}`}>
      <div>
        <h1 className="text-5xl font-bold">Nitin Rana</h1>
        <p className="text-lg mt-2 text-cyan-400">Full Stack Developer</p>
        <p className="text-sm mt-4 leading-relaxed">
          I am a Full-Stack Software Engineer focused on creating intuitive and efficient software solutions.
        </p>
      </div>

      <div className="space-y-8 mt-16">
        {["about", "projects", "skills", "contact"].map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className="flex items-center justify-center transition duration-300"
          >
            <span
              className={`relative uppercase text-lg tracking-widest flex items-center ${
                activeSection === section
                  ? "text-cyan-400"
                  : "text-gray-400 hover:text-cyan-400"
              }`}
            >
              {sectionIcons[section]}
              {section.charAt(0).toUpperCase() + section.slice(1)}

              <span
                className={`absolute left-1/2 bottom-[-6px] transform -translate-x-1/2 h-[2px] transition-all duration-300 ${
                  activeSection === section ? "bg-cyan-400 w-full" : "bg-gray-600 w-0"
                }`}
              ></span>
            </span>
          </button>
        ))}
      </div>

      <div className="flex space-x-6 mt-16 justify-start">
        <a
          href="https://github.com/RanaNitin02"
          target="_blank"         
          rel="noopener noreferrer"  
          className="text-gray-400 hover:text-cyan-400 transition duration-300"
          aria-label="GitHub"
        >
          <FaGithub className="text-xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/nitin-2005-rana"
          target="_blank"         
          rel="noopener noreferrer" 
          className="text-gray-400 hover:text-cyan-400 transition duration-300"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="text-xl" />
        </a>
        <a
          href="https://x.com/rana_nitin_02" 
          target="_blank"         
          rel="noopener noreferrer"  
          className="text-gray-400 hover:text-cyan-400 transition duration-300"
          aria-label="X"
        >
          <FaTwitter className="text-xl" />
        </a>
      </div>
    </div>
  );
}

LeftSection.propTypes = {
  activeSection: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default LeftSection;
