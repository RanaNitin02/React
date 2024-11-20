// import React from 'react';

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <p className="mt-4 text-gray-300">Here are some projects I have worked on...</p>
      <div className="grid gap-8 mt-8">
        <div className="bg-[#162236] p-6 rounded-lg shadow-lg border border-gray-600">
          <div className="flex items-center space-x-4">
            <img
              src="https://via.placeholder.com/100x60"
              alt="Blog Creating App"
              className="w-24 h-16 rounded"
            />
            <h3 className="text-lg font-bold text-white">Blog Creating App</h3>
          </div>
          <p className="mt-2 text-gray-400">
            Video course that teaches how to build a web app with the Spotify Web API. Topics covered include REST APIs, user auth flows, Node, React, Styled Components, and more.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">React</span>
            <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Appwrite</span>
          </div>
        </div>
        <div className="bg-[#162236] p-6 rounded-lg shadow-lg border border-gray-600">
          <div className="flex flex-wrap items-center space-x-4">
            <img
              src="https://via.placeholder.com/100x60"
              alt="Book Recommendation System"
              className="w-24 h-16 rounded"
            />
            <h3 className="text-lg font-bold text-white">Book Recommendation System</h3>
          </div>
          <p className="mt-2 text-gray-400">
            Build a web app to suggest books based on user preferences. Used React for the frontend and integrated OpenAI ChatGPT API for generating personalized book recommendations. Utilized Appwrite for user authentication and database services.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">React</span>
            <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">OpenAI&apos;s ChatGPT API</span>
            <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Appwrite</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
