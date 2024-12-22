import React, { useState } from "react";
import WorkoutPlanSelector from "../components/workout/WorkoutPlanSelector";
import QuestionsComponent from "../components/workout/QuestionsComponent";
import WorkoutPlanDisplay from "../components/workout/WorkoutPlanDisplay";
import CreateWorkout from "../components/workout/CreateWorkout";

const Workouts = () => {
  const [fitnessGoal, setFitnessGoal] = useState("");
  const [workoutPlan, setWorkoutPlan] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});
  const [createOwnWorkout, setCreateOwnWorkout] = useState(false);

  const generatePlan = (answers) => {
    console.log(userAnswers);
    let plan = [];
    if (fitnessGoal === "weightLoss") {
      plan = [
        { day: "Monday", activity: "30 minutes Cardio + Light Strength" },
        { day: "Tuesday", activity: "Rest or Yoga" },
      ];
    } else if (fitnessGoal === "generalFitness") {
      plan = [
        { day: "Monday", activity: "20 minutes Cardio + Yoga" },
        { day: "Tuesday", activity: "Strength Training" },
      ];
    } else if (fitnessGoal === "muscleBuilding") {
      plan = [
        { day: "Monday", activity: "Push (Chest, Shoulders, Triceps)" },
        { day: "Tuesday", activity: "Pull (Back, Biceps)" },
      ];
    }
    setWorkoutPlan(plan);
  };

  return (
    <div className="flex min-h-screen justify-center items-center text-center">
      {/* Select Fitness Goal */}
      {!fitnessGoal && <WorkoutPlanSelector setFitnessGoal={setFitnessGoal} />}

      {/* Choose between generating a plan or creating a workout */}
      {fitnessGoal && !workoutPlan && !createOwnWorkout && (
        <div className="flex flex-col items-center">
          <QuestionsComponent
            fitnessGoal={fitnessGoal}
            setUserAnswers={setUserAnswers}
            generatePlan={generatePlan}
          />
          <p className="text-gray-500 mt-4">Or</p>
          <button
            onClick={() => setCreateOwnWorkout(true)}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md mt-2"
          >
            Create Your Own Workout
          </button>
        </div>
      )}

      {/* Display Generated Workout Plan */}
      {workoutPlan && <WorkoutPlanDisplay workoutPlan={workoutPlan} />}

      {/* Create Your Own Workout */}
      {createOwnWorkout && (
        <div className="w-full max-w-4xl">
          <CreateWorkout />
        </div>
      )}
    </div>
  );
};

export default Workouts;
