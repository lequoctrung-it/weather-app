export interface WeatherData {
    queryCost: number;
    latitude: number;
    longitude: number;
    resolvedAddress: string;
    address: string;
    timezone: string;
    tzoffset: number;
    days: Day[];
    currentConditions: CurrentConditions;
}

export interface Day {
    tempmax: number;
    tempmin: number;
    temp: number;
    humidity: number;
    windspeed: number;
}

export interface CurrentConditions {
    temp: number;
    humidity: number;
    windspeed: number;
}
