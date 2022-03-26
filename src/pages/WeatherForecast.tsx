import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchCityForecast} from "../store/weatherStore/weatherSlice";
import {selectWeatherState} from "../store/weatherStore/weatherSelectors";
import {DailyForecast} from "../components/DailyForecast";

export const WeatherForecast = () => {
    const dispatch = useDispatch();
    
    const weatherForecast = useSelector(selectWeatherState);
    
    
    useEffect(()=>{
        dispatch(fetchCityForecast(2459115));
    }, [])
    
    if(!weatherForecast) return null;
    return (
        <div className="weather">
            <div className="weather-city">
                    <span className="weather-city__title">
                        <span className="weather-city__name">
                        { weatherForecast.title }
                    </span>
                    <span className="weather-city__region">
                        { weatherForecast.parent.title }
                    </span>
                    </span>
            
            </div>
            <div className="weather-forecast">
                {
                    weatherForecast
                        .consolidated_weather
                        .slice(0,5)
                        .map(dailyForecast => <DailyForecast {...dailyForecast}/>)
                }
            </div>
        
        </div>)
}

