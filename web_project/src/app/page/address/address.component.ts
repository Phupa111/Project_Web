import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

import { Convert as bilCVT,Bill } from 'src/app/model/bill.model';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent {

  money:number=0;
  bills = Array<Bill>();
  length:any;
  constructor(private dataService:DataService,private http : HttpClient,private diaRef:MatDialogRef<AddressComponent>)
  {

 console.log(this.dataService.cusDataLogin.cid);
 console.log("money  :"+this.dataService.Money.money);
  }

  UpdateAdress(Adress:string,phone:string)
{
  this.money = this.dataService.Money.money;
  let jsonObj = {
    Adress:Adress,
    phone:phone,
    bid:this.dataService.getBid.bid

 }


 let jsonString = JSON.stringify(jsonObj);
 this.http.post(this.dataService.apiEndpoint + '/updateAdressAndPhone' , jsonString,{observe : 'response'}).subscribe((response)=>{
   // console.log(response.status);
   // console.log(response.body);

 });
 this.ConfirmBill();
}

 ConfirmBill()
{


  if(this.dataService.cusDataLogin.money >= this.money)
  {
  let jsonObj = {
     money:this.money,
     cid:this.dataService.cusDataLogin.cid

  }


  let jsonString = JSON.stringify(jsonObj);
  this.http.post(this.dataService.apiEndpoint + '/updateMoney' , jsonString,{observe : 'response'}).subscribe((response)=>{
    // console.log(response.status);
    // console.log(response.body);
    this.dataService.cusDataLogin.money -= this.dataService.Money.money;
    this.updateBill(this.money);
    this.insertBill();
  });

  }

}


updateBill(money:number)
{
  let jsonObj = {
    money:money,
    bid:this.dataService.getBid.bid

 }


 let jsonString = JSON.stringify(jsonObj);
 this.http.post(this.dataService.apiEndpoint + '/updateBillsMoney' , jsonString,{observe : 'response'}).subscribe((response)=>{
   // console.log(response.status);
   // console.log(response.body);
 });
}



insertBill()
  {
    let jsonObj = {
      cid :this.dataService.cusDataLogin.cid
    }
    let jsonString = JSON.stringify(jsonObj);
    this.http.post(this.dataService.apiEndpoint + '/bill/insert' , jsonString,{observe : 'response'}).subscribe((response)=>{
      // console.log(response.status);
      // console.log(response.body)
      this.getbils(this.dataService.cusDataLogin.cid);

    })

  }
  getbils(cid:number)
  {
    this.http.get(this.dataService.apiEndpoint + "/bill/"+cid).subscribe((data :any)=>{
      this.bills = bilCVT.toBill(JSON.stringify(data));

     this.length = this.bills.length;
    console.log(this.length-1);
    console.log(this.bills);
    this.setBid(this.bills[this.length-1].bid);
  });
}
  setBid(bid:number)
  {
    this.dataService.getBid.bid =bid;
    console.log(bid);
    this.close();
  }


  close()
  {
    this.diaRef.close();
  }

}
