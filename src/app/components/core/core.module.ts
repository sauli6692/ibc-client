import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuiModule } from 'ng2-semantic-ui';

import { CoreComponent } from './core.component';

@NgModule({
  imports: [
    CommonModule,
    SuiModule
  ],
  declarations: [
      CoreComponent
  ],
  exports: [ CoreComponent ]
})
export class CoreModule { }
