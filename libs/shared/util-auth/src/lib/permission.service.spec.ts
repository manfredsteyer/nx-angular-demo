import { TestBed, waitForAsync } from '@angular/core/testing';

import { PermissionService } from './permission.service';

describe('PermissionService', () => {
  let service: PermissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PermissionService);
  });

  it('hasPermission', waitForAsync(() => {

    service.hasPermission('licenceToKill').subscribe(p => {
      expect(p).toBeFalsy();
    })

  }));
});
