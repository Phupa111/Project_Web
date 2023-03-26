import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componet/login/login.component';
import { MenuComponent } from './page/menu/menu.component';
import { OwnerComponent } from './page/owner/owner.component';
import { OwnerdetailComponent } from './page/ownerdetail/ownerdetail.component';

import { OrederShowComponent } from './page/oreder-show/oreder-show.component';
import { OwnerLoginComponent } from './componet/owner-login/owner-login.component';

const routes: Routes = [
  {path : '',component:MenuComponent},
  {path : 'owner',component:OwnerComponent},
  {path : 'menu',component:MenuComponent},
  {path : 'ownerdetail',component:OwnerdetailComponent},
  {path : 'OrderShow',component:OrederShowComponent},
  {path : 'login',component:LoginComponent},
  {path : 'ownerlogin',component:OwnerLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
