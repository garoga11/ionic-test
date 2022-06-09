import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import {UsersComponent} from './users/users.component';
import {CustomersComponent} from './customers/customers.component';

const routes: Routes = [
  {
      path: "login",
      "component": LoginComponent,},
  {
      path: "users",
      "component": UsersComponent,
  },
  {
      path: "customers",
      "component": CustomersComponent,
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }


