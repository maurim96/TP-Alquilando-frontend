import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleRoutingModule } from './sample-routing.module';
import { ContentComponent } from './content/content.component';
import { ContentService } from './services/content.service';

@NgModule({
  declarations: [ContentComponent],
  imports: [
    CommonModule,
    SampleRoutingModule,
    SharedModule
  ],
  providers: [ContentService]
})
export class SampleModule { }
