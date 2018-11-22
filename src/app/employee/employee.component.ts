import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/employee-list/employee';
import { EmployeeService } from 'src/app/employee-list/employee.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employee: IEmployee;
  statusMessage: string = 'Loading data. Please wait...';

  constructor(private _employeeService: EmployeeService,
      private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
      let empCode: string = this._activatedRoute.snapshot.params['code'];
      this._employeeService.getEmployeeByCode(empCode)
          .subscribe((employeeData) => {
              if (employeeData == null) {
                  this.statusMessage =
                      'Employee with the specified Employee Code does not exist';
              }
              else {
                  this.employee = employeeData;
              }
          },
          (error) => {
              this.statusMessage =
                  'Problem with the service. Please try again after sometime';
              console.error(error);
          });
  }
}
