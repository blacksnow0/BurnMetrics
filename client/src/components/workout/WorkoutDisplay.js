import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuthContext } from "../../hooks/useAuthContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

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

  const handleDelete = async (workoutId) => {
    const originalWorkouts = [...workouts];

    // Optimistically update the UI
    setWorkouts((prevWorkouts) =>
      prevWorkouts.filter((workout) => workout._id !== workoutId)
    );
    try {
      await axios.delete(
        `http://localhost:5001/api/workouts/delete/${workoutId}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      console.log("Workout Deleted Sucessfully");
    } catch (error) {
      console.log(error, "Error deleting workout");
      setWorkouts(originalWorkouts);
    }
  };

  if (loading) {
    return <div className="text-center py-5">Loading workouts...</div>;
  }

  if (!workouts.length) {
    return (
      <div className="text-center py-5">
        You have no Workouts
        <button className="m-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md shadow-md">
          <a href="/workouts/create">Create-Workout</a>
        </button>
      </div>
    );
  }

  return (
    <div className="p-5 bg-gray-100">
      {workouts.map((workout) => (
        <div key={workout._id} className=" p-6 mb-8  ">
          {/* Workout Title Section */}
          <div className="relative flex justify-between mb-6  p-4 rounded-lg bg-gradient-to-r from-purple-100 via-yellow-50 to-white">
            <div>
              <h2 className="text-xl font-extrabold text-orange-500">
                {workout.title}
              </h2>
              {/* Created At Date */}
              <div>
                <span className="text-lg text-orange-500 font-semibold">
                  {new Date(workout.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
            {/* Delete Button */}
            <button
              onClick={() => handleDelete(workout._id)}
              className=" text-orange-500 px-4 rounded-lg shadow hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-red-300"
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>

          {/* Days in a Slider */}
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
          >
            {workout.days.map((day, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gradient-to-br from-green-100 to-blue-50 rounded-lg p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-green-700 flex items-center">
                      <span className="mr-2">☀️</span>
                      {day.title || `Day ${index + 1}`}
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    {day.exercises.map((exercise, exerciseIndex) => (
                      <li
                        key={exerciseIndex}
                        className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md border-l-4 border-green-300 hover:border-green-500 transition-all"
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">🏋️</span>
                          <span className="text-gray-800 font-semibold">
                            {exercise.name}
                          </span>
                        </div>
                        <div className="text-sm text-gray-500">
                          {exercise.sets} sets × {exercise.reps} reps
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </div>
  );
};

export default WorkoutDisplay;
