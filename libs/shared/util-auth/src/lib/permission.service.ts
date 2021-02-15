import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor() { }

  hasPermission(permission: string): Observable<boolean> {
    return timer(3000).pipe(map(_ => false));
  }

}