import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  empForm : FormGroup;

  constructor(private ef : FormBuilder, private es : EmployeeService) {
    this.createForm();
   }

   createForm(){
     this.empForm = this.ef.group({
       employee_name : ['',Validators.required],
       employee_role : ['',Validators.required],
       employee_id : ['',Validators.required]
     });
   }

  ngOnInit(): void {
  }

  addEmployee(employee_name, employee_role, employee_id){
    this.es.addEmployee (employee_name,employee_role,employee_id);
  }

}
