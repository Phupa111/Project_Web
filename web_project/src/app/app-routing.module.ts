import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componet/login/login.component';
import { MenuComponent } from './page/menu/menu.component';
import { OwnerComponent } from './page/owner/owner.component';
import { OwnerdetailComponent } from './page/ownerdetail/ownerdetail.component';

import { OrederShowComponent } from './page/oreder-show/oreder-show.component';
import { OwnerLoginComponent } from './componet/owner-login/owner-login.component';
import { AllbillcustomerComponent } from './page/allbillcustomer/allbillcustomer.component';
import { BillCustomerDetailComponent } from './page/bill-customer-detail/bill-customer-detail.component';

const routes: Routes = [
  {path : '',component:MenuComponent},
  {path : 'owner',component:OwnerComponent},
  {path : 'menu',component:MenuComponent},
  {path : 'ownerdetail',component:OwnerdetailComponent},
  {path : 'OrderShow',component:OrederShowComponent},
  {path : 'login',component:LoginComponent},
  {path : 'ownerlogin',component:OwnerLoginComponent},
  {path : 'allbillcustomer',component:AllbillcustomerComponent},
  {path : 'billCustomerDetail',component:BillCustomerDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
