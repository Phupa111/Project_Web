import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  dataLogin :any;
  constructor(private dataService : DataService,private route : Router){
    // this.ck = 1;
    // this.dataLogin = this.dataService.cusDataLogin;
    // console.log(this.dataService.cusDataLogin);
  }

  show(){
    console.log(this.dataLogin);
  }
}
