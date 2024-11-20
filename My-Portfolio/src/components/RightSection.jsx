import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Contact from './ContactForm';
import SkillsSection from './SkillsSection '
import ProjectsSection from './ProjectSection';
import AboutSection from './AboutSection';

const RightSection = React.forwardRef(({ setActiveSection, className }, ref) => {
  const rightSectionRef = useRef(null);
  const [scrolling, setScrolling] = useState(false); 

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [setActiveSection]);

  useEffect(() => {
    const handleWindowScroll = () => {
      if (rightSectionRef.current && !scrolling) {
        rightSectionRef.current.scrollTop = window.scrollY;  
      }
    };

    window.addEventListener('scroll', handleWindowScroll);

    return () => {
      window.removeEventListener('scroll', handleWindowScroll);
    };
  }, [scrolling]);

  const handleRightSectionScroll = () => {
    if (rightSectionRef.current) {
      setScrolling(true);
    }
  };

  return (
    <div
      ref={(node) => {
        rightSectionRef.current = node;
        if (ref) {
          if (typeof ref === 'function') ref(node);
          else ref.current = node;
        }
      }}
      className={`w-full lg:w-1/2 overflow-y-scroll p-12 space-y-20 scrollbar-hide bg-[#0a1123] ${className}`}
      onScroll={handleRightSectionScroll}
    >
      <section id="about">
        <AboutSection />
      </section>

      <section id="projects">
        <ProjectsSection />
      </section>

      <section id="skills">
        <SkillsSection />
      </section>

      <section id="contact">
        <h2 className="text-3xl font-bold">Contact</h2>
        <Contact />
      </section>
    </div>
  );
});

RightSection.displayName = "RightSection";

RightSection.propTypes = {
  setActiveSection: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default RightSection;
