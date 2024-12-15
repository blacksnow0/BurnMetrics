import React from "react";

const WorkoutPlanSelector = ({ setFitnessGoal }) => {
  const fitnessGoals = [
    {
      id: "weightLoss",
      title: "Weight Loss",
      description: "Burn fat and stay active",
    },
    {
      id: "generalFitness",
      title: "General Fitness",
      description: "Stay healthy and energized",
    },
    {
      id: "muscleBuilding",
      title: "Muscle Building",
      description: "Build strength and size",
    },
  ];

  return (
    <div className="workout-selector">
      <h2 className="text-2xl font-bold text-center mb-4">
        Choose Your Fitness Goal
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {fitnessGoals.map((goal) => (
          <div
            key={goal.id}
            className="border rounded-md p-4 hover:bg-gray-100 cursor-pointer"
            onClick={() => setFitnessGoal(goal.id)}
          >
            <h3 className="text-lg font-semibold">{goal.title}</h3>
            <p className="text-sm text-gray-600">{goal.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutPlanSelector;
