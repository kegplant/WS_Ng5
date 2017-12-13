import {
  Component,OnInit
} from '@angular/core';
// import {User} from './user';
// import{GoldService} from'./Gold.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  locations=[];
  constructor(){}
  ngOnInit(){
    this.locations=[
      {name:'San Jose, CA', route:'sanjose'},
      {name:'Seattle, WA', route:'seattle'},
      {name:'Burbank, CA', route:'burbank'},
      {name:'Dallas, TX', route:'dallas'},
      {name:'Washington D.C.', route:'dc'},
      {name:'Chicago, IL', route:'chicago'},
    ]
  }


}
  