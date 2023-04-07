import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-owner-login',
  templateUrl: './owner-login.component.html',
  styleUrls: ['./owner-login.component.scss']
})
export class OwnerLoginComponent {

  constructor(private http : HttpClient,private route : Router,private dataService : DataService){

  }

  checkOwner(username : string,password : string){
    let jsonObj ={
      username : username,
      password : password
    }

    let jsonString = JSON.stringify(jsonObj);
    this.http.post(this.dataService.apiEndpoint + '/ownerLogin' , jsonString,{observe : 'response'}).subscribe((response)=>{
      // console.log(response.status);
      console.log(response.body);
      if(response.body == 'login Success'){
        this.dataService.checkOwnerLogin.isLogin = true;
        this.route.navigateByUrl('/owner');
      }
    });
  }
}
