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
  constructor(private dataService : DataService,private http : HttpClient){
    http.get(dataService.apiEndpoint + '/order').subscribe((data : any)=>{
      this.owners = ownerCvt.toOwner(JSON.stringify(data));
      console.log(this.owners);
    });
  }
}
