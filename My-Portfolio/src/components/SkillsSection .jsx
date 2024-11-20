import { useState } from 'react';
// import { FaGit, FaHtml5, FaCss3, FaJs, FaNodeJs, FaGithub } from 'react-icons/fa';
// import { SiReact } from "react-icons/si";

// Image imports (use your local or URL paths)
import htmlImage from '../assets/images/html.png';
import cssImage from '../assets/images/css.png';
import jsImage from '../assets/images/javascript.png';
import reactImage from '../assets/images/react.png';
import tailwindImage from '../assets/images/tailwind.png';
import appwriteImage from '../assets/images/black.png';
import gitImage from '../assets/images/git.png';
import githubImage from '../assets/images/github.png';
import nodejsImage from '../assets/nodejs.svg';
import mongodbImage from '../assets/mongodb.svg';
import cppImage from '../assets/c.svg';
import javaImage from '../assets/images/java.png';

const SkillsSection = () => {
  const [showMore, setShowMore] = useState(false);

  const skills = [
    { id: 1, name: 'HTML', icon: <img src={htmlImage} alt="HTML" className="w-12 h-12" /> },
    { id: 2, name: 'CSS', icon: <img src={cssImage} alt="CSS" className="w-12 h-12" /> },
    { id: 3, name: 'JavaScript', icon: <img src={jsImage} alt="JavaScript" className="w-12 h-12" /> },
    { id: 4, name: 'React', icon: <img src={reactImage} alt="React" className="w-12 h-12" /> },
    { id: 5, name: 'Tailwind', icon: <img src={tailwindImage} alt="Tailwind" className="w-12 h-12" /> },
    { id: 6, name: 'Appwrite', icon: <img src={appwriteImage} alt="Appwrite" className="w-12 h-12" /> },
    { id: 7, name: 'Git', icon: <img src={gitImage} alt="Git" className="w-12 h-12" /> },
    { id: 8, name: 'GitHub', icon: <img src={githubImage} alt="GitHub" className="w-12 h-12" /> },
    { id: 9, name: 'Node.js', icon: <img src={nodejsImage} alt="Node.js" className="w-12 h-12" /> },
    { id: 10, name: 'MongoDB', icon: <img src={mongodbImage} alt="MongoDB" className="w-12 h-12" /> },
    { id: 11, name: 'C++', icon: <img src={cppImage} alt="C++" className="w-12 h-12" /> },
    { id: 12, name: 'Java', icon: <img src={javaImage} alt="Java" className="w-12 h-12" /> },
  ];

  const visibleSkills = showMore ? skills : skills.slice(0, 8);

  return (
    <section id="skills">
      <h2 className="text-blue-600 uppercase text-lg font-semibold mb-2">Skills</h2>
      <h3 className="text-3xl font-bold mb-6">What I Can Do</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {visibleSkills.map((skill) => (
          <div
            key={skill.id}
            className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md"
          >
            <div className="mb-4 flex items-center justify-center">{skill.icon}</div>
            <p className="font-medium text-black">{skill.name}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setShowMore(!showMore)}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </section>
  );
};

export default SkillsSection;
