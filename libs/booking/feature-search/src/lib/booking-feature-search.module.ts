import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingDomainModule } from '@flight-workspace/booking/domain';
import { SearchComponent } from './search.component';

// import { BoardingDomainModule } from '@flight-workspace/boarding/domain';

@NgModule({
  imports: [
    CommonModule, 
    BookingDomainModule,
    // BoardingDomainModule
  ],
  declarations: [SearchComponent],
  exports: [SearchComponent],
})
export class BookingFeatureSearchModule {}
