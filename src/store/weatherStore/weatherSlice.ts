import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {WeatherForecast} from "../../interfaces/weatherApi";
import {weatherApiService} from "../../services/weatherApiService";


export const fetchCityForecast = createAsyncThunk<WeatherForecast, number>(
    'weatherApi/fetch',
    async (cityWoeid) => {
        try {
            return await weatherApiService.getWeatherByWoeid(cityWoeid);
        } catch (error) {
            throw new Error((error as Error).message as string);
        }
    }
);

export interface WeatherState {
    isLoading: boolean;
    error: string | undefined;
    weather: WeatherForecast | null
}

const weatherInitialState: WeatherState = {
    isLoading: false,
    error: undefined,
    weather: null
};

export const forecastSlice = createSlice({
    name: 'weatherForecast',
    initialState: weatherInitialState,
    reducers: {},
    extraReducers: (
        builder => {
            builder.addCase(
                fetchCityForecast.pending,
                (state, action) => {
                    state.isLoading = true;
                });
            
            
            builder.addCase(fetchCityForecast.fulfilled,
                (state, {payload}) => {
                    state.isLoading = false;
                    state.weather = payload;
                });
            
            builder.addCase(
                fetchCityForecast.rejected,
                (state, {payload}) => {
                    state.isLoading = false;
                    state.error = payload ? (payload as Error).message : '';
                })
        })
});


