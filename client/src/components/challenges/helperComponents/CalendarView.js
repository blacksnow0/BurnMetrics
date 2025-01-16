import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CalendarView.css";

const CalendarView = ({ history, startDate }) => {
  const [clickedDate, setClickedDate] = useState(null);
  const start = new Date(startDate);
  start.setHours(0, 0, 0, 0);

  const streakDays = history
    .map((status, index) => {
      if (status) {
        const streakDate = new Date(start);
        streakDate.setDate(start.getDate() + index);
        return streakDate;
      }
      return null;
    })
    .filter((date) => date !== null);

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      const isStreakDay = streakDays.some(
        (streakDate) =>
          streakDate.getFullYear() === date.getFullYear() &&
          streakDate.getMonth() === date.getMonth() &&
          streakDate.getDate() === date.getDate()
      );

      if (isStreakDay) {
        return "streak-day";
      }
    }
    return null;
  };

  const handleClickedTile = (date) => {
    setClickedDate(date);
  };

  return (
    <div className="calendar-container">
      <h2 className="text-2xl font-bold text-center mb-4">Challenge Streak</h2>
      <Calendar tileClassName={tileClassName} onClickDay={handleClickedTile} />
      {clickedDate && (
        <p className="text-center mt-4 text-lg font-semibold">
          Selected Date: {clickedDate.toDateString()}
        </p>
      )}
    </div>
  );
};

export default CalendarView;
