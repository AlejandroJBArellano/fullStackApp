import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Employee } from '../models/Employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees: Employee[] = []

  UTI_API="http://localhost:3000/api/getAll"

  constructor(private http: HttpClient) { }

  getEmployee(){
    return this.http.get<Employee[]>(this.UTI_API)
  }

}
