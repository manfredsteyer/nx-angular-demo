import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookingFeatureSearchModule } from '@flight-workspace/booking/feature-search';
import { HttpClientModule } from '@angular/common/http';
import { BookingFeatureCheckoutModule } from '@flight-workspace/booking/feature-checkout';
import { BookingFeatureAccountModule } from '@flight-workspace/booking/feature-account';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BookingFeatureSearchModule, HttpClientModule, BookingFeatureCheckoutModule, BookingFeatureAccountModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
