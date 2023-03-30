import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-bill-customer-detail',
  templateUrl: './bill-customer-detail.component.html',
  styleUrls: ['./bill-customer-detail.component.scss']
})
export class BillCustomerDetailComponent {
  constructor(private http : HttpClient,private dataService : DataService,private route : Router){
    
  }
}
