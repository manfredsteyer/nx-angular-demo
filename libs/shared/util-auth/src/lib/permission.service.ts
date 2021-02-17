import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  hasPermission(permission: string): Observable<boolean> {
    return timer(4000).pipe(map(_ => false));
  }

}