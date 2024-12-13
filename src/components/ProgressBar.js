import React from "react";
import { FaRunning, FaFlagCheckered } from "react-icons/fa";

const ProgressBar = ({ progress }) => {
  // Define motivational quotes based on progress
  const quotes = [
    "Every journey begins with a single step.",
    "Keep going, you're doing great!",
    "Success is the sum of small efforts.",
    "The harder you work, the greater the progress.",
    "Finish strong, you're almost there!",
    "Congratulations! you are one day closer to you'r goal.",
  ];

  const currentQuote =
    progress >= 100
      ? quotes[5]
      : quotes[Math.floor((progress / 100) * quotes.length)];

  return (
    <div className="relative w-full max-w-4xl mx-auto mb-10">
      <div className="w-full bg-gray-200 rounded-full h-8 overflow-hidden shadow-md relative">
        <div
          className="absolute top-0 left-0 h-8 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        ></div>

        {progress !== 100 && (
          <div
            className="absolute top-1/2 transform -translate-y-1/2 transition-all duration-500 ease-out"
            style={{
              left: `calc(${progress}% - 2rem)`, // Positions the icon at the end of the bar
            }}
          >
            <FaRunning className="text-2xl text-white animate-pulse" />
          </div>
        )}

        {progress === 100 && (
          <div className="absolute top-1/2 transform -translate-y-1/2 right-0 mr-2">
            <FaFlagCheckered className="text-2xl text-white" />
          </div>
        )}
      </div>
      <p className="text-xl text-center mt-4 font-medium text-gray-700">
        {progress.toFixed(0)}% completed today!
      </p>

      <p className="text-lg text-center mt-2 text-gray-600 tracking-widest">
        {currentQuote}
      </p>
    </div>
  );
};

export default ProgressBar;
