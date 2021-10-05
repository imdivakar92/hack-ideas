import { Injectable } from '@angular/core';
import { EmployeeService } from './employee.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private employeeService: EmployeeService
  ) { }

  public logout(): void {
    localStorage.removeItem('HackIdeasActiveEmployee');
  }

  public login(empId: number): number {
    let employeeIndex = this.employeeService.checkEmployee(empId);
    if(employeeIndex >= 0){
      employeeIndex = empId;
      localStorage.setItem('HackIdeasActiveEmployee', JSON.stringify(empId));
    }
    return employeeIndex;
  }
}
