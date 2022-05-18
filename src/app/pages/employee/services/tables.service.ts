import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Employee} from '../models';

@Injectable({
  providedIn: 'root'
})
export class TablesService {
  public loadEmployeeTableData(): Observable<Employee[]> {
    return of([
      {nom: 'Joe James', prenom :'young' , occupation: 'RH', email: 'ketha@gamil.com'},
      {nom: 'Joe James', prenom :'young' , occupation: 'RH', email: 'ketha@gamil.com'},
      {nom: 'Joe James', prenom :'young' , occupation: 'RH', email: 'ketha@gamil.com'},
      {nom: 'Joe James', prenom :'young' , occupation: 'RH', email: 'ketha@gamil.com'},
      {nom: 'Joe James', prenom :'young' , occupation: 'RH', email: 'ketha@gamil.com'},
      {nom: 'Joe James', prenom :'young' , occupation: 'RH', email: 'ketha@gamil.com'},

    ]);
  }
}