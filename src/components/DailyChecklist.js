import React from "react";

const DailyChecklist = ({ tasks, onTaskToggle }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Today's Tasks</h2>
      {Object.keys(tasks).map((task) => (
        <div key={task} className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={tasks[task]}
            onChange={() => onTaskToggle(task)}
            className="mr-2"
          />
          <label>{task}</label>
        </div>
      ))}
    </div>
  );
};

export default DailyChecklist;
