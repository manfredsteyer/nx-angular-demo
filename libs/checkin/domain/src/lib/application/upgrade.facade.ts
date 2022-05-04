import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Passenger } from '../entities/passenger';
import { PassengerDataService } from '../infrastructure/passenger.data.service';


@Injectable({ providedIn: 'root' })
export class UpgradeFacade {

    private passengerListSubject = new BehaviorSubject<Passenger[]>([]); 
    passengerList$ = this.passengerListSubject.asObservable();

    constructor(private passengerDataService: PassengerDataService) {
    }

    load(): void {
        this.passengerDataService.load().subscribe(
            passengerList => {
                this.passengerListSubject.next(passengerList)
            },
            err => {
                console.error('err', err);
            }
        );
    }

}
