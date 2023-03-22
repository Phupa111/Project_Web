import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Convert as foodCVt,Food } from 'src/app/model/food.model';
import { Convert as foodTypeCVt,Foodtype } from 'src/app/model/foodtype.model';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  foods = Array<Food>();
  foodtypes = Array<Foodtype>();
constructor(private dataService : DataService,private http : HttpClient){
http.get(dataService.apiEndpoint + "/foods").subscribe((data :any)=>{
  this.foods = foodCVt.toFood(JSON.stringify(data));
  console.log(this.dataService.c);
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
    // this.foods = foodCVt.toFood(JSON.stringify(data));
});
}
}

