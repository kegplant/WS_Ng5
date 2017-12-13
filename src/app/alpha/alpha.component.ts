import { Component, OnInit,Input } from '@angular/core';
import {WeatherService} from '../weather.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
// @Input() component;
  @Input() location;
  weather:{};
  locale:string;
  locations={
   seattle:{name:'Seattle, WA',zip:'98004',img:''},//'sf.jpeg'},
   sanjose:{name:'San Jose, CA',zip:'95112',img:"https://static.pexels.com/photos/700450/pexels-photo-700450.jpeg"},
   burbank:{name:'Burbank, CA',zip:'91502'},
   dallas:{name:'Dallas, TX',zip:'75202'},
   dc:{name:'Washington D.C.',zip:'22102'},
   chicago:{name:'Chicago, IL',zip:'60610'},
  };
  constructor(private _WeatherService: WeatherService, private _route: ActivatedRoute) { 
  }
  ngOnInit(){
    //subscribe to weather observable, this should be outside of route subscription
    this._WeatherService.weather.subscribe((weather:any)=>{
    this.weather=weather;
    console.log(this.weather);
  });
    this._route.paramMap.subscribe(params=>{
      this.locale=params.get('loc');
      if(this.locations[this.locale]){
      //ask weather to retrieve weather from the new locale
        this._WeatherService.updateWeather(this.locations[this.locale].zip);
        console.log(this.locations[this.locale].img)
      }
    })
  }
  
    // ngOnInit() {
    //   this.username='kegplant';
    //   this._GitService.user.subscribe(
    //     (user)=>{this.user=user;this.score=parseInt(this.user.public_repos)+parseInt(this.user.followers);
    //       console.log(this.user.followers);
    //       console.log(this.user.public_repos);}
    //   );

    // }
    // onClick(){
    //   this._GitService.getScoreOf(this.username);        
    // }
    
   
  
}
