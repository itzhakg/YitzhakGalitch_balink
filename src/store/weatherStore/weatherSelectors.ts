import {RootState} from "../store";
import {createSelector} from "@reduxjs/toolkit";

export const selectWeatherForecastState = (state: RootState) => state.weatherForecast;

export const selectWeatherState = createSelector(
    selectWeatherForecastState,
    weatherState => weatherState.weather
);

export const selectWeatherSources = createSelector(
    selectWeatherState,
    weather => weather ? weather.sources : []
);
