import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Convert as customerBillDetailCvt,CustomerBillDetail} from 'src/app/model/customerBillDetail.model';
import { Convert as ownerdetailCvt,OwnerDetail } from 'src/app/model/ownerDetail.model';
import { DataService } from 'src/app/service/data.service';


@Component({
  selector: 'app-bill-customer-detail',
  templateUrl: './bill-customer-detail.component.html',
  styleUrls: ['./bill-customer-detail.component.scss']
})
export class BillCustomerDetailComponent {
  detailCusBill = Array<CustomerBillDetail>();
  detailFood = Array<OwnerDetail>();
  constructor(private http : HttpClient,private dataService : DataService,private route : Router){
    this.http.get(this.dataService.apiEndpoint + '/customer/bill/detail/' + this.dataService.Blid).subscribe((data : any)=>{
      this.detailCusBill = customerBillDetailCvt.toCustomerBillDetail(JSON.stringify(data));
      // console.log(this.detailCusBill);
    });
    http.get(dataService.apiEndpoint + '/orderDetail/' + this.dataService.Blid).subscribe((data : any)=>{
      this.detailFood=ownerdetailCvt.toOwnerDetail(JSON.stringify(data));
    });

  }
}
