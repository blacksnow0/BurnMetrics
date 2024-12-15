import React from "react";

const WorkoutPlanDisplay = ({ workoutPlan }) => {
  return (
    <div className="workout-plan-display">
      <h2 className="text-xl font-bold mb-4">Your Tailored Workout Plan</h2>
      {workoutPlan.map((day, index) => (
        <div key={index} className="mb-2">
          <strong>{day.day}:</strong> {day.activity}
        </div>
      ))}
    </div>
  );
};

export default WorkoutPlanDisplay;
