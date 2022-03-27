import axios from "axios";
import {WeatherForecast} from "../interfaces/weatherApi";

class WeatherApiService {
    private readonly API_BASE_URL = "https://www.metaweather.com/api";
    private readonly STATIC_BASE_URL = "https://www.metaweather.com/static";
    
    async getWeatherByWoeid( woeid: number ): Promise<WeatherForecast> {
        try {
            const weatherForecastResponse = await axios.get<WeatherForecast>(`${this.API_BASE_URL}/location/${woeid}/`);
            console.log('weatherForecastResult', weatherForecastResponse.data);
            return weatherForecastResponse.data;
        } catch (e) {
            throw new Error((e as Error).message);
        }
    }
    
    getWeatherStateIconUrl(weatherState: string) {
        return `${this.STATIC_BASE_URL}/img/weather/${weatherState}.svg`;
    }
}

export const weatherApiService = new WeatherApiService();
