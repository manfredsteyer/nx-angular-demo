import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckinDomainModule } from '@flight-workspace/checkin/domain';
import { UpgradeComponent } from './upgrade.component';

@NgModule({
  imports: [CommonModule, CheckinDomainModule],
  declarations: [
    UpgradeComponent
  ],
  exports: [
    UpgradeComponent
  ],
})
export class CheckinFeatureUpgradeModule {}
