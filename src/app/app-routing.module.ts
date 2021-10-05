import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './components/employee/employee.component';
import { TagComponent } from './components/tag/tag.component';

const routes: Routes = [
  {path:'employee', component: EmployeeComponent},
  {path:'tag', component: TagComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
