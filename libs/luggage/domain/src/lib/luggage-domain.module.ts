import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUtilAuthModule } from '@flight-workspace/shared/util-auth';
import { SharedUtilLoggerModule } from '@flight-workspace/shared/util-logger';

@NgModule({
  imports: [CommonModule, SharedUtilAuthModule, SharedUtilLoggerModule],
})
export class LuggageDomainModule {}
