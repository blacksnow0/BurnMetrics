import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const CreateWorkout = () => {
  const [days, setDays] = useState([{ title: "Day 1", exercises: [] }]);

  const exercisesOptions = [
    "Bench Press",
    "Squats",
    "Deadlift",
    "Lat Pulldown",
    "Dumbbell Shrugs",
    "Single-Arm Cable Rows",
    "Straight-Arm Pulldown",
    "Pull-Ups",
    "Push-Ups",
    "Running",
    "Cycling",
    "Plank",
  ];

  const handleAddDay = () => {
    setDays((prevDays) => [
      ...prevDays,
      { title: `Day ${prevDays.length + 1}`, exercises: [] },
    ]);
  };

  const handleAddExercise = (dayIndex, exercise) => {
    setDays((prevDays) => {
      const updatedDays = [...prevDays];
      const updatedDay = { ...updatedDays[dayIndex] };
      updatedDay.exercises = [...updatedDay.exercises, exercise];
      updatedDays[dayIndex] = updatedDay;

      return updatedDays;
    });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4">
      <h2 className="text-2xl font-bold text-center mb-6">
        Create Workout Plan
      </h2>

      {/* Add Day Button */}
      <div className="text-center m-6">
        <button
          onClick={handleAddDay}
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md shadow-md"
        >
          Add Another Day
        </button>
      </div>

      {/* Workout Days Section */}
      <div className="w-full">
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 overflow-x-auto lg:overflow-x-hidden"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {days.map((day, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-md p-4 min-w-full lg:min-w-[280px]"
              style={{ scrollSnapAlign: "start" }}
            >
              <h3 className="text-lg font-bold mb-4">{day.title}</h3>

              <div>
                <label className="block text-sm font-semibold mb-1">
                  Add Exercise
                </label>
                <select
                  onChange={(e) =>
                    e.target.value &&
                    handleAddExercise(index, { name: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-md mb-4"
                >
                  <option value="">Select an Exercise</option>
                  {exercisesOptions.map((exercise, idx) => (
                    <option key={idx} value={exercise}>
                      {exercise}
                    </option>
                  ))}
                </select>
              </div>

              {/* Exercise List */}
              {day.exercises.length > 0 ? (
                <ul className="space-y-2">
                  {day.exercises.map((exercise, idx) => (
                    <li
                      key={idx}
                      className="flex items-center justify-between bg-gray-100 p-2 rounded-md shadow-sm"
                    >
                      {exercise.name}
                      <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md shadow-md">
                        <FontAwesomeIcon icon={faTrash} className="w-3 h-3" />
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No exercises added yet.</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreateWorkout;
