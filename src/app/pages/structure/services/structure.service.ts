import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {Structure} from '../models';

@Injectable({
  providedIn: 'root'
})
export class StructureService {
  public loadstructureTableData(): Observable<Structure[]> {
    return of([
      {nom: 'Joe James', description :'insaf', site :'www.ketha.com', numero :'23456789'},
      {nom: 'Joe James', description :'insaf', site :'www.ketha.com', numero :'23456789'},
      {nom: 'Joe James', description :'insaf', site :'www.ketha.com', numero :'23456789'},
      {nom: 'Joe James', description :'insaf', site :'www.ketha.com', numero :'23456789'},
      {nom: 'Joe James', description :'insaf', site :'www.ketha.com', numero :'23456789'},
      {nom: 'Joe James', description :'insaf', site :'www.ketha.com', numero :'23456789'},

    ]);
  }
}