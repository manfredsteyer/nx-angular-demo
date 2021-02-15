import { Component, OnInit} from '@angular/core';
import { AccountFacade } from '@flight-workspace/booking/domain';

@Component({
  selector: 'booking-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
    
    
    accountList$ = this.accountFacade.accountList$;


    constructor(private accountFacade: AccountFacade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.accountFacade.load();
    }

}

