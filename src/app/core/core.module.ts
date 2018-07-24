import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SuiModule } from 'ng2-semantic-ui';
import { RouterModule } from '@angular/router';

import { TileGridComponent } from './components/tile-grid/tile-grid.component';
// Table Components
import { TableComponent } from './components/table/table.component';
import { TableColumnDirective } from './components/table/column.directive';
import { TableRowComponent } from './components/table/row/row.component';
import { TableHeaderComponent } from './components/table/header/header.component';
import { TablePaginatorComponent } from './components/table/paginator/paginator.component';
import { TableUseExampleComponent } from './components/table/use-example/use-example.component';

import { HideDirective } from './directives/hide.directive';

import { MinPipe } from './pipes/min.pipe';
import { PixelConverterPipe } from './pipes/px.pipe';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SuiModule,
        RouterModule,
    ],
    declarations: [
        TileGridComponent,
        TableComponent,
        TableColumnDirective,
        TableRowComponent,
        TableHeaderComponent,
        TablePaginatorComponent,
        TableUseExampleComponent,
        // Directives
        HideDirective,
        // Pipes
        MinPipe,
        PixelConverterPipe,
    ],
    exports: [
        TileGridComponent,
        TableComponent,
        TableUseExampleComponent,
        // Directives
        TableColumnDirective,
        HideDirective,
        // Pipes
        MinPipe,
        PixelConverterPipe,
    ]
})
export class CoreModule { }
