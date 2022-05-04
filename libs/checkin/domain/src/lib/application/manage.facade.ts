import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Ticket } from '../entities/ticket';
import { TicketDataService } from '../infrastructure/ticket.data.service';


@Injectable({ providedIn: 'root' })
export class ManageFacade {

    private ticketListSubject = new BehaviorSubject<Ticket[]>([]); 
    ticketList$ = this.ticketListSubject.asObservable();

    constructor(private ticketDataService: TicketDataService) {
    }

    load(): void {
        this.ticketDataService.load().subscribe(
            ticketList => {
                this.ticketListSubject.next(ticketList)
            },
            err => {
                console.error('err', err);
            }
        );
    }

}
