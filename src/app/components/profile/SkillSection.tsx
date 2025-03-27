"use client";

import { FaTools, FaUserGraduate, FaHeart } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Skills Section */}
        <div className="p-6 bg-white shadow-lg rounded-2xl text-center hover:shadow-2xl transition-shadow duration-300">
          <FaTools className="text-4xl text-blue-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-3">Skills</h2>
          <ul className="text-gray-600">
            <li>React & Next.js</li>
            <li>Python & Django</li>
            <li>UI/UX Design</li>
            <li>Data Analysis</li>
          </ul>
        </div>

        {/* Experience Section */}
        <div className="p-6 bg-white shadow-lg rounded-2xl text-center hover:shadow-2xl transition-shadow duration-300">
          <FaUserGraduate className="text-4xl text-green-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-3">Experience</h2>
          <ul className="text-gray-600">
            <li>Internship at XYZ Tech</li>
            <li>Freelance Web Developer</li>
            <li>Hackathon Participant</li>
            <li>Open Source Contributor</li>
          </ul>
        </div>

        {/* Interests Section */}
        <div className="p-6 bg-white shadow-lg rounded-2xl text-center hover:shadow-2xl transition-shadow duration-300">
          <FaHeart className="text-4xl text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-3">Interests</h2>
          <ul className="text-gray-600">
            <li>Artificial Intelligence</li>
            <li>Blockchain</li>
            <li>Design Thinking</li>
            <li>Cybersecurity</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
