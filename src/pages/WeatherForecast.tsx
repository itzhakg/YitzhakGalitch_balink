import React from 'react';
import {useSelector} from "react-redux";
import {selectWeatherState} from "../store/weatherStore/weatherSelectors";
import {DailyForecast} from "../components/DailyForecast";

export const WeatherForecast = () => {
    
    const weatherForecast = useSelector(selectWeatherState);
    
    if (!weatherForecast) return null;
    return (
        <div className="weather-forecast">
            {
                weatherForecast
                    .consolidated_weather
                    .slice(0, 5)
                    .map((dailyForecast, index) => <DailyForecast {...dailyForecast} key={index}/>)
            }
        </div>
    
    )
}

