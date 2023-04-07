import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Convert as customerIdCvt,CustomerID } from 'src/app/model/customerId.model';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  customer = Array<CustomerID>();
  constructor(private dataService : DataService,private http : HttpClient,private route : Router)
  {

  }

  register(name:string,username:string,password:string,phone:string,address:string)
  {
    let jsonObj = {
      name :name,
      username : username,
      password : password,
      address :address,
      phone:phone
    }
    let jsonString = JSON.stringify(jsonObj)
    this.http.post(this.dataService.apiEndpoint + '/register' , jsonString,{observe : 'response'}).subscribe((response)=>{
      // console.log(response.status);
      // console.log(response.body);
    });
    this.http.get(this.dataService.apiEndpoint + '/getCusid/' +username).subscribe((data : any)=>{
      this.customer = customerIdCvt.toCustomerID(JSON.stringify(data));

      console.log(this.customer[0].cid);
      this.insertBill(this.customer[0].cid);


    });
  }

  insertBill(cid:number)
  {
    let jsonObj = {
      cid :cid
    }
    let jsonString = JSON.stringify(jsonObj);
    this.http.post(this.dataService.apiEndpoint + '/bill/insert' , jsonString,{observe : 'response'}).subscribe((response)=>{
      // console.log(response.status);
      // console.log(response.body);
    })
  }
  setBid(bid:number)
{
  this.dataService.getBid.bid =bid;
  console.log(bid);
}

}

