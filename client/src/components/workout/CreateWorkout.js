import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { useAuthContext } from "../../hooks/useAuthContext";

const CreateWorkout = () => {
  const [title, setTitle] = useState("");
  const [days, setDays] = useState([
    {
      title: "Day 1",
      exercises: [],
      selectedBodyPart: "",
      showExerciseOptions: false,
    },
  ]);

  const [message, setMessage] = useState("");
  const { user } = useAuthContext();

  const exercisesByBodyPart = {
    Chest: [
      "Barbell Bench Press",
      "Incline Dumbbell Press",
      "Cable Chest Fly",
      "Push-Ups (Wide-Grip)",
      "Dips (Chest-Focused)",
    ],
    Legs: [
      "Barbell Back Squat",
      "Romanian Deadlift",
      "Walking Lunges",
      "Leg Press Machine",
      "Bulgarian Split Squat",
    ],
    Back: [
      "Pull-Ups (Overhand Grip)",
      "Barbell Deadlift",
      "Seated Cable Rows",
      "Bent-Over Barbell Rows",
      "Lat Pulldown (Wide-Grip)",
    ],
    Arms: [
      "Dumbbell Bicep Curls",
      "Tricep Dips on Parallel Bars",
      "Hammer Curls (Neutral Grip)",
      "Overhead Tricep Extension (Dumbbell)",
      "EZ-Bar Skull Crushers",
    ],
    Core: [
      "Hanging Leg Raises",
      "Russian Twists with Medicine Ball",
      "Ab Wheel Rollouts",
      "Side Plank with Hip Dips",
      "Bicycle Crunches",
    ],
    Cardio: [
      "High-Intensity Interval Training (HIIT)",
      "Treadmill Running (Incline)",
      "Stationary Bike (Sprints)",
      "Rowing Machine",
      "Burpees",
    ],
    FunctionalFitness: [
      "Kettlebell Swings",
      "Battle Ropes",
      "Farmer's Carry",
      "Box Jumps",
      "Wall Balls (Medicine Ball)",
    ],
  };

  const handleAddDay = () => {
    setDays((prevDays) => [
      ...prevDays,
      {
        title: `Day ${prevDays.length + 1}`,
        exercises: [],
        selectedBodyPart: "",
        showExerciseOptions: false,
      },
    ]);
  };

  const toggleExerciseOptions = (dayIndex) => {
    setDays((prevDays) =>
      prevDays.map((day, idx) => {
        if (idx === dayIndex) {
          return { ...day, showExerciseOptions: !day.showExerciseOptions };
        }
        return day; // Keep other days unchanged
      })
    );
  };

  const handleBodyPartChange = (dayIndex, bodyPart) => {
    setDays((prevDays) =>
      prevDays.map((day, idx) => {
        if (idx === dayIndex) {
          return {
            ...day,
            selectedBodyPart: bodyPart,
            showExerciseOptions: !day.showExerciseOptions,
          };
        }
        return day; // Keep other days unchanged
      })
    );
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

  const handleRemoveExercise = (dayIndex, exerciseIndex) => {
    setDays((prevDays) =>
      prevDays.map((day, idx) => {
        if (idx === dayIndex) {
          return {
            ...day,
            exercises: day.exercises.filter(
              (_, exIdx) => exIdx !== exerciseIndex
            ),
          };
        }
        return day;
      })
    );
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5001/api/workouts/create",
        { name: title, days },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      console.log(response);

      // Clear the form (reset days and message)
      setDays([
        {
          title: "Day 1",
          exercises: [],
          selectedBodyPart: "",
          showExerciseOptions: false,
        },
      ]);
      setTitle("");
      setMessage("Workout plan created successfully!");
    } catch (error) {
      console.error(error);
      setMessage("Failed to create workout plan.");
    }
  };

  const handleToggleExercise = (dayIndex, exercise) => {
    const day = days[dayIndex];
    const exerciseIndex = day.exercises.findIndex((e) => e.name === exercise);

    if (exerciseIndex === -1) {
      // Exercise is not in the list, so add it
      handleAddExercise(dayIndex, exercise);
    } else {
      // Exercise is already in the list, so remove it
      handleRemoveExercise(dayIndex, exerciseIndex);
    }
  };

  return (
    <div>
      <div className="min-h-screen  flex flex-col justify-center items-center p-6">
        <h2 className="text-3xl font-semibold text-orange-800 mb-6">
          Create Workout Plan
        </h2>
        <div className="w-full max-w-lg mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Workout Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter your workout plan title"
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <div className="w-full overflow-hidden">
          <div
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:overflow-x-hidden"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {days.map((day, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-5 min-w-full lg:min-w-[280px] transition-all duration-300 hover:shadow-2xl hover:scale-105"
                style={{ scrollSnapAlign: "start" }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {day.title}
                </h3>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Select Body Part
                  </label>
                  <select
                    onChange={(e) =>
                      handleBodyPartChange(index, e.target.value)
                    }
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
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

                {day.selectedBodyPart && (
                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Select Exercise
                      </label>
                      <button
                        onClick={() => toggleExerciseOptions(index)}
                        className={`${
                          day.showExerciseOptions
                            ? "bg-orange-500 hover:bg-orange-600"
                            : "bg-orange-500 hover:bg-orange-600"
                        } text-white px-3 py-2 rounded-md text-sm transition-colors duration-200`}
                      >
                        <FontAwesomeIcon
                          icon={
                            day.showExerciseOptions
                              ? faChevronUp
                              : faChevronDown
                          }
                        />
                      </button>
                    </div>

                    {day.showExerciseOptions && (
                      <div className="grid grid-cols-1 gap-2 mb-4">
                        {exercisesByBodyPart[day.selectedBodyPart].map(
                          (exercise, idx) => {
                            const isAdded = day.exercises.some(
                              (e) => e.name === exercise
                            );

                            return (
                              <div
                                key={idx}
                                onClick={() =>
                                  handleToggleExercise(index, exercise)
                                }
                                className={`cursor-pointer px-4 py-2 rounded-lg shadow-sm transition-all duration-200 ${
                                  isAdded
                                    ? "bg-orange-200 text-gray-700 hover:scale-105 hover:shadow-md"
                                    : "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 hover:scale-105 hover:shadow-md"
                                }`}
                              >
                                {exercise}
                              </div>
                            );
                          }
                        )}
                      </div>
                    )}
                  </div>
                )}

                {day.exercises.length > 0 ? (
                  <ul className="space-y-2 mt-4">
                    {day.exercises.map((exercise, idx) => (
                      <li
                        key={idx}
                        className="flex items-center justify-between bg-gray-100 p-3 rounded-lg shadow-sm hover:bg-gray-200 transition-colors duration-200"
                      >
                        {exercise.name}
                        <button
                          onClick={() => handleRemoveExercise(index, idx)}
                          className="text-red-500 hover:text-red-600"
                        >
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
            <div className="text-center mb-6">
              <button
                onClick={handleAddDay}
                className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white px-6 py-2 rounded-lg shadow-lg transition-colors duration-200"
              >
                Add Day
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={handleSubmit}
            className="bg-gradient-to-r from-green-400 to-green-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-green-600 transition-colors duration-200"
          >
            Submit Workout Plan
          </button>
        </div>

        {message && (
          <div
            className={`mt-6 text-center font-semibold ${
              message.includes("successfully")
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateWorkout;
