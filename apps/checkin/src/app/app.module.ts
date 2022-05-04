import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CheckinFeatureManageModule } from '@flight-workspace/checkin/feature-manage';
import { HttpClientModule } from '@angular/common/http';
import { CheckinFeatureUpgradeModule } from '@flight-workspace/checkin/feature-upgrade';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CheckinFeatureManageModule, HttpClientModule, CheckinFeatureUpgradeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
