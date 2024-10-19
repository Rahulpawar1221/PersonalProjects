import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CompletedetailsComponent } from './completedetails/completedetails.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';

const routes: Routes = [

  {
    path:"" , component: HomeComponent
  },
  {
    path:"comepletedetails/:id", component: CompletedetailsComponent
  },
  {
    path:"addemployee", component: AddemployeeComponent
  },
  {
    path:"addemployee/:id", component: AddemployeeComponent
  },
  {
    path:"**", component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
