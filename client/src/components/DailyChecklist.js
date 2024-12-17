import React from "react";

const getOrdinalSuffix = (day) => {
  if (day > 3 && day < 21) return `${day}th`;
  switch (day % 10) {
    case 1:
      return `${day}st`;
    case 2:
      return `${day}nd`;
    case 3:
      return `${day}rd`;
    default:
      return `${day}th`;
  }
};

const DailyChecklist = ({ tasks, onTaskToggle }) => {
  const today = new Date();
  const day = getOrdinalSuffix(today.getDate());
  const month = today
    .toLocaleString("default", { month: "long" })
    .toUpperCase();
  const year = today.getFullYear();

  const weekday = today
    .toLocaleString("default", { weekday: "long" })
    .toUpperCase();

  return (
    <div className="p-6 lg:mx-24">
      <div className="text-2xl font-medium mb-4 tracking-widest">
        <span>{day}</span>
        <span className="uppercase ml-2">{month}</span>
        <span className="text-orange-600 ml-2">{year}</span>{" "}
      </div>

      <div className="text-lg font-medium mb-4 tracking-widest">
        {weekday} {/* e.g., "Monday" */}
      </div>

      <h2 className="text-2xl font-bold mb-4">Today's Tasks</h2>
      {Object.keys(tasks).map((task, index) => (
        <div key={task} className="flex items-center mb-2">
          <input
            type="checkbox"
            id={`task-${index}`}
            checked={tasks[task]}
            onChange={() => onTaskToggle(task)}
            className="mr-2"
          />
          <label htmlFor={`task-${index}`}>{task}</label>
        </div>
      ))}
    </div>
  );
};

export default DailyChecklist;
