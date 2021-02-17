import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookingFeatureSearchModule } from '@flight-workspace/booking/feature-search';
import { HttpClientModule } from '@angular/common/http';
import { BookingFeatureCheckoutModule } from '@flight-workspace/booking/feature-checkout';

@NgModule({
  imports: [
    BrowserModule, 
    BookingFeatureSearchModule, 
    HttpClientModule, 
    BookingFeatureCheckoutModule
  ],
  providers: [],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}
