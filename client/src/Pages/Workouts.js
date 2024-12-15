import React, { useState } from "react";
import WorkoutPlanSelector from "../components/workout/WorkoutPlanSelector";
import QuestionsComponent from "../components/workout/QuestionsComponent";
import WorkoutPlanDisplay from "../components/workout/WorkoutPlanDisplay";

const Workouts = () => {
  const [fitnessGoal, setFitnessGoal] = useState("");
  const [workoutPlan, setWorkoutPlan] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});

  const generatePlan = (answers) => {
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
    <div className="workout-container flex min-h-screen justify-center h-full text-center items-center ">
      {!fitnessGoal && <WorkoutPlanSelector setFitnessGoal={setFitnessGoal} />}
      {fitnessGoal && !workoutPlan && (
        <QuestionsComponent
          fitnessGoal={fitnessGoal}
          setUserAnswers={setUserAnswers}
          generatePlan={generatePlan}
        />
      )}
      {workoutPlan && <WorkoutPlanDisplay workoutPlan={workoutPlan} />}
    </div>
  );
};

export default Workouts;
