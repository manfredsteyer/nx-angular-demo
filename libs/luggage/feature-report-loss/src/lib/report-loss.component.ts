import { Component, OnInit} from '@angular/core';
import { ReportLossFacade } from '@flight-workspace/luggage/domain';

@Component({
  selector: 'luggage-report-loss',
  templateUrl: './report-loss.component.html',
  styleUrls: ['./report-loss.component.scss']
})
export class ReportLossComponent implements OnInit {
    
    
    lossReportList$ = this.reportLossFacade.lossReportList$;


    constructor(private reportLossFacade: ReportLossFacade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.reportLossFacade.load();
    }

}

