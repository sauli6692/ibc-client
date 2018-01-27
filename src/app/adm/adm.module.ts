import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuiModule } from 'ng2-semantic-ui';

import { AdmComponent } from './adm.component';

@NgModule({
  imports: [
    CommonModule,
    SuiModule
  ],
  declarations: [
      AdmComponent
  ],
  exports: [ AdmComponent ]
})
export class AdmModule { }
