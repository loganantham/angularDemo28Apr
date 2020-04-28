import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeListingComponent } from './employee-listing/employee-listing.component';


const routes: Routes = [
  {
    path : "addEmployee",
    component : AddEmployeeComponent
  },
  {
    path : "listEmployee",
    component : EmployeeListingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
