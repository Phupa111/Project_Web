import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './componet/header/header.component';
import { FootterComponent } from './componet/footter/footter.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { MenuComponent } from './page/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { OwnerComponent } from './page/owner/owner.component';
import { OwnerdetailComponent } from './page/ownerdetail/ownerdetail.component';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './componet/login/login.component';
import {MatIconModule} from '@angular/material/icon';
import { OrederShowComponent } from './page/oreder-show/oreder-show.component';
import { OwnerLoginComponent } from './componet/owner-login/owner-login.component';
import { AllbillcustomerComponent } from './page/allbillcustomer/allbillcustomer.component';
import {MatCardModule} from '@angular/material/card';
import { BillCustomerDetailComponent } from './page/bill-customer-detail/bill-customer-detail.component';
import { AddressComponent } from './page/address/address.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RegisterComponent } from './componet/register/register.component';
import { AddMoneyComponent } from './page/add-money/add-money.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FootterComponent,
    MenuComponent,
    OwnerComponent,
    OwnerdetailComponent,
    LoginComponent,
    OrederShowComponent,
    OwnerLoginComponent,
    AllbillcustomerComponent,
    BillCustomerDetailComponent,
    AddressComponent,
    RegisterComponent,
    AddMoneyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatListModule,
    MatDialogModule,
    CommonModule,
    MatCardModule,

    MatFormFieldModule,



  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
