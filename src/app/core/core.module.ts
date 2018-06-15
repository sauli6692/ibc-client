import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuiModule } from 'ng2-semantic-ui';
import { RouterModule } from '@angular/router';

import { TileGridComponent } from './components/tile-grid/tile-grid.component';

@NgModule({
    imports: [
        CommonModule,
        SuiModule,
        RouterModule,
    ],
    declarations: [
        TileGridComponent,
    ],
    exports: [
        TileGridComponent,
    ]
})
export class CoreModule { }
