import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/service/data.service';
import { Convert as cartCVT,CartShow} from 'src/app/model/cart.model';

import { AddressComponent } from '../address/address.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-oreder-show',
  templateUrl: './oreder-show.component.html',
  styleUrls: ['./oreder-show.component.scss']
})
export class OrederShowComponent {

  carts =Array<CartShow>();
   sum=0;



  constructor(private dataService : DataService,private http : HttpClient,private dialog:MatDialog)
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

   if(amount >1)
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

addAdress(money:number)
{
  this.dialog.open(AddressComponent,{minWidth:'500px',});
  console.log(money);
  this.dataService.Money.money = money;
  console.log("money2"+ this.dataService.Money.money);
}






}
