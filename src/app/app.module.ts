import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { SuiModule } from 'ng2-semantic-ui';

import { CoreModule } from './core/core.module';
import { AdmModule } from './adm/adm.module';
import { MinModule } from './min/min.module';
import { PmmModule } from './pmm/pmm.module';
import { RteModule } from './rte/rte.module';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    SuiModule,
    CoreModule,
    AdmModule,
    MinModule,
    PmmModule,
    RteModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
