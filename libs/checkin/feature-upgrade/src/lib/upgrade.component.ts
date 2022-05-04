import { Component, OnInit} from '@angular/core';
import { UpgradeFacade } from '@flight-workspace/checkin/domain';

@Component({
  selector: 'checkin-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.scss']
})
export class UpgradeComponent implements OnInit {
    
    
    passengerList$ = this.upgradeFacade.passengerList$;


    constructor(private upgradeFacade: UpgradeFacade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.upgradeFacade.load();
    }

}

