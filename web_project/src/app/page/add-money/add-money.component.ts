import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-money',
  templateUrl: './add-money.component.html',
  styleUrls: ['./add-money.component.scss']
})
export class AddMoneyComponent {

    constructor(private dataService:DataService,private http : HttpClient,private diaRef:MatDialogRef<AddMoneyComponent>)
    {

    }

    AddMoney(money:number)
    {
      if(money>0)
      {
      let jsonObj = {
         money:money,
         cid:this.dataService.cusDataLogin.cid

      }


      let jsonString = JSON.stringify(jsonObj);
      this.http.post(this.dataService.apiEndpoint + '/addMoney' , jsonString,{observe : 'response'}).subscribe((response)=>{
        // console.log(response.status);
        // console.log(response.body);
        this.dataService.cusDataLogin.money += money

      });
       this.close();
      }
    }
    close()
    {
      this.diaRef.close();
    }
}
