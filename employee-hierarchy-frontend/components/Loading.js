import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="flex items-center justify-center space-x-2">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin dark:border-white"></div>
        <p className="text-lg text-gray-700 dark:text-white">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
