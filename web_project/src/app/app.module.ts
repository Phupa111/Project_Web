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
import { DataService } from './service/data.service';
import { FormsModule } from '@angular/forms';
import { OwnerComponent } from './page/owner/owner.component';
import { OwnerdetailComponent } from './page/ownerdetail/ownerdetail.component';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './page/login/login.component';
import {MatIconModule} from '@angular/material/icon';
import { OrederShowComponent } from './page/oreder-show/oreder-show.component';



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
    CommonModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
