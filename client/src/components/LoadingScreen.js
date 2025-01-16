import React from "react";
import loading from "../Assets/tenor.gif";

const LoadingScreen = ({ message = "Loading..." }) => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="text-center">
        <img
          src={loading}
          alt="Loading"
          className="max-w-xs max-h-xs" // You can adjust the size here
        />
        <p className="mt-4 text-lg font-semibold text-gray-700">{message}</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
