import React from "react";
import FitnessChallenges from "./FitnessChallenges";
import WorkoutDisplay from "./workout/WorkoutDisplay";
import homeArt from "../Assets/homeArt.jpeg";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-white to-gray-100 opacity-90"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full px-6 gap-12">
          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src={homeArt}
              alt="Fitness Illustration"
              className="w-full max-w-[250px] md:max-w-[300px] rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left max-w-2xl">
            {/* Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight drop-shadow-lg mb-6">
              Welcome to <span className="text-orange-500">BurnMetrics</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-lg mx-auto md:mx-0 mb-8 font-medium">
              Track your progress, achieve your fitness goals, and stay
              motivated every step of the way with our personalized tools and
              challenges.
            </p>

            {/* Call-to-Action Button */}
            <div>
              <a
                href="/challenges"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-10 rounded-full shadow-lg transform transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-300"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>

        {/* Decorative Shapes */}
        <div className="absolute top-10 left-10 w-20 h-20 md:w-24 md:h-24 bg-orange-300 rounded-full opacity-70 blur-lg animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 md:w-32 md:h-32 bg-yellow-400 rounded-full opacity-70 blur-lg"></div>
        <div className="absolute bottom-16 left-1/4 w-36 h-36 md:w-48 md:h-48 bg-purple-300 rounded-full opacity-40 blur-xl animate-bounce"></div>
        <div className="absolute top-16 right-1/5 w-40 h-40 md:w-48 md:h-48 bg-red-300 rounded-full opacity-40 blur-xl"></div>
      </div>

      {/* Additional Sections */}
      <FitnessChallenges />
      <WorkoutDisplay />
    </div>
  );
};

export default Home;
