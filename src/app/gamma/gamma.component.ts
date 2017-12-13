import { Component, OnInit } from '@angular/core';
import {NumbersService} from '../numbers.service';
@Component({
  selector: 'app-gamma',
  templateUrl: './gamma.component.html',
  styleUrls: ['./gamma.component.css']
})
export class GammaComponent implements OnInit {
  diff:number;
  constructor(private _NumbersService:NumbersService) { }

  ngOnInit() {

  }
  onClick(){
    this.diff=this._NumbersService.getDiff();
  }

}
