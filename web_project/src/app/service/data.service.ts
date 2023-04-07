import { Injectable } from "@angular/core";

@Injectable({
  providedIn:'root'
})
export class DataService{
  apiEndpoint = 'http://localhost/WebApiGit';
  detail = new detail();
  foodDetail = new foodDetail();
  foodsD=Array();
  customer = Array();
  CusID = new CusID();
  getBid = new getBid();
  cusDataLogin = new dataCusLogin();
  Blid = new Blid();
 Money = new Money();
  constructor(){
  ownerSeeCid = new ownerSeeCid();
  checkOwnerLogin = new checkOwnerLogin();


  }
}

class detail{
  bid:        number=0;
  cid:        number=0;
  name:       string='';
  status:     string='';
  totalPrice: number=0;
  day:        string='';
}

class foodDetail{
  food:   string='';
}
class dataCusLogin{
  cid:     number=0;
  name:    string='';
  money:   number=0;
  address: string='';
  phone:   number=0;

}
class CusID{
  cid: number=0;
}
class getBid{
  bid:        number=0;
  cid:        number=0;
  dateDay:    string='';
  status:     string='';
  totalPrice: number=0;
}

class Blid{
  bid : number =0;
}
class Money
{
  money : number = 0;
}

class ownerSeeCid{
  cid : number =0;
}

class checkOwnerLogin{
  isLogin : boolean =false;
}
