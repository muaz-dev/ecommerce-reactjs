import React from "react";

const ComingSoon: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <h1 className="text-6xl font-bold">Coming Soon!</h1>
      <p className="mt-4 text-lg">
        Our website is under construction. We'll be here soon with our new
        awesome site.
      </p>
    </div>
  );
};

export default ComingSoon;
