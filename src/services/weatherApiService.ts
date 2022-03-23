import axios from "axios";
import {WeatherForecast} from "../interfaces/weatherApi";

class WeatherApiService {
    private readonly apiBaseUrl = "https://www.metaweather.com/api";
    
    async getWeatherByWoeid( woeid: number ): Promise<WeatherForecast> {
        const weatherForecastResponse = await axios.get<WeatherForecast>(`${this.apiBaseUrl}/location/${woeid}/`);
        console.log('weatherForecastResult', weatherForecastResponse.data);
        return weatherForecastResponse.data;
    }
}

export const weatherApiService = new WeatherApiService();
