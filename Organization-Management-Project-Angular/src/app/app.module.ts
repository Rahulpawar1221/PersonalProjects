import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { CompletedetailsComponent } from './completedetails/completedetails.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotfoundComponent,
    HeaderComponent,
    CompletedetailsComponent,
    AddemployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
