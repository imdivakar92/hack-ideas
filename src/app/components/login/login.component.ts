import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginEmpId: number = 0;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if(localStorage.getItem('HackIdeasActiveEmployee')){
      this.navigateToLoggedInPage();
    }
  }

  login(): void {
    if(this.loginService.login(this.loginEmpId)){
      this.navigateToLoggedInPage();
    }
  }

  logout(): void {
    this.loginService.logout();
  }

  navigateToLoggedInPage(): void {
    this.router.navigate(['/challenge']);
  }
}
