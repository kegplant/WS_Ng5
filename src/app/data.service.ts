import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'Rxjs';
@Injectable()
export class DataService {
  data: BehaviorSubject<any[]>=new BehaviorSubject([]);
  constructor() { }
  updateData(newData:any): void{
    // this.data.next(newData);
    const tempData=this.data.getValue();
    tempData.push(newData);
    this.data.next(tempData);
  }
}
