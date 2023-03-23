import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  dataLogin :any;
  constructor(private dataService : DataService){

  }

  showdata(){
    this.dataLogin = this.dataService.cusDataLogin;
    console.log(this.dataLogin);
  }
}

// class dataCusLogin{
//   cid:     number=0;
//   name:    string='';
//   money:   number=0;
//   address: string='';
//   phone:   number=0;
// }
