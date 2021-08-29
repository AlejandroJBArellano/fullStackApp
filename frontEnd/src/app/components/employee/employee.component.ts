import { Component, OnInit } from '@angular/core';
import {Employee} from "../../models/Employee"
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {


  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {

  }
  getEmployees(){
    this.employeeService.getEmployee().subscribe(
      res => this.employeeService.employees = res,
      err => console.error(err)
    )
  }
}
