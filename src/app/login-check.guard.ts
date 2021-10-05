import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeService } from './services/employee.service';

@Injectable({
  providedIn: 'root'
})
export class LoginCheckGuard implements CanActivate {
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return (!this.employeeService.activeEmployeeId()) ? this.router.navigate(['login']) : true;
  }
  
}
