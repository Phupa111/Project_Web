import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
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
  billNum:number=1;
  constructor(private dataService : DataService,private http : HttpClient){
    http.get(dataService.apiEndpoint + '/order').subscribe((data : any)=>{
      this.owners = ownerCvt.toOwner(JSON.stringify(data));
      // console.log(this.owners);
    });
  }

  goToDetail(owner:any){
    this.dataService.detail = owner;
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
