import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

const CreateWorkout = () => {
  const [days, setDays] = useState([
    { title: "Day 1", exercises: [], selectedBodyPart: "" },
  ]);

  const [showExerciseOptions, setShowExerciseOptions] = useState(false);

  const exercisesByBodyPart = {
    Chest: ["Bench Press", "Push-Ups", "Chest Fly"],
    Legs: ["Squats", "Deadlift", "Lunges"],
    Back: ["Pull-Ups", "Lat Pulldown", "Single-Arm Cable Rows"],
    Arms: ["Bicep Curls", "Tricep Extensions", "Dumbbell Shrugs"],
    Core: ["Plank", "Sit-Ups", "Leg Raises"],
    Cardio: ["Running", "Cycling", "Jump Rope"],
  };

  const handleAddDay = () => {
    setDays((prevDays) => [
      ...prevDays,
      {
        title: `Day ${prevDays.length + 1}`,
        exercises: [],
        selectedBodyPart: "",
      },
    ]);
  };

  const handleBodyPartChange = (dayIndex, bodyPart) => {
    setDays((prevDays) => {
      setShowExerciseOptions(!showExerciseOptions);
      const updatedDays = [...prevDays];
      updatedDays[dayIndex].selectedBodyPart = bodyPart;
      return updatedDays;
    });
  };

  const handleAddExercise = (dayIndex, exerciseName) => {
    setDays((prevDays) => {
      const updatedDays = [...prevDays];
      const day = updatedDays[dayIndex];

      if (!day.exercises.find((exercise) => exercise.name === exerciseName)) {
        day.exercises.push({ name: exerciseName });
      }

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

              {/* Select Body Part */}
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Select Body Part
                </label>
                <select
                  onChange={(e) => handleBodyPartChange(index, e.target.value)}
                  className="w-full px-4 py-2 border rounded-md mb-4"
                  value={day.selectedBodyPart}
                >
                  <option value="">Select a Body Part</option>
                  {Object.keys(exercisesByBodyPart).map((bodyPart, idx) => (
                    <option key={idx} value={bodyPart}>
                      {bodyPart}
                    </option>
                  ))}
                </select>
              </div>

              {/* Exercise List for Selection */}
              {day.selectedBodyPart && (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm font-semibold">
                      Select Exercise
                    </label>
                    <button
                      onClick={() =>
                        setShowExerciseOptions(!showExerciseOptions)
                      }
                      className={`${
                        showExerciseOptions
                          ? "bg-orange-600 hover:bg-orange-700"
                          : "bg-orange-500 hover:bg-orange-600"
                      } text-white px-3 py-1 rounded-md text-sm`}
                    >
                      <FontAwesomeIcon
                        icon={showExerciseOptions ? faChevronUp : faChevronDown}
                      />
                    </button>
                  </div>

                  {showExerciseOptions && (
                    <div className="grid grid-cols-1 gap-2 mb-4">
                      {exercisesByBodyPart[day.selectedBodyPart].map(
                        (exercise, idx) => (
                          <div
                            key={idx}
                            onClick={() => handleAddExercise(index, exercise)}
                            className="cursor-pointer bg-gray-100 hover:bg-gray-200 text-gray-800 p-2 rounded-md shadow-sm"
                          >
                            {exercise}
                          </div>
                        )
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Exercise List Display */}
              {day.exercises.length > 0 ? (
                <ul className="space-y-2 mt-4">
                  {day.exercises.map((exercise, idx) => (
                    <li
                      key={idx}
                      className="flex items-center justify-between bg-gray-100 p-2 rounded-md shadow-sm"
                    >
                      {exercise.name}
                      <button className="text-orange-500 hover:text-orange-600">
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 mt-4">No exercises added yet.</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreateWorkout;
