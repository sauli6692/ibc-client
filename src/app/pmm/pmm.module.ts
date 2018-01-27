import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuiModule } from 'ng2-semantic-ui';

import { PmmComponent } from './pmm.component';

@NgModule({
  imports: [
    CommonModule,
    SuiModule
  ],
  declarations: [
      PmmComponent
  ],
  exports: [ PmmComponent ]
})
export class PmmModule { }
