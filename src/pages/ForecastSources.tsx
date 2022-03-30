import React from 'react';
import {DailyForecast} from "../components/DailyForecast";
import {useSelector} from "react-redux";
import {selectWeatherState} from "../store/weatherStore/weatherSelectors";
import {ForecastSource} from "../interfaces/weatherApi";
import {ForecastSourceData} from "../components/ForecastSourceData";

export const ForecastSources = () => {
    
    const weatherForecast = useSelector(selectWeatherState);
    
   
    if (!weatherForecast) return null;
    console.log('sources', weatherForecast?.sources)
    return (
        <>
            <div className="forecast-sources">
                <div className="weather-forecast single">
                    <DailyForecast {...weatherForecast.consolidated_weather[0]}/>)
                </div>
                <div className="sources-container">
                    {
                        weatherForecast.sources.map((source: ForecastSource, index) => <ForecastSourceData {...source} key={index}/>)
                    }
                </div>
            </div>
        </>
    
    );
}
