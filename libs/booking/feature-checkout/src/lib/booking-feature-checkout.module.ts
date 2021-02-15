import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingDomainModule } from '@flight-workspace/booking/domain';
import { CheckoutComponent } from './checkout.component';

@NgModule({
  imports: [CommonModule, BookingDomainModule],
  declarations: [CheckoutComponent],
  exports: [CheckoutComponent],
})
export class BookingFeatureCheckoutModule {}
