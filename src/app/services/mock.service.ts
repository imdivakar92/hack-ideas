import { Employee } from "../models/Employee";
import { Tag } from "../models/Tag";

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

export class MockTagService{

  tagData: Tag[] = [];
  tag: Tag = {
    id: 0,
    name: '',
    createdBy: 0,
    createdDate: new Date
  };

  public createTag(tag: Tag): void {
    this.tagData.push(tag);
  }

  public removeTag(index: number): void {
    this.tagData.splice(index,1);
  }

  public updateTag(tag: Tag, index: number): void {
    this.tagData[index] = tag;
  }

  public getTag(): Tag[] {
    return this.tagData;
  }
}