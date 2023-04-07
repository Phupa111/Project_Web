import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Convert as customerBillCvt,CustomerBill} from 'src/app/model/customerBill.model';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-allbillcustomer',
  templateUrl: './allbillcustomer.component.html',
  styleUrls: ['./allbillcustomer.component.scss']
})
export class AllbillcustomerComponent {

  listBillCustomer = Array<CustomerBill>();
  constructor(private http : HttpClient,private dataService : DataService,private route : Router){
    let jsonObj = {
      cid : dataService.cusDataLogin.cid
    }
    console.log(dataService.CusID);
    let jsonString = JSON.stringify(jsonObj);
    this.http.post(this.dataService.apiEndpoint + '/customer/bill/showAll',jsonString,{observe : 'response'}).subscribe((response)=>{
      // console.log(response.body);
      this.listBillCustomer = customerBillCvt.toCustomerBill(JSON.stringify(response.body));
      console.log(this.listBillCustomer);
    });
  }

  getBid(bid : any){
    this.dataService.Blid=bid;
    this.route.navigateByUrl('/billCustomerDetail');
  }
}
