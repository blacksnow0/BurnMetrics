import React from "react";
import FitnessChallenges from "./FitnessChallenges";

const Home = () => {
  return (
    <div>
      <div className="relative h-screen ">
        {/* Content */}
        <div className="flex flex-col items-center justify-center text-center h-full px-6">
          {/* <h1 className=" bg-gray-700 p-4 tracking-widest text-white text-4xl md:text-4xl font-bold mb-4"> */}
          <h1 className=" text-4xl md:text-6xl font-bold mb-4">
            {/* Nothing Changes If Nothing Changes */}
            Welcome To BurnMetrics
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl">
            Track your progress, achieve your fitness goals, and stay motivated
            every step of the way!
          </p>

          <a
            href="/get-started"
            className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 px-6 rounded-md shadow-md transition duration-300"
          >
            Get Started
          </a>
        </div>
      </div>
      <FitnessChallenges />
    </div>
  );
};

export default Home;
