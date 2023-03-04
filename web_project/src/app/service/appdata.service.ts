import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppdataService {

  Menu =new Menu();
  constructor() { }
}

class Menu
{
  fid : number =0;
  name : string = '';
  price : number =0;
  image : string = '';
  FTID : string ='';
}
