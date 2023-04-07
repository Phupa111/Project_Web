import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Convert as AllDataCustomerCvt,AllDataCustomer } from 'src/app/model/alllDataCustomer.model';
import { DataService } from 'src/app/service/data.service';


@Component({
  selector: 'app-ownner-show-cus',
  templateUrl: './ownner-show-cus.component.html',
  styleUrls: ['./ownner-show-cus.component.scss']
})
export class OwnnerShowCusComponent {
  customer = Array<AllDataCustomer>();
  constructor(private http : HttpClient,private dataServise : DataService,private route : Router){
    this.http.get(dataServise.apiEndpoint +'/customer/show/all').subscribe((data : any)=>{
      this.customer = AllDataCustomerCvt.toAllDataCustomer(JSON.stringify(data));
      // console.log(this.customer);
    });
  }
  goDetail(cid : any){
    this.dataServise.ownerSeeCid = cid;
    this.route.navigateByUrl('/showcustomerdatadetail');
  }
}
