import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Convert as foodCVt,Food } from 'src/app/model/food.model';
import { Convert as foodTypeCVt,Foodtype } from 'src/app/model/foodtype.model';
import { MatDialog } from '@angular/material/dialog';
import { MenuAddComponent } from '../menu-add/menu-add.component';
import { Router } from '@angular/router';
import { Convert as bilCVT,Bill } from 'src/app/model/bill.model';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  foods = Array<Food>();
  foodtypes = Array<Foodtype>();
  dataLogin :any;
  bills = Array<Bill>();
  length:any;
  constructor(private dataService : DataService,private http : HttpClient,private dialog:MatDialog,private route : Router){
    http.get(dataService.apiEndpoint + "/foods").subscribe((data :any)=>{
      this.foods = foodCVt.toFood(JSON.stringify(data));
      // console.log(this.foods);
    });
    http.get(dataService.apiEndpoint + "/foodtype").subscribe((data :any)=>{
      this.foodtypes = foodTypeCVt.toFoodtype(JSON.stringify(data));
      // console.log(this.foods);
    });

    this.dataLogin = this.dataService.cusDataLogin;
    // console.log(this.dataLogin);
    this.http.get(this.dataService.apiEndpoint + "/bill/"+dataService.cusDataLogin.cid).subscribe((data :any)=>{
      this.bills = bilCVT.toBill(JSON.stringify(data));
     this.length = this.bills.length;

    this.setBid(this.bills[this.length-1].bid);

    });

}
findByFoodtype(type:string){
  this.http.get(this.dataService.apiEndpoint + "/foods/type/"+type).subscribe((data :any)=>{
    this.foods = foodCVt.toFood(JSON.stringify(data));
    console.log(this.foods);
  });

}
findAll(){
  this.http.get(this.dataService.apiEndpoint + "/foods").subscribe((data :any)=>{
    this.foods = foodCVt.toFood(JSON.stringify(data));
});
}
showAdd(foodName:string){

  this.dataService.foodDetail.food = foodName;
  this.dialog.open(MenuAddComponent,{minWidth:'500px',minHeight:'500px'})
}
logOut(){
  // this.dataLogin=null;
  this.dataLogin.cid=0;
  console.log(this.dataLogin);
  this.route.navigateByUrl('/login');
}

setBid(bid:number)
{
  this.dataService.getBid.bid =bid;
  console.log(bid);
}
}

