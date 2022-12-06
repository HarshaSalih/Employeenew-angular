import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { FormsModule } from '@angular/forms';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { RouterModule, Routes } from '@angular/router';

const myRoute:Routes=[
  {
    path:"",
    component:AddEmployeeComponent
  },

  {
    path:"view",
    component:ViewEmployeeComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    ViewEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
