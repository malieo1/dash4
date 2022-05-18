import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {Group} from '../models';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  public loadgroupTableData(): Observable<Group[]> {
    return of([
      {nom: 'Joe James', description :'insaf'},
      {nom: 'Joe James', description :'insaf'},
      {nom: 'Joe James', description :'insaf'},
      {nom: 'Joe James', description :'insaf'},
      {nom: 'Joe James', description :'insaf'},
      {nom: 'Joe James', description :'insaf'},

    ]);
  }
}