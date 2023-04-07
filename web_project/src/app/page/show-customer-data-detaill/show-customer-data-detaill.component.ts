
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Convert as AllDataCustomerCvt,AllDataCustomer } from 'src/app/model/alllDataCustomer.model';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-show-customer-data-detaill',
  templateUrl: './show-customer-data-detaill.component.html',
  styleUrls: ['./show-customer-data-detaill.component.scss']
})
export class ShowCustomerDataDetaillComponent {

  customerDataDetail = Array<AllDataCustomer>();
  constructor(private http : HttpClient,private dataService : DataService,private route : Router){
    // console.log(this.dataServise.ownerSeeCid);
    let jsonObj = {
      cid : this.dataService.ownerSeeCid
    }
    let jsonString = JSON.stringify(jsonObj);
    this.http.post(this.dataService.apiEndpoint + '/customer/show/detail',jsonString,{observe : 'response'}).subscribe((response)=>{
      // console.log(response.body);
      this.customerDataDetail = AllDataCustomerCvt.toAllDataCustomer(JSON.stringify(response.body));
      console.log(this.customerDataDetail);
    });
  }
}
