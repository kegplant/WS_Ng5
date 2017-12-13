import { Injectable } from '@angular/core';

@Injectable()
export class GoldService {
  golds=[0];
  messages=[];
  constructor() { }
  getGold(min,max,location){
    let newGold=Math.floor(Math.random()*(max-min+1))+parseInt(min);
    console.log(newGold);
    this.golds[0]+=newGold;
    this.messages.push(`You've earned ${newGold} gold at the ${location.name}`);
    return this.golds[0];
  }

}
