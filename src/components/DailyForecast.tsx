import React from "react";
import {DailyForecastData} from "../interfaces/weatherApi";
import moment from "moment";
import {weatherApiService} from "../services/weatherApiService";
import {AiOutlineArrowUp} from "react-icons/ai";

export type DayForecastProps = DailyForecastData;

export const DailyForecast = (props: DayForecastProps) => {
    const calendarDay = moment(props.applicable_date)
        .calendar(
            {
                sameDay: '[Today]',
                nextDay: '[Tomorrow]',
                nextWeek: 'ddd DD MMM',
                lastDay: '[Yesterday]',
                lastWeek: '[Last] dddd',
                sameElse: 'DD/MM/YYYY'
            });
    
    const weatherStateIconUrl = weatherApiService.getWeatherStateIconUrl(props.weather_state_abbr);
    return (
        <div className="forecast">
            <div className="day-header">
                <div className="day-header__title">
                    {calendarDay}
                </div>
                <div className="day-header__icon">
                    <img src={weatherStateIconUrl} alt="weather state icon"/>
                    <div className="state-title">
                        {props.weather_state_name}
                    </div>
                </div>
            
            </div>
            <div className="day-data">
                
                <div className="data-row">
                    <div className="data-row__name">
                        Max:
                    </div>
                    <div className="data-row__value">
                        {Math.round(props.max_temp)}&deg; C
                    </div>
                </div>
    
                <div className="data-row">
                    <div className="data-row__name">
                        Min:
                    </div>
                    <div className="data-row__value">
                        {Math.round(props.min_temp)}&deg; C
                    </div>
                </div>
    
                <div className="data-row">
                    <div className="data-row__name">
                        Wind:
                    </div>
                    <div className="data-row__value">
                        <AiOutlineArrowUp style={{ transform: `rotate(${props.wind_direction}deg)` }}/> {Math.round(props.wind_speed)} mph
                    </div>
                </div>
    
                <div className="data-row">
                    <div className="data-row__name">
                        Humidity:
                    </div>
                    <div className="data-row__value">
                        {Math.round(props.humidity)} &#37;
                    </div>
                </div>
    
                <div className="data-row">
                    <div className="data-row__name">
                        Visibility:
                    </div>
                    <div className="data-row__value">
                        {Math.round(props.visibility * 10) / 10} miles
                    </div>
                </div>
    
                <div className="data-row">
                    <div className="data-row__name">
                        Pressure:
                    </div>
                    <div className="data-row__value">
                        {Math.round(props.air_pressure)} mb
                    </div>
                </div>
    
                <div className="data-row">
                    <div className="data-row__name">
                        Predictability:
                    </div>
                    <div className="data-row__value">
                        {props.predictability} &#37;
                    </div>
                </div>
                
                
                
            </div>
        
        </div>)
    
}
