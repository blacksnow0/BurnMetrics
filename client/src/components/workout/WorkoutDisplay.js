import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuthContext } from "../../hooks/useAuthContext";

const WorkoutDisplay = () => {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { user } = useAuthContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      if (user && user.token) {
        try {
          const response = await axios.get(
            "http://localhost:5001/api/workouts/getWorkout",
            {
              headers: {
                Authorization: `Bearer ${user.token}`,
              },
            }
          );
          setWorkouts(response.data);
          setLoading(false);
        } catch (error) {
          console.error("Failed to fetch workouts:", error);
          setLoading(false);
        }
      }
    };
    fetchWorkouts();
  }, [user]);

  if (loading) {
    return <div className="text-center py-5">Loading workouts...</div>;
  }

  if (!workouts.length) {
    return <div className="text-center py-5">No workouts found.</div>;
  }

  return (
    <div className="p-5">
      {workouts.map((workout) => (
        <div
          key={workout._id}
          className="border border-gray-300 rounded-lg shadow-md p-4 mb-5 "
        >
          <h2 className="text-xl font-bold text-gray-800 mb-3">
            {workout.title}
          </h2>
          <p className="text-gray-600 mb-3">{`Created on: ${new Date(
            workout.createdAt
          ).toLocaleDateString()}`}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {workout.days.map((day, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-md p-3 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-md font-semibold text-blue-500 mb-2">
                  {day.title || "Untitled Day"}
                </h3>
                <ul className="space-y-2">
                  {day.exercises.map((exercise, exerciseIndex) => (
                    <li
                      key={exerciseIndex}
                      className="flex justify-between items-center text-gray-700"
                    >
                      <div>
                        <span className="font-medium">{exercise.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">
                        {exercise.sets} sets × {exercise.reps} reps
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
            Delete Workout
          </button>
        </div>
      ))}
    </div>
  );
};

export default WorkoutDisplay;
