import { Component, OnInit} from '@angular/core';
import { ManageFacade } from '@flight-workspace/boarding/domain';

@Component({
  selector: 'boarding-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
    
    
    boardingListList$ = this.manageFacade.boardingListList$;


    constructor(private manageFacade: ManageFacade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.manageFacade.load();
    }

}

