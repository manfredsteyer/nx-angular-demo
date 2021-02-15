import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingDomainModule } from '@flight-workspace/booking/domain';
import { AccountComponent } from './account.component';

@NgModule({
  imports: [CommonModule, BookingDomainModule],
  declarations: [AccountComponent],
  exports: [AccountComponent],
})
export class BookingFeatureAccountModule {}
