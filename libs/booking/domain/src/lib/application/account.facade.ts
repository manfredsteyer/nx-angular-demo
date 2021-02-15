import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Account } from '../entities/account';
import { AccountDataService } from '../infrastructure/account.data.service';


@Injectable({ providedIn: 'root' })
export class AccountFacade {

    private accountListSubject = new BehaviorSubject<Account[]>([]); 
    accountList$ = this.accountListSubject.asObservable();

    constructor(private accountDataService: AccountDataService) {
    }

    load(): void {
        this.accountDataService.load().subscribe(
            accountList => {
                this.accountListSubject.next(accountList)
            },
            err => {
                console.error('err', err);
            }
        );
    }

}
