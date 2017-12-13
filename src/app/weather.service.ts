import {
  Injectable,
  OnInit
} from '@angular/core';
import {
  BehaviorSubject
} from 'Rxjs';
import {
  HttpClient
} from '@angular/common/http';

@Injectable()
export class WeatherService {
  // tempWeather = {
  //   humidity: '87%',
  //   T_avg: '33',
  //   T_hi: '36',
  //   T_lo: '30',
  //   status: 'true'
  // };
  weather = new BehaviorSubject({}); //!!!!
  constructor(private _http: HttpClient) {}
  ngOnInit() {
  } //is it even supported?? yes
  updateWeather(locale) {
    console.log(this.generateURL(locale));
    this._http.get(this.generateURL(locale)).subscribe((weather: any) => {
      weather.main.temp=this.K2F(weather.main.temp);
      weather.main.temp_min=this.K2F(weather.main.temp_min);
      weather.main.temp_max=this.K2F(weather.main.temp_max);
      this.weather.next(weather);
      // console.log(this.weather);
    });
  }
  generateURL(zip) {
    var api = "http://api.openweathermap.org/data/2.5/weather?zip=";
    var kee = ",us&APPID=7f88b8a2c4b2e0da7220ac532f775eb8";
    return api + zip + kee;
  }
  K2F(T){
    return (parseFloat(T)*9/5-459.67).toFixed(2);
  }
  // http://api.openweathermap.org/data/2.5/weather?zip=94040,us&APPID=7f88b8a2c4b2e0da7220ac532f775eb8
}
