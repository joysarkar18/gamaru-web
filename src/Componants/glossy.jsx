import React from "react";

const GlossyContainer = ({ children }) => {
  const containerStyle = `bg-gradient-to-b from-gray-600 via-gray-700 to-gray-800 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 rounded-lg shadow-lg border border-gray-600 dark:border-gray-700 backdrop-blur-md p-6 md:p-16 flex flex-col items-center justify-center w-full transition-all duration-500 hover:shadow-2xl`;

  return <div className={containerStyle}>{children}</div>;
};

export default GlossyContainer;
