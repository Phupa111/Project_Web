import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Convert as foodCVt,Food } from 'src/app/model/food.model';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  foods = Array<Food>();
constructor(private dataService : DataService,private http : HttpClient){
http.get(dataService.apiEndpoint + "/foods").subscribe((data :any)=>{
  this.foods = foodCVt.toFood(JSON.stringify(data));
  console.log(this.foods);
});


}

}

