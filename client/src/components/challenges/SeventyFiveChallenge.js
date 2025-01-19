import React, { useState } from "react";
import ProgressBar from "./helperComponents/ProgressBar";
import DailyChecklist from "./helperComponents/DailyChecklist";
import CalendarView from "./helperComponents/CalendarView";

import image from "../../Assets/Untitled.jpeg";

const SeventyFiveChallenge = () => {
  const [progress, setProgress] = useState(0);
  const [history, setHistory] = useState(
    Array(10).fill(true).concat(Array(65).fill(false))
  );
  const startDate = "2024-12-04";

  console.log(history);
  const [dailyTasks, setDailyTasks] = useState({
    workoutSession: false,
    updateGithub: false,
    drinkWater: false,
    readBook: false,
    runningExercise: false,
  });

  const handleTaskCompletion = (task) => {
    const updatedTasks = { ...dailyTasks, [task]: !dailyTasks[task] };
    setDailyTasks(updatedTasks);

    const completedTasks = Object.values(updatedTasks).filter(
      (completed) => completed
    ).length;
    setProgress((completedTasks / Object.keys(updatedTasks).length) * 100);
  };

  const markDayComplete = () => {
    const currentDay = history.findIndex((day) => day === false);
    if (currentDay !== -1) {
      const updatedHistory = [...history];
      updatedHistory[currentDay] = true;
      setHistory(updatedHistory);
    }
  };

  return (
    <div className="min-h-screen p-8">
      <div className="flex flex-col lg:flex-row items-center lg:justify-center lg:space-x-8 mb-5">
        <div className="relative w-80 h-80 shadow-lg">
          <img
            src={image}
            alt="cover art"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold text-white text-center">
            75-Hard
          </h1>
        </div>
        <div className="mt-6 lg:mt-0 w-full lg:w-auto">
          <DailyChecklist
            tasks={dailyTasks}
            onTaskToggle={handleTaskCompletion}
          />
        </div>
      </div>
      <ProgressBar progress={progress} />
      <button
        onClick={markDayComplete}
        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md shadow-md transition duration-300 block mx-auto mt-4"
      >
        Complete Day
      </button>
      <CalendarView history={history} startDate={startDate} />
    </div>
  );
};

export default SeventyFiveChallenge;
