import axios from "axios";
import {WeatherForecast} from "../interfaces/weatherApi";

class WeatherApiService {
    private readonly apiBaseUrl = "https://www.metaweather.com/api";
    
    async getWeatherByWoeid( woeid: number ): Promise<WeatherForecast> {
        try {
            const weatherForecastResponse = await axios.get<WeatherForecast>(`${this.apiBaseUrl}/location/${woeid}/`);
            console.log('weatherForecastResult', weatherForecastResponse.data);
            return weatherForecastResponse.data;
        } catch (e) {
            throw new Error((e as Error).message);
        }
        
    }
}

export const weatherApiService = new WeatherApiService();
