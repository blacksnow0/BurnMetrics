import React from "react";

const Home = () => {
  return (
    <div className="relative h-screen ">
      {/* Content */}
      <div className="flex flex-col items-center justify-center text-center h-full px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to BurnMetrics
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl">
          Track your progress, achieve your fitness goals, and stay motivated
          every step of the way!
        </p>

        {/* Button */}
        <a
          href="/get-started"
          className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 px-6 rounded-md shadow-md transition duration-300"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Home;
