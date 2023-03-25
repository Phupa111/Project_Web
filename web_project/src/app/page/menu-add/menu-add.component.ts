import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Convert as foodCVt,Food } from 'src/app/model/food.model';
import { Convert as bilCVT,Bill } from 'src/app/model/bill.model';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu-add',
  templateUrl: './menu-add.component.html',
  styleUrls: ['./menu-add.component.scss']
})
export class MenuAddComponent {
  foodName :any;
  foods = Array<Food>();
  num:number=0;
  cus:any;
  bills = Array<Bill>();
  length:any;

  constructor(private data:DataService,private http : HttpClient,private dialogRef:MatDialogRef<MenuAddComponent>,private router :Router)
  {
    this.foodName = data.foodDetail.food;

    console.log(this.foodName);


    console.log(this.num);
    http.get(this.data.apiEndpoint + "/foods/name/"+this.foodName).subscribe((data :any)=>{
    this.foods = foodCVt.toFood(JSON.stringify(data));
    console.log(this.foods);
    });

    this.http.get(this.data.apiEndpoint + "/bill/"+data.cusDataLogin.cid).subscribe((data :any)=>{
      this.bills = bilCVT.toBill(JSON.stringify(data));
     this.length = this.bills.length;
     console.log(this.bills[this.length-1]);
    console.log(this.bills.length);


    });






  }
  push()
  {

    this.num=this.num+1;


  }
  minus()
  {
    if(this.num >0){
      this.num=this.num-1;

    }

  }
  addTocard(bid: number, fid: number, amount: number) {
    if (amount != 0)
    {
      const jsonObj = {
      bid: bid,
      fid: fid,
      amount: amount
    };


    this.http.post(this.data.apiEndpoint + '/orderItem/insert', jsonObj).subscribe(response => {

    });

    this.close();


  }
    }

  close()
  {
    this.dialogRef.close();
  }







}
