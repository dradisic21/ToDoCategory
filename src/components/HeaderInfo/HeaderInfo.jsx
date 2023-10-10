import React, { useState, useEffect } from 'react';
import { DayDateMonth } from "../FormatDateTime/FormatDateTime";
import { Weather } from "../Weather/Weather";
import "../../styles/HeaderInfo.scss";

export function HeaderInfo() {
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        const now = new Date();
        const currentHour = now.getHours();

        switch (true) {
            case currentHour >= 5 && currentHour < 12:
              setGreeting('Good Morning');
              break;
            case currentHour >= 12 && currentHour < 18:
              setGreeting('Good Afternoon');
              break;
            default:
              setGreeting('Good Evening');
              break;
          }
    }, []);

    return(
        <div className="header-container">
            <div className="text-info">
                <h3>{greeting}, Dino</h3>
                <p className="description">Be so good no one can ignore you!</p>
            </div>
            <div className="info">
                <div className="daily-overview_weather">
                    <DayDateMonth created={new Date()} />
                </div>
                <div>
                    <Weather />
                </div>
            </div>
        </div>
    )
}
