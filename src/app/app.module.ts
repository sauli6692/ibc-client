import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { SuiModule } from 'ng2-semantic-ui';

import { CoreModule } from './components/core/core.module';
import { AdmModule } from './components/adm/adm.module';
import { MinModule } from './components/min/min.module';
import { PmmModule } from './components/pmm/pmm.module';
import { RteModule } from './components/rte/rte.module';

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
