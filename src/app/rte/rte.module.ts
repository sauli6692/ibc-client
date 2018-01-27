import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuiModule } from 'ng2-semantic-ui';

import { RteComponent } from './rte.component';

@NgModule({
  imports: [
    CommonModule,
    SuiModule
  ],
  declarations: [
      RteComponent
  ],
  exports: [ RteComponent ]
})
export class RteModule { }
