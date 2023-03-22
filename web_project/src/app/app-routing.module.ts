import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { MenuComponent } from './page/menu/menu.component';
import { OwnerComponent } from './page/owner/owner.component';
import { OwnerdetailComponent } from './page/ownerdetail/ownerdetail.component';

const routes: Routes = [
  {path : '',component:LoginComponent},
  {path : 'menu',component:MenuComponent},
  {path : 'owner',component:OwnerComponent},
  {path : 'ownerdetail',component:OwnerdetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
