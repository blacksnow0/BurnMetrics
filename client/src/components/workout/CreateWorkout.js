import React, { useState } from "react";

const CreateWorkout = () => {
  const [workout, setWorkout] = useState({
    exercise: "",
    reps: "",
    sets: "",
    weight: "",
    duration: "",
    notes: "",
  });

  const [exercises, setExercises] = useState([]); // List of added exercises

  const exercisesOptions = [
    "Bench Press",
    "Squats",
    "Deadlift",
    "Lat Pulldown",
    "Dumbell Shrugs",
    "Single-Arm Cable Rows",
    "Straight-Arm Pulldown",
    "Pull-Ups",
    "Push-Ups",
    "Running",
    "Cycling",
    "Plank",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkout((prevWorkout) => ({
      ...prevWorkout,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!workout.exercise || !workout.reps) {
      alert("Please fill in the required fields!");
      return;
    }

    // Add current exercise to the list
    setExercises((prevExercises) => [...prevExercises, workout]);

    // Reset the form
    setWorkout({
      exercise: "",
      reps: "",
      sets: "",
      weight: "",
      duration: "",
      notes: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center ">
      {/* Workout Form */}
      <form
        onSubmit={handleSubmit}
        className="lg:bg-white p-8 shadow-md rounded-md w-full max-w-md mb-8"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Create Workout</h2>

        {/* Exercise Selection */}
        <div className="mb-4">
          <label
            htmlFor="exercise"
            className="block text-sm font-semibold mb-1"
          >
            Exercise
          </label>
          <select
            name="exercise"
            value={workout.exercise}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-500"
            required
          >
            <option value="">Select an Exercise</option>
            {exercisesOptions.map((exercise, index) => (
              <option key={index} value={exercise}>
                {exercise}
              </option>
            ))}
          </select>
        </div>

        {/* Reps */}
        <div className="mb-4">
          <label htmlFor="reps" className="block text-sm font-semibold mb-1">
            Reps
          </label>
          <input
            type="number"
            name="reps"
            value={workout.reps}
            onChange={handleChange}
            placeholder="Enter number of reps"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>

        {/* Sets */}
        <div className="mb-4">
          <label htmlFor="sets" className="block text-sm font-semibold mb-1">
            Sets
          </label>
          <input
            type="number"
            name="sets"
            value={workout.sets}
            onChange={handleChange}
            placeholder="Enter number of sets"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>

        {/* Weight */}
        <div className="mb-4">
          <label htmlFor="weight" className="block text-sm font-semibold mb-1">
            Weight (optional)
          </label>
          <input
            type="number"
            name="weight"
            value={workout.weight}
            onChange={handleChange}
            placeholder="Enter weight in kg"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Duration */}
        <div className="mb-4">
          <label
            htmlFor="duration"
            className="block text-sm font-semibold mb-1"
          >
            Duration (optional)
          </label>
          <input
            type="text"
            name="duration"
            value={workout.duration}
            onChange={handleChange}
            placeholder="Enter duration (e.g., 30 mins)"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Notes */}
        <div className="mb-4">
          <label htmlFor="notes" className="block text-sm font-semibold mb-1">
            Notes (optional)
          </label>
          <textarea
            name="notes"
            value={workout.notes}
            onChange={handleChange}
            placeholder="Additional notes or goals"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-500"
            rows="3"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-md shadow-md transition duration-300"
        >
          Add Exercise
        </button>
      </form>

      {/* List of Exercises */}
      <div className="lg:bg-white p-6 shadow-md rounded-md w-full max-w-md mb-5">
        <h3 className="text-lg font-bold mb-4">Your Exercises for the Day</h3>
        {exercises.length > 0 ? (
          <ul className="space-y-4">
            {exercises.map((exercise, index) => (
              <li
                key={index}
                className="flex flex-col border p-4 rounded-md bg-gray-50 shadow-sm"
              >
                <p>
                  <strong>Exercise:</strong> {exercise.exercise}
                </p>
                <p>
                  <strong>Reps:</strong> {exercise.reps}
                </p>
                <p>
                  <strong>Sets:</strong> {exercise.sets}
                </p>

                {exercise.weight && (
                  <p>
                    <strong>Weight:</strong> {exercise.weight} kg
                  </p>
                )}
                {exercise.duration && (
                  <p>
                    <strong>Duration:</strong> {exercise.duration}
                  </p>
                )}
                {exercise.notes && (
                  <p>
                    <strong>Notes:</strong> {exercise.notes}
                  </p>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-center">No exercises added yet.</p>
        )}
      </div>
    </div>
  );
};

export default CreateWorkout;
