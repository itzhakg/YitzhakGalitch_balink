import React from "react";
import {DailyForecastData} from "../interfaces/weatherApi";

export type DayForecastProps = DailyForecastData;

export const DailyForecast = (props: DayForecastProps) => {
    return (
        <div className="forecast">
            <div className="day-header">
                <div className="day-header__title">
                    {props.created}
                </div>
                <div className="day-header__icon">
                    <img src="" alt="icon"/>
                </div>
            
            </div>
            <div className="day-data">
                <div className="data-row">
                    <div className="data-row__name">
                        Max:
                    </div>
                    <div className="data-row__value">
                        {props.max_temp}
                    </div>
                </div>
            </div>
        
        </div>)
    
}
