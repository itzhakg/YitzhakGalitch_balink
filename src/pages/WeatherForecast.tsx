import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchCityForecast} from "../store/weatherStore/weatherSlice";
import {selectWeatherState} from "../store/weatherStore/weatherSelectors";
import {DailyForecast} from "../components/DailyForecast";
import moment from "moment";

export const WeatherForecast = () => {
    const dispatch = useDispatch();
    
    const weatherForecast = useSelector(selectWeatherState);
    
    
    useEffect(()=>{
        dispatch(fetchCityForecast(2459115));
    }, [])
    
    if(!weatherForecast) return null;
    return (
        <div className="weather">
            <div className="weather-header">
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
                <div className="forecast-times">
                    <div className="forecast-time">
                        <div className="time__name">Time:</div>
                        <div className="time__value">{moment(weatherForecast.time).format("HH:mm a")}</div>
                    </div>
                    <div className="forecast-time">
                        <div className="time__name">Sunrise:</div>
                        <div className="time__value">{moment(weatherForecast.sun_rise).format("HH:mm a")}</div>
                    </div>
                    <div className="forecast-time">
                        <div className="time__name">Sunset:</div>
                        <div className="time__value">{moment(weatherForecast.sun_set).format("HH:mm a")}</div>
                    </div>
                </div>
            </div>
            
            <div className="weather-forecast">
                {
                    weatherForecast
                        .consolidated_weather
                        .slice(0,5)
                        .map((dailyForecast, index) => <DailyForecast {...dailyForecast} key={index}/>)
                }
            </div>
        
        </div>)
}

