import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../../styles/Weather.scss"

export function Weather () {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Osijek,hr&units=metric&APPID=51371f1456e5a7c9a35822f09a6fb7cf`)
      .then(response => {
        setWeather(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  if (!weather) {
    return <div>Loading...</div>;
  }
  const temperature = Math.round(weather.main.temp);
  const weatherDescription = weather.weather[0].description.toUpperCase();
  const weatherIcon = weather.weather[0].icon;
 
  return (
    <div className="weather-container">
      <div className="temp-container">
        <div className='imgDesc'>
          <img src={`http://openweathermap.org/img/w/${weatherIcon}.png`} alt="Weather Icon" /> 
          
        </div>
        <div className='name-container'>
          <p>{weather.name}</p>
          <p className='temp'>{temperature}°C</p>
          <p>{weatherDescription}</p>
        </div>
      </div>
      
    </div>
  );
};


