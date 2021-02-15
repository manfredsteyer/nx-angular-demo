import { Component, OnInit} from '@angular/core';
import { CheckoutFacade } from '@flight-workspace/booking/domain';

@Component({
  selector: 'booking-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
    
    
    ticketList$ = this.checkoutFacade.ticketList$;


    constructor(private checkoutFacade: CheckoutFacade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.checkoutFacade.load();
    }

}

