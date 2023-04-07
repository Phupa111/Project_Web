import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private http : HttpClient,private dataService : DataService,private route : Router){

  }

  checkUsernameInDB(username : string){
    
  }

  resgisterCus(username : string,password : string,confrimpassword : string){

  }
}
