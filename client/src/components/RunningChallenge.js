import React, { useState } from "react";
import ProgressBar from "../components/ProgressBar";
import CalendarView from "../components/CalendarView";

const RunningChallenge = () => {
  const totalTarget = 100; // 100 km target
  const [dailyDistances, setDailyDistances] = useState(Array(7).fill(0)); // Array to store distance per day
  const [history, setHistory] = useState(Array(7).fill(false)); // Completion status for each day
  const [totalDistance, setTotalDistance] = useState(0);

  const handleDistanceChange = (index, value) => {
    const updatedDistances = [...dailyDistances];
    updatedDistances[index] = parseFloat(value) || 0; // Parse input to float, fallback to 0
    setDailyDistances(updatedDistances);

    // Calculate total distance
    const sum = updatedDistances.reduce((acc, distance) => acc + distance, 0);
    setTotalDistance(sum);

    // Update completion status for the day
    const updatedHistory = updatedDistances.map((distance) => distance > 0);
    setHistory(updatedHistory);
  };

  const progressPercentage = (totalDistance / totalTarget) * 100;

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-8 tracking-widest">
        100 KM in a Week Challenge
      </h1>

      {/* Progress Bar */}
      <ProgressBar progress={progressPercentage} />

      {/* Daily Input Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
        {dailyDistances.map((distance, index) => (
          <div
            key={index}
            className="p-4 border rounded-md shadow-md bg-white text-center"
          >
            <h3 className="text-lg font-semibold mb-2">Day {index + 1}</h3>
            <input
              type="number"
              value={distance}
              onChange={(e) => handleDistanceChange(index, e.target.value)}
              placeholder="Enter km"
              className="w-full p-2 border rounded-md text-center focus:outline-none"
              min="0"
            />
            {history[index] && (
              <p className="text-green-500 mt-2 font-medium">Day Complete!</p>
            )}
          </div>
        ))}
      </div>

      {/* Total Distance and Summary */}
      <div className="text-center mt-4">
        <p className="text-lg font-semibold mb-2">
          Total Distance Covered:{" "}
          <span className="text-orange-500">{totalDistance.toFixed(2)} km</span>
        </p>
        <p className="text-gray-600">
          Target: <span className="font-medium">{totalTarget} km</span>
        </p>
      </div>

      {/* Calendar View */}
      <CalendarView history={history} startDate={new Date().toISOString()} />
    </div>
  );
};

export default RunningChallenge;
