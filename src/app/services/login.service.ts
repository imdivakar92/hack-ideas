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
    const employeeIndex = this.employeeService.checkEmployee(empId);
    if(employeeIndex >= 0){
      localStorage.setItem('HackIdeasActiveEmployee', JSON.stringify(empId));
    }
    return this.employeeService.checkEmployee(empId);
  }
}
