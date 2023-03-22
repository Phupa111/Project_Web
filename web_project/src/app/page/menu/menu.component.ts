import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Convert as foodCVt,Food } from 'src/app/model/food.model';
import { Convert as foodTypeCVt,Foodtype } from 'src/app/model/foodtype.model';
import { MatDialog } from '@angular/material/dialog';
import { MenuAddComponent } from '../menu-add/menu-add.component';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  foods = Array<Food>();
  foodtypes = Array<Foodtype>();
constructor(private dataService : DataService,private http : HttpClient,private dialog:MatDialog){
http.get(dataService.apiEndpoint + "/foods").subscribe((data :any)=>{
  this.foods = foodCVt.toFood(JSON.stringify(data));
  // console.log(this.foods);
});
http.get(dataService.apiEndpoint + "/foodtype").subscribe((data :any)=>{
  this.foodtypes = foodTypeCVt.toFoodtype(JSON.stringify(data));
  // console.log(this.foods);
});

}
findByFoodtype(type:string){
  this.http.get(this.dataService.apiEndpoint + "/foods/type/"+type).subscribe((data :any)=>{
    this.foods = foodCVt.toFood(JSON.stringify(data));
    // console.log(this.foods);
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

}

