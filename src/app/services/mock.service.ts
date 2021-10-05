import { Employee } from "../models/Employee";

export class MockEmployeeService{

  employeeData: Employee[] = [];
  employee: Employee = {
    id: 0,
    name: '',
    empId: 0,
    createdDate: new Date
  };

  public createEmployee(employee: Employee): void {
    this.employeeData.push(employee);
  }

  public removeEmployee(index: number): void {
    this.employeeData.splice(index,1);
  }

  public updateEmployee(employee: Employee, index: number): void {
    this.employeeData[index] = employee;
  }

  public getEmployee(): Employee[] {
    return this.employeeData;
  }
}