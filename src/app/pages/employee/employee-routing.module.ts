import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './conatiners';

const routes: Routes = [
    {
      path: '',
      component : DashboardComponent,
    }
  ];
  
  @NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
  
  export class EmployeeRoutingModule {
  }