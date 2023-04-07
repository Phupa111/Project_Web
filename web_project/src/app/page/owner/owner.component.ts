import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Convert as ownerCvt,Owner } from 'src/app/model/owner.model';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent {
  owners = Array<Owner>();
  statusBill='';
  ownerislogin =false;
  constructor(private dataService : DataService,private http : HttpClient,private route : Router){
    this.ownerislogin=this.dataService.checkOwnerLogin.isLogin;
    http.get(dataService.apiEndpoint + '/order').subscribe((data : any)=>{
      this.owners = ownerCvt.toOwner(JSON.stringify(data));
      // console.log(this.owners);
    });
  }

  goToDetail(owner:any){
    this.dataService.detail = owner;
  }

  logout(){
    this.dataService.checkOwnerLogin.isLogin= false;
    this.route.navigateByUrl('/login');
  }
  statusChange(status: any,bid: number) {
    let jsonObj = {
      status :status.target.value,
      bid : bid
    }
    let jsonString = JSON.stringify(jsonObj);
    this.http.post(this.dataService.apiEndpoint + '/update/status' , jsonString,{observe : 'response'}).subscribe((response)=>{
      // console.log(response.status);
      // console.log(response.body);
    })
  }
}
