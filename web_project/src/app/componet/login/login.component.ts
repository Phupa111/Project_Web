import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Convert as customerIdCvt,CustomerID } from 'src/app/model/customerId.model';
import { DataService } from 'src/app/service/data.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  dalog = Array<CustomerID>();
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
          console.log(this.dataService.cusDataLogin);
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
}
