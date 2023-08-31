import React from 'react';

const GlossyContainer = ({children }) => {
  const containerStyle = `bg-gradient-to-b from-gray-300 to-gray-400 rounded-lg shadow-md border border-gray-300 md:p-16 p-6 flex flex-col items-center justify-center w-full`;
 

  return (
    <div className={containerStyle} >
      {children}
    </div>
  );
};

export default GlossyContainer;