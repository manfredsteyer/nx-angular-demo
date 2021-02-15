import { Component, OnInit} from '@angular/core';
import { CheckinFacade } from '@flight-workspace/luggage/domain';

@Component({
  selector: 'luggage-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.scss']
})
export class CheckinComponent implements OnInit {
    
    
    luggageList$ = this.checkinFacade.luggageList$;


    constructor(private checkinFacade: CheckinFacade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.checkinFacade.load();
    }

}

