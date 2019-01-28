import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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

import { FieldComponent } from './components/form/field/field.component';
import { FormComponent } from './components/form/form.component';
import { FormUseExampleComponent } from './components/form/use-example/use-example.component';

import { SaveModalComponent } from './components/save-modal/save-modal.component';

import { HideDirective } from './directives/hide.directive';

import { MinPipe } from './pipes/min.pipe';
import { PixelConverterPipe } from './pipes/px.pipe';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SuiModule,
        RouterModule,
    ],
    declarations: [
        TileGridComponent,
        FieldComponent,
        FormComponent,
        FormUseExampleComponent,
        TableComponent,
        TableColumnDirective,
        TableRowComponent,
        TableHeaderComponent,
        TablePaginatorComponent,
        TableUseExampleComponent,
        SaveModalComponent,
        // Directives
        HideDirective,
        // Pipes
        MinPipe,
        PixelConverterPipe,
    ],
    exports: [
        TileGridComponent,
        FieldComponent,
        FormComponent,
        FormUseExampleComponent,
        TableComponent,
        TableUseExampleComponent,
        SaveModalComponent,
        // Directives
        TableColumnDirective,
        HideDirective,
        // Pipes
        MinPipe,
        PixelConverterPipe,
    ],
    // More info: https://angular.io/guide/entry-components
    entryComponents: [
        SaveModalComponent
    ]
})
export class CoreModule { }
