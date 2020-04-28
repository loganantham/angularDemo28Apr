import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url = "http://localhost:4000/employee";

  constructor(private http : HttpClient) {  }

  addEmployee(employee_name, employee_role, employee_id){
    const obj = {
      employee_name : employee_name,
      employee_role : employee_role,
      employee_id : employee_id
    };

    console.log(obj);

    this.http.post('${this.url}/add',obj)
    .subscribe(res => console.log('Done'));
  }
}
