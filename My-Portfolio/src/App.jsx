import { useState, useRef, useEffect } from 'react';
import LeftSection from './components/LeftSection';
import RightSection from './components/RightSection';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const rightSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (rightSectionRef.current) {
        rightSectionRef.current.scrollTop = window.scroll; // Sync right section scroll with window scroll
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-[#0a1123] text-white">
      <style>
        {`
          .scrollable-section {
            overflow-y: auto;
            height: 100%;
            scrollbar-width: none; /* For Firefox */
            -ms-overflow-style: none; /* For Internet Explorer */
          }
          .scrollable-section::-webkit-scrollbar {
            display: none; /* For Chrome, Safari, and Opera */
          }
        `}
      </style>
      <div className="flex w-[80%] h-[80%] bg-[#0a1123] flex-col lg:flex-row">
        <LeftSection activeSection={activeSection} className="lg:w-1/2" />
        <RightSection setActiveSection={setActiveSection} ref={rightSectionRef} className="lg:w-1/2" />
      </div>
    </div>
  );
}

export default App;
