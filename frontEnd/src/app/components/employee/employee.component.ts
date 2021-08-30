import { Component, OnInit } from '@angular/core';
import {Employee} from "../../models/Employee"
import { EmployeeService } from 'src/app/services/employee.service';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {


  constructor(public employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees()
  }
  getEmployees(){
    this.employeeService.getEmployee().subscribe(
      res => this.employeeService.employees = res,
      err => console.error(err)
    )
  }
  addEmployee(form: NgForm){
    let {name, office, salary, position, _id} = form.value
    name = name.trim();
    office = office.trim();
    position = position.trim();
    if(typeof salary === "string"){
      salary = salary.trim();
      salary = parseInt(salary);
    }
    const enviar = {
      _id: _id,
      name: name,
      office: office,
      position: position,
      salary: salary
    }
    if(form.value._id){
      this.employeeService.editEmployee(enviar).subscribe(
        res => {
          this.getEmployees();
          this.resetForm(form)
        },
        e => console.error(e)
      )
    } else {
      this.employeeService.addEmployee(enviar).subscribe(
        res => {this.getEmployees()
        this.resetForm(form)},
        e => console.error(e)
      )
    }
  }
  deleteEmployee(employee: Employee){
    const confirmation = confirm("¿Estás seguro de eliminar a este empleado?")
    if(confirmation){
      this.employeeService.deleteEmployee(employee).subscribe(
        res => this.getEmployees(),
        e => console.error(e)
      )
    }
  }
  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.employeeService.newEmployee = new Employee();
    }
  }
  editEmployee(employee: Employee){
    this.employeeService.newEmployee = employee
  }
}
