import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  Foods = Array<Food>();
  constructor()
  {
    let Food1=new Food(1,'ลาบหมู',80,'https://www.ietr.org/wp-content/uploads/2017/12/Pork-loin-600x381.jpg','ลาบ');
    let Food2=new Food(2,'ลาบไก่',70,'https://krua.co/wp-content/uploads/2020/09/RT0922_ImageBannerMobile_960x633_New.jpg','ลาบ');
    let Food3=new Food(3,'ลาบปลา',60,'https://img-global.cpcdn.com/recipes/25d20fa6835768f3/680x482cq70/%E0%B8%A3%E0%B8%9B-%E0%B8%AB%E0%B8%A5%E0%B8%81-%E0%B8%82%E0%B8%AD%E0%B8%87-%E0%B8%AA%E0%B8%95%E0%B8%A3-%E0%B8%A5%E0%B8%B2%E0%B8%9A%E0%B8%9B%E0%B8%A5%E0%B8%B2.jpg','ลาบ');
    let Food4=new Food(4,'ลาบเนื้อ',50,'https://i.ytimg.com/vi/Ylfi-zMhLAg/maxresdefault.jpg','ลาบ');

   this.Foods.push(Food1);
   this.Foods.push(Food2);
   this.Foods.push(Food3);
   this.Foods.push(Food4);

   console.log(this.Foods)
  }
}
class Food
{
  fid : number =0;
  name : string = '';
  price : number =0;
  image : string = '';
  FTID : string ='';

  constructor(fid :number,name : string,price:number,image:string,FTID:string)
  {
    this.fid =fid;
    this.name = name;
    this.price =price;
    this.image = image;
    this.FTID = FTID;
  }
}
