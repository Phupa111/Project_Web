import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './componet/header/header.component';
import { FootterComponent } from './componet/footter/footter.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { MenuComponent } from './page/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './service/data.service';
import { OrderComponent } from './page/order/order.component';
import { OwnerComponent } from './page/owner/owner.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FootterComponent,
    MenuComponent,
    OrderComponent,
    OwnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
