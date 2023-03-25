import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Convert as customerIdCvt,CustomerID } from 'src/app/model/customerId.model';
import { DataService } from 'src/app/service/data.service';
import { HeaderComponent } from '../header/header.component';
import { Convert as bilCVT,Bill } from 'src/app/model/bill.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  dalog = Array<CustomerID>();

  bills = Array<Bill>();
  length:any;
  constructor(private dataService : DataService,private http : HttpClient,private route : Router){

  }
  login(username : string,password : string){
    let jsonObj = {
      username : username,
      password : password
    }
    let jsonString = JSON.stringify(jsonObj)
    this.http.post(this.dataService.apiEndpoint + '/custommer/login' , jsonString,{observe : 'response'}).subscribe((response)=>{
      // console.log(response.status);
      console.log(response.body);
      if(response.body == 'login Success'){
        this.http.get(this.dataService.apiEndpoint + '/getCusid/' +username).subscribe((data : any)=>{
          this.dalog = customerIdCvt.toCustomerID(JSON.stringify(data));
          this.dataService.cusDataLogin = this.dalog[0];
          console.log(this.dataService.cusDataLogin.cid);
          this.addBill(this.dataService.cusDataLogin.cid);
          this.route.navigateByUrl('/menu');
        });

      }else{
        console.log('no');
      }
    });
    // this.route.navigateByUrl('/menu');
  }

  hash(username : string,password : string){
    let jsonObj = {
      username : username,
      password : password
    }

    let jsonString = JSON.stringify(jsonObj)

    this.http.post(this.dataService.apiEndpoint + '/custommer/addPass' , jsonString,{observe : 'response'}).subscribe((response)=>{
      // console.log(response.status);
      // console.log(response.body);
    });
  }

  addBill(cid:number)
  {
    this.http.get(this.dataService.apiEndpoint + "/bill/"+cid).subscribe((data :any)=>{
      this.bills = bilCVT.toBill(JSON.stringify(data));
     this.length = this.bills.length;
    console.log(this.length-1);
    console.log(this.bills);
    if( this.bills[this.length-1].status != "ยังไม่ชำระเงิน" && this.bills[this.length-1].cid == cid)
    {
      this.insertBill(cid);
    }



    });
    ;
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

}
