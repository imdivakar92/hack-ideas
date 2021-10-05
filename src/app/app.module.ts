import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { TagComponent } from './components/tag/tag.component';
import { LoginComponent } from './components/login/login.component';
import { ChallengeComponent } from './components/challenge/challenge.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    TagComponent,
    LoginComponent,
    ChallengeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TagInputModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
