import React, { useState } from "react";

const Cardx = ({ logo, heading, details }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`relative p-10 rounded-xl border border-gray-300 backdrop-blur-md bg-white/30 dark:bg-gray-900/50 shadow-lg 
      transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:bg-white/50 dark:hover:bg-gray-800/60 ${
        isHovered ? "scale-105 shadow-xl" : ""
      }`}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`absolute inset-0 w-full h-full rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-lg transition-all duration-500 ${
          isHovered ? "opacity-50" : "opacity-0"
        }`}
      ></div>

      <div
        className={`relative z-10 w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-r from-teal-400 to-purple-500 p-4 flex items-center justify-center transform transition-all duration-500 ${
          isHovered ? "rotate-12 scale-110" : ""
        }`}
      >
        {logo}
      </div>

      <h2
        className={`relative z-10 text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 transition-all duration-500 ${
          isHovered
            ? "text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500"
            : ""
        }`}
      >
        {heading}
      </h2>

      {details && (
        <p className="relative z-10 text-center text-gray-700 dark:text-gray-300 transition-opacity duration-500">
          {details}
        </p>
      )}
    </div>
  );
};

export default Cardx;
