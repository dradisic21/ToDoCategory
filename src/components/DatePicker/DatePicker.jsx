import React, { useState } from 'react';
import { Button } from "../UI/Button"
import "../../styles/DatePicker.scss";

export function DatePicker() {
  const daysInMonth = [];
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);
  const currentMonth = selectedDate.getMonth();
  const currentYear = selectedDate.getFullYear();

  const daysInCurrentMonth = new Date(
    currentYear,
    currentMonth + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  for (let i = 1; i <= daysInCurrentMonth; i++) {
    daysInMonth.push(i);
  }

  const renderDays = () => {
    return [...Array(firstDayOfMonth).fill(null), ...daysInMonth].map((day, index) => (
      <div key={index} className={`day ${day === today.getDate() && currentMonth === today.getMonth() ? 'today' : ''}`}>
        <p>{day}</p>
      </div>
    ));
  }

  const goToPreviousMonth = () => {
    setSelectedDate(new Date(currentYear, currentMonth - 1, 1));
  }

  const goToNextMonth = () => {
    setSelectedDate(new Date(currentYear, currentMonth + 1, 1));
  }

  return (
    <div className="date-picker_container">
      <div className="calendar">

        <div className="header">
          <Button name="&lt;" className="previous-month" onClick={goToPreviousMonth} />
          <h2>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long' }).format(selectedDate)}</h2>
          <Button name="&gt;" className="next-month" onClick={goToNextMonth} />
        </div>

        <div className="daysOfWeek">
          {daysOfWeek.map((day) => (
            <div key={day} className="dayOfWeek">
              {day}
            </div>
          ))}
        </div>
        <div className="days">
          {renderDays()}
        </div>
      </div>
    </div>
  );
}
