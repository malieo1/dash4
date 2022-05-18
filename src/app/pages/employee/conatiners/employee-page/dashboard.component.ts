import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { TablesService } from '../../services';
import { Employee } from '../../models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent  {

  public employeeTableData$: Observable<Employee[]>
  

  constructor(private service: TablesService) {
    this.employeeTableData$ = service.loadEmployeeTableData();
    
  }

}
