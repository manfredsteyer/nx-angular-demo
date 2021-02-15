import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { BoardingList } from '../entities/boarding-list';
import { BoardingListDataService } from '../infrastructure/boarding-list.data.service';


@Injectable({ providedIn: 'root' })
export class ManageFacade {

    private boardingListListSubject = new BehaviorSubject<BoardingList[]>([]); 
    boardingListList$ = this.boardingListListSubject.asObservable();

    constructor(private boardingListDataService: BoardingListDataService) {
    }

    load(): void {
        this.boardingListDataService.load().subscribe(
            boardingListList => {
                this.boardingListListSubject.next(boardingListList)
            },
            err => {
                console.error('err', err);
            }
        );
    }

}
