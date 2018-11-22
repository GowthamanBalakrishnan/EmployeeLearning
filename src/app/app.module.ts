import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { TakeServayComponent } from './take-servay/take-servay.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeTitlePipe } from './employee-list/employeeTitle.pipe';
import { EmployeeCountComponent } from './employee-count/employee-count.component'
import { HttpModule}  from '@angular/http';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes} from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import {EmployeeService} from 'src/app/employee-list/employee.service';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'servay', component: TakeServayComponent },
  { path: 'employees/:code', component: EmployeeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: TakeServayComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TakeServayComponent,
    EmployeeListComponent,
    EmployeeTitlePipe,
    EmployeeCountComponent,
    HomeComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,RouterModule.forRoot(appRoutes)
  ],
  providers:[EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
