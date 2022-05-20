import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { StructureService } from '../../services';
import { Structure } from '../../models';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.scss']
})
export class StructureComponent   {
  public structureTableData$: Observable<Structure[]>
  
  constructor(private service: StructureService) {
    this.structureTableData$ = service.loadstructureTableData();
    
  }
}
