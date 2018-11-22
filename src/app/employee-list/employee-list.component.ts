import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService} from './employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']

})
export class EmployeeListComponent implements OnInit {
    employees: IEmployee[]; 
    constructor(private _employeeService : EmployeeService) {
      
    }
  selectedEmployeeCountRadioButton: string = 'All';
  statusMessage : string = 'Loading data. Please wait...';

  ngOnInit() {
    this._employeeService.getEmployees().subscribe(
        (employeedata) => this.employees = employeedata,(error)=>{
            this.statusMessage = 'Problem with the service. Try after sometime'
        });
  }
  
    getTotalEmployeeCount() : number {
        return this.employees.length;
    }
    getTotalMaleEmployeeCount() : number {
        return this.employees.filter(e=>e.gender ==="Male").length;
    }
    getTotalFemaleEmployeeCount() : number {
        return this.employees.filter(e=>e.gender ==="Female").length;
    }
    onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }
}
