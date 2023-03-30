import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Convert as nameOrderCvt,NameOrder} from 'src/app/model/nameOrder.model';
import { Convert as ownerdetailCvt,OwnerDetail } from 'src/app/model/ownerDetail.model';
import { Convert as ownerCvt,Owner } from 'src/app/model/owner.model';

import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ownerdetail',
  templateUrl: './ownerdetail.component.html',
  styleUrls: ['./ownerdetail.component.scss']
})
export class OwnerdetailComponent {
  ownerdetails = Array<OwnerDetail>();
  dt = Array<NameOrder>();
  Detail : any;
  constructor(private dataService : DataService,private http : HttpClient,private route : Router){
    this.Detail = dataService.detail;
    console.log(this.Detail);
    http.get(dataService.apiEndpoint + '/orderDetail/' + this.Detail.bid).subscribe((data : any)=>{
      this.ownerdetails=ownerdetailCvt.toOwnerDetail(JSON.stringify(data));

    });
    // console.log(this.Detail);

    http.get(dataService.apiEndpoint + '/nameCustomer/'+this.Detail.bid).subscribe((data : any)=>{
      this.dt = nameOrderCvt.toNameOrder(JSON.stringify(data));

    });
  }
  back(){
    this.route.navigateByUrl("/owner");
  }

}
