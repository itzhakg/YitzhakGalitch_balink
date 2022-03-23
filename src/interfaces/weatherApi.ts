
export interface ForecastLocation {
    title: string;
    location_type: string;
    woeid: number;
    lat_long: string;
    timezone?: string;
}


export interface ForecastSource {
    title: string;
    slug: string;
    url: string;
    crawl_rate: number;
}

export type WeatherStateName = "Light Cloud" | "Snow" | "Sleet" | "Hail" | "Thunderstorm" | "Heavy Rain" | "Light Rain" | "Showers" | "Heavy Cloud";

export interface DailyForecastData {
    id: number;
    weather_state_name: WeatherStateName;
    weather_state_abbr: string; // "lc"
    wind_direction_compass: string; //"W"
    created: string; // "2022-03-23T18:59:16.276425Z",
    applicable_date: string; // "2022-03-23",
    min_temp: number; // 9.51,
    max_temp: number; // 15.280000000000001,
    the_temp: number; // 16.740000000000002,
    wind_speed: number; // 5.901896772212943,
    wind_direction: number; //267.3583021123763,
    air_pressure: number; //1021.5,
    humidity: number; //77,
    visibility: number; //12.530882148254197,
    predictability: number; //70
}

export interface WeatherForecast extends ForecastLocation {
    time: string;
    sun_rise: string;
    sun_set: string;
    timezone_name: string;
    parent: ForecastLocation;
    sources: ForecastSource[];
    consolidated_weather: DailyForecastData[];
}
