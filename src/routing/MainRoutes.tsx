import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import {WeatherForecast} from "../pages/WeatherForecast";
import {ForecastSources} from "../pages/ForecastSources";
import moment from "moment";
import {DailyForecast} from "../components/DailyForecast";
import {useDispatch, useSelector} from "react-redux";
import {selectWeatherState} from "../store/weatherStore/weatherSelectors";
import {selectSelectedCityWoeid} from "../store/citiesSelectorStore/citiesSelectorSelectors";
import {fetchCityForecast} from "../store/weatherStore/weatherSlice";


const MAIN_ROUTES = {
    root: {
        path: '/',
        component: <WeatherForecast/>
    },
    details: {
        path: '/sources',
        component: <ForecastSources/>
    }
    
}

export type MainRoutes = typeof MAIN_ROUTES;

export const getMainRoutes = (): MainRoutes => {
    return Object.assign({}, MAIN_ROUTES);
}

export const MainRoutes = () => {
    const dispatch = useDispatch();
    
    const weatherForecast = useSelector(selectWeatherState);
    const selectedCityWoeid = useSelector(selectSelectedCityWoeid);
    
    useEffect(() => {
        dispatch(fetchCityForecast(selectedCityWoeid));
    }, [selectedCityWoeid])
    
    const routes = getMainRoutes();
    return (
    
        <div className="weather">
            {
                weatherForecast &&
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
                            <div className="time__name">Sunrise: </div>
                            <div className="time__value">{moment(weatherForecast.sun_rise).format("HH:mm a")}</div>
                        </div>
                        <div className="forecast-time">
                            <div className="time__name">Sunset: </div>
                            <div className="time__value">{moment(weatherForecast.sun_set).format("HH:mm a")}</div>
                        </div>
                    </div>
                </div>
            }
            
            <Routes>
                <Route path={routes.root.path} element={routes.root.component}/>
                <Route path={routes.details.path} element={routes.details.component}/>
            </Routes>
            
    
        </div>
        
    );
}
