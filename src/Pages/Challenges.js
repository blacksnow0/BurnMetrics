import React, { useState } from "react";
import ProgressBar from "../components/ProgressBar";
import DailyChecklist from "../components/DailyChecklist";
import CalendarView from "../components/CalendarView";

const Challenges = () => {
  const [progress, setProgress] = useState(0);
  const [history, setHistory] = useState(
    Array(10).fill(true).concat(Array(65).fill(false))
  );
  const startDate = "2024-12-04";

  console.log(history);
  const [dailyTasks, setDailyTasks] = useState({
    "Workout 1": false,
    "Workout 2": false,
    "Drink Water": false,
    "Read 10 Pages": false,
    "Follow a Diet": false,
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
      <h1 className="text-4xl font-bold text-center mb-4 lg:mb-16 tracking-widest">
        75-Hard
      </h1>
      <ProgressBar progress={progress} />
      <DailyChecklist tasks={dailyTasks} onTaskToggle={handleTaskCompletion} />
      <button
        onClick={markDayComplete}
        className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 px-6 rounded-md shadow-md transition duration-300 block mx-auto mt-4"
      >
        Complete Day
      </button>
      <CalendarView history={history} startDate={startDate} />
    </div>
  );
};

export default Challenges;
