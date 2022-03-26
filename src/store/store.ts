import {configureStore} from "@reduxjs/toolkit";
import {forecastSlice} from "./weatherStore/weatherSlice";

export const store = configureStore({
    reducer: {
        weatherForecast: forecastSlice.reducer,
        
    }
});

export type RootState = ReturnType<typeof store.getState>
