import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Group } from '../../models';
import { GroupService } from '../../services';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent {

  public groupTableData$: Observable<Group[]>
  
  

  constructor(private service: GroupService) {
    this.groupTableData$ = service.loadgroupTableData();
    
  }

}
