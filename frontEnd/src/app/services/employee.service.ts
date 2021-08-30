import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Employee } from '../models/Employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  newEmployee = new Employee()

  employees: Employee[] = []

  UTI_API={
    origin: "http://localhost:3000/api/",
    getAll: "getAll",
    create: "create",
    delete: "delete",
    change: "update"
  }

  constructor(private http: HttpClient) { }

  getEmployee(){
    return this.http.get<Employee[]>(`${this.UTI_API.origin}${this.UTI_API.getAll}`)
  }
  addEmployee(employee: Employee){
    return this.http.post<Employee[]>(`${this.UTI_API.origin}${this.UTI_API.create}`, employee)
  }
  editEmployee(employee: Employee){
    return this.http.put<Employee[]>(`${this.UTI_API.origin}${this.UTI_API.change}/${employee._id}`, employee)
  }
  deleteEmployee(employee:Employee){
    return this.http.delete<Employee[]>(`${this.UTI_API.origin}${this.UTI_API.delete}/${employee._id}`)
  }
}
