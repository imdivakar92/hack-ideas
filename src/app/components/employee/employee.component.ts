import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { Employee } from 'src/app/models/Employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  public employeeList: Employee[] = [];
  public employee: Employee = {
    id: 0,
    name: '',
    empId: 0,
    createdDate: new Date
  };
  public editIndex = 0;

  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.employeeList = this.employeeService.getEmployee();
  }

  createEmployee(): void {
    this.employee.id = this.employeeList.length;
    this.employee.empId = this.employeeList.length;
    this.employee.createdDate = new Date;
    (!this.editIndex) ? this.employeeService.createEmployee(this.employee) : this.updateEmployee();
    this.refreshEmployeeScope();
  }

  updateEmployee(): void {
    this.employeeService.updateEmployee(this.employee, this.editIndex);
    this.refreshEmployeeScope();
  }

  removeEmployee(index: number): void {
    this.employeeService.removeEmployee(index);
  }

  editEmployee(index: number): void {
    this.employee = this.employeeList[index];
    this.editIndex = index;
  }

  refreshEmployeeScope(): void {
    this.employee = {
      id: 0,
      name: '',
      empId: 0,
      createdDate: new Date
    };
    this.editIndex = 0;
  }

}
