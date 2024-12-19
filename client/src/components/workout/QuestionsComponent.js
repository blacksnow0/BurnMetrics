import React, { useState } from "react";

const QuestionsComponent = ({ fitnessGoal, setUserAnswers, generatePlan }) => {
  const [answers, setAnswers] = useState({});

  const questions = {
    weightLoss: [
      {
        id: "workoutType",
        question: "What type of workouts do you prefer?",
        options: ["Cardio-Focused", "Mixed Workouts"],
      },
      {
        id: "weeklyCommitment",
        question: "How many days can you work out?",
        options: ["3", "4", "5", "6"],
      },
    ],
    generalFitness: [
      {
        id: "activities",
        question: "What activities do you enjoy?",
        options: ["Yoga", "Pilates", "Cardio Mix"],
      },
      {
        id: "intensity",
        question: "What intensity level do you prefer?",
        options: ["Low", "Medium", "High"],
      },
    ],
    muscleBuilding: [
      {
        id: "trainingSplit",
        question: "What training split do you prefer?",
        options: ["Push-Pull-Legs", "Upper-Lower Split", "Full Body"],
      },
      {
        id: "experienceLevel",
        question: "What is your experience level?",
        options: ["Beginner", "Intermediate", "Advanced"],
      },
    ],
  };

  const handleAnswerChange = (questionId, answer) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmit = () => {
    setUserAnswers(answers);
    generatePlan(answers); // Mocked function to generate the plan
  };

  return (
    <div className="questions-container">
      <h2 className="text-xl font-bold mb-4">Answer a few questions</h2>
      {questions[fitnessGoal].map((q) => (
        <div key={q.id} className="mb-4">
          <p className="font-semibold">{q.question}</p>
          <div className="flex gap-2 mt-2">
            {q.options.map((option) => (
              <button
                key={option}
                className={`px-4 py-2 border rounded ${
                  answers[q.id] === option
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100"
                }`}
                onClick={() => handleAnswerChange(q.id, option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ))}
      <button
        className="mt-4 px-4 py-2 font-semibold bg-orange-500 hover:bg-orange-600 text-white rounded"
        onClick={handleSubmit}
      >
        Generate Plan
      </button>
    </div>
  );
};

export default QuestionsComponent;
