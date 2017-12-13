import { Injectable } from '@angular/core';

@Injectable()
export class NumbersService {
  arr1=[];
  arr2=[];
  constructor() { }
  getSeq1(){
    console.log('get');
    return this.arr1;
  }
  generateSeq1(){
    console.log('generate')
    this.arr1.push(Math.floor(Math.random()*100));

    return this.arr1;

  }
  getSeq2(){
    console.log('get');
    return this.arr2;
  }
  generateSeq2(){
    console.log('generate')
    this.arr2.push(Math.floor(Math.random()*100));
    
    return this.arr2;

  }
  getDiff(){
    return this.arr1.reduce(function(x,y){
      return x+y;
    }) - this.arr2.reduce(function(x,y){
      return x+y;
    })
  }
}
