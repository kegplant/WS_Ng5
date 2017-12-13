import { Component, OnInit } from '@angular/core';
import {GoldService} from '../Gold.service';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {
  constructor(private _GoldService:GoldService) { }
  messages=this._GoldService.messages;

  ngOnInit() {
  }
  onClick(){
  }

}
