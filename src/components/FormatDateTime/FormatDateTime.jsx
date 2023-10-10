import React from 'react';
import "../../styles/FormatDateTime.scss"

const options = {
  day: '2-digit',
  month: 'short',
  hour: '2-digit',
  minute: '2-digit',
};

export function FormatDateTime({ created }) {
  const dateObject = new Date(created); 

  const formattedDate = dateObject.toLocaleString('hr-HR', options);

  const [date, month, time] = formattedDate.split(' ');

  return (
    <>
      <span>{date}</span>
      <div className="month">{month}</div>
      <div className="time">{time}</div>
    </>
  );
}

export function DayDateMonth({ created }) {
  const dateObject = new Date(created);
  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  };
  const formattedDate = dateObject.toLocaleString('hr-HR', options);
  const [weekday, day, month] = formattedDate.split(' ')
  const formatWeekday = weekday.slice(0, 3).toUpperCase().replace(',', '');
  const formatDay = day.replace('.', '');
  const formatMonth = month.charAt(0).toUpperCase() + month.slice(0, -1);

  return (
    <div className="day-date-month">
      <div className="weekday">{formatWeekday}</div>
      <div className="day">{formatDay}</div>
      <div className="header-month">{formatMonth}</div>
    </div>
  );
}