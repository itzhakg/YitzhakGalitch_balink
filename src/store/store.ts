import {configureStore} from "@reduxjs/toolkit";
import {forecastSlice} from "./weatherStore/weatherSlice";
import {citiesSelectorSlice} from "./citiesSelectorStore/citiesSlice";

export const store = configureStore({
    reducer: {
        weatherForecast: forecastSlice.reducer,
        citiesSelector: citiesSelectorSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>
