// Card.js
import React, { useState } from 'react';

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
      className={`bg-white p-10 rounded-lg border border-gray-300 duration-700 shadow-md hover:scale-110 
      }`}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-40 h-40 mx-auto mb-2 rounded-full bg-gray-200">
        {logo}
      </div>
      <h2 className="text-xl font-semibold mb-2">{heading}</h2>
     
    </div>
  );
};

export default Cardx;
