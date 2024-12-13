import React, { useState } from "react";
import ProgressBar from "../components/ProgressBar";
import DailyChecklist from "../components/DailyChecklist";
import CalendarView from "../components/CalenderView";

const Challenges = () => {
  const [progress, setProgress] = useState(0);
  const [history, setHistory] = useState(Array(75).fill(false));
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
    <div className="min-h-screen p-8" style={{ borderTop: "1px solid black" }}>
      <h1 className="text-4xl font-bold text-center mb-4 tracking-widest">
        75-Hard
      </h1>
      <ProgressBar progress={progress} />
      <DailyChecklist tasks={dailyTasks} onTaskToggle={handleTaskCompletion} />
      <button
        onClick={markDayComplete}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 block mx-auto"
      >
        Complete Day
      </button>
      <CalendarView history={history} />
    </div>
  );
};

export default Challenges;
