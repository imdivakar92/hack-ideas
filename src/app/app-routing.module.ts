import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChallengeComponent } from './components/challenge/challenge.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { LoginComponent } from './components/login/login.component';
import { TagComponent } from './components/tag/tag.component';

const routes: Routes = [
  {path:'employee', component: EmployeeComponent},
  {path:'tag', component: TagComponent},
  {path:'login', component: LoginComponent},
  {path:'challenge', component: ChallengeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
