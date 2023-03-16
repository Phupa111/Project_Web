import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './page/menu/menu.component';
import { OwnerComponent } from './page/owner/owner.component';
const routes: Routes = [
  {path : '',component:MenuComponent},
  {path : 'owner',component:OwnerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
