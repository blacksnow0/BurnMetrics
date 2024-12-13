import React, { useState } from "react";

const CalendarView = ({ history }) => {
  const [startIndex, setStartIndex] = useState(0);
  const daysPerPage = 30;

  // Get the days to display
  const currentDays = history.slice(startIndex, startIndex + daysPerPage);

  // Handlers for navigation
  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - daysPerPage);
    }
  };

  const handleNext = () => {
    if (startIndex + daysPerPage < history.length) {
      setStartIndex(startIndex + daysPerPage);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Challenge Calendar
      </h2>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2">
        {currentDays.map((day, index) => (
          <div
            key={startIndex + index}
            className={`h-8 w-8 flex items-center justify-center rounded-full ${
              day ? "bg-green-500" : "bg-gray-300"
            }`}
          >
            {startIndex + index + 1}
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrevious}
          disabled={startIndex === 0}
          className={`px-4 py-2 rounded-lg ${
            startIndex === 0
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 text-white"
          }`}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={startIndex + daysPerPage >= history.length}
          className={`px-4 py-2 rounded-lg ${
            startIndex + daysPerPage >= history.length
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 text-white"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CalendarView;
