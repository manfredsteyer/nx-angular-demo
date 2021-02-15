import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flight-workspace/luggage/domain';
import { CheckinComponent } from './checkin.component';
// import { BookingDomainModule } from '@flight-workspace/booking/domain';

@NgModule({
  imports: [
    CommonModule, 
    LuggageDomainModule, 
    // BookingDomainModule
  ],
  declarations: [CheckinComponent],
  exports: [CheckinComponent],
})
export class LuggageFeatureCheckinModule {}
