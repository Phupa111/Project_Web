import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/service/data.service';
import { Convert as cartCVT,CartShow} from 'src/app/model/cart.model';

import { Convert as bilCVT,Bill } from 'src/app/model/bill.model';

@Component({
  selector: 'app-oreder-show',
  templateUrl: './oreder-show.component.html',
  styleUrls: ['./oreder-show.component.scss']
})
export class OrederShowComponent {
  dialog: any;
  carts =Array<CartShow>();
   sum=0;
   bills = Array<Bill>();
   length:any;

  constructor(private dataService : DataService,private http : HttpClient,private route : Router)
  {

    console.log(dataService.getBid.bid);
    http.get(this.dataService.apiEndpoint + "/orederItem/"+dataService.getBid.bid).subscribe((data :any)=>{
     this.carts = cartCVT.toCartShow(JSON.stringify(data));
     console.log(this.carts);
     this.carts.forEach(food=>{
        this.sum += food.amount*food.price;


      });
      });






  }

  phus(bid:number,fid:number,amount:number)
  {
    this.http.get(this.dataService.apiEndpoint + "/orederItem/plus/"+bid+"/"+fid).subscribe((data :any)=>{

      this.carts.forEach(food=>{
        if(food.fid == fid){

          food.amount=food.amount+1;
        }

       });
       this.sumCartItem();
  });
}

  minus(bid:number,fid:number,amount:number)
  {


    this.http.get(this.dataService.apiEndpoint + "/orederItem/minus/"+bid+"/"+fid).subscribe((data :any)=>{
      this.sum = 0;

      this.carts.forEach(food=>{
        if(food.fid == fid){

          food.amount=food.amount-1;
        }
       });
       this.sumCartItem();
  });

}
deleteList(bid:number,fid:number)
{
  this.http.delete(this.dataService.apiEndpoint+"/orderItem/delete/"+bid+"/"+fid).subscribe((data :any)=>{

    this.carts.map((food:any,index:any)=>{
      if(food.fid ==fid)
      {
        this.carts.splice(index,1);
      }

    });
    this.sumCartItem();

  });
}

sumCartItem()
{
  this.sum = 0;
  this.carts.forEach(food=>{
    this.sum += food.amount*food.price;


  });
}

ConfirmBill(money:number)
{

  if(this.dataService.cusDataLogin.money >= money && this.sum !=0)
  {
  let jsonObj = {
     money:money,
     cid:this.dataService.cusDataLogin.cid

  }
  let jsonString = JSON.stringify(jsonObj);
  this.http.post(this.dataService.apiEndpoint + '/updateMoney' , jsonString,{observe : 'response'}).subscribe((response)=>{
    // console.log(response.status);
    // console.log(response.body);
    this.dataService.cusDataLogin.money -= money;
    this.insertBill(this.dataService.cusDataLogin.cid);
  });

  }

}

insertBill(cid:number)
  {
    let jsonObj = {
      cid :cid
    }
    let jsonString = JSON.stringify(jsonObj);
    this.http.post(this.dataService.apiEndpoint + '/bill/insert' , jsonString,{observe : 'response'}).subscribe((response)=>{
      // console.log(response.status);
      // console.log(response.body)
      this.getbils(cid);

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
  }


}
