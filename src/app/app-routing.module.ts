import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChallengeComponent } from './components/challenge/challenge.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { LoginComponent } from './components/login/login.component';
import { TagComponent } from './components/tag/tag.component';
import { LoginCheckGuard } from './login-check.guard';
import { LogoutCheckGuard } from './logout-check.guard';

const routes: Routes = [
  { path: '', redirectTo: '/challenge', pathMatch: 'full' },
  { path: 'employee', component: EmployeeComponent, canActivate: [LoginCheckGuard] },
  { path: 'tag', component: TagComponent, canActivate: [LoginCheckGuard] },
  { path: 'login', component: LoginComponent, canActivate: [LogoutCheckGuard] },
  { path: 'challenge', component: ChallengeComponent, canActivate: [LoginCheckGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
