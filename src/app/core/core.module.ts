import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuiModule } from 'ng2-semantic-ui';

import { CoreComponent } from './core.component';

import { AuthGuard } from './guards/auth.guard';
import { Feathers } from './services/feathers.service';

@NgModule({
    imports: [
        CommonModule,
        SuiModule
    ],
    declarations: [
        CoreComponent
    ],
    providers: [
        AuthGuard,
        Feathers
    ],
    exports: [
        CoreComponent
    ]
})
export class CoreModule { }
