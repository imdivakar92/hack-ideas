import { Injectable } from '@angular/core';
import { Employee } from '../models/Employee';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeeData: Employee[] = [];

  constructor(
    private dataService: DataService
  ) {
    this.employeeData = this.dataService.getDataFromStorage().employee;
  }

  public createEmployee(employee: Employee): void {
    this.employeeData.push(employee);
    this.dataService.constructData(this.employeeData, 'employee');
  }

  public removeEmployee(index: number): void {
    this.employeeData.splice(index,1);
    this.dataService.constructData(this.employeeData, 'employee');
  }

  public updateEmployee(employee: Employee, index: number): void {
    this.employeeData[index] = employee;
    this.dataService.constructData(this.employeeData, 'employee');
  }

  public getEmployee(): Employee[] {
    return this.employeeData;
  }
}
