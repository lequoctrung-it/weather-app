import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl + encodeURI(cityName) + "/today?" + 'unitGroup=metric&elements=name%2Ctempmax%2Ctempmin%2Ctemp%2Chumidity%2Cwindspeed&include=fcst%2Ccurrent&key=GEAZ9Q5CBGWRV55KV8VD5KGRD&contentType=json')
  }
}
