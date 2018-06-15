import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuiModule } from 'ng2-semantic-ui';

import { CoreModule } from '../core/core.module';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
    imports: [
        CommonModule,
        SuiModule,
        CoreModule,
        MainRoutingModule
    ],
    declarations: [
        MainComponent,
        HomeComponent,
    ],
})
export class MainModule { }
