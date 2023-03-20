import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Convert as foodCVt,Food } from 'src/app/model/food.model';
@Component({
  selector: 'app-menu-add',
  templateUrl: './menu-add.component.html',
  styleUrls: ['./menu-add.component.scss']
})
export class MenuAddComponent {
  foodName :any;
  foods = Array<Food>();
  num:number=0;
  constructor(private data:DataService,private http : HttpClient)
  {
    this.foodName = data.foodDetail.food;
    console.log(this.foodName);

    http.get(this.data.apiEndpoint + "/foods/name/"+this.foodName).subscribe((data :any)=>{
    this.foods = foodCVt.toFood(JSON.stringify(data));
    console.log(this.foods);
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




}
