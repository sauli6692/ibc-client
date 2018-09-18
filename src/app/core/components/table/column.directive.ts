import { Directive, Input, ContentChild, OnInit } from '@angular/core';

import { TableRowComponent } from './row/row.component';
import { CellCallback } from '../../interfaces';

@Directive({
    // tslint:disable-next-line
    selector: 'core-table-column'
})
export class TableColumnDirective implements OnInit {
    private styleClassObject = {};

    @Input() header: string;
    @Input() sortable = false;
    @Input() resizable = false;
    @Input() property: string;
    @Input() styleClass: string;
    @Input() cellColors: CellCallback;
    @Input() width: number | string;
    @Input() visible = true;

    @ContentChild('dataTableCell') cellTemplate;
    @ContentChild('dataTableHeader') headerTemplate;

    getCellColor(row: TableRowComponent, index: number) {
        if (this.cellColors !== undefined) {
            return (<CellCallback>this.cellColors)(row.item, row, this, index);
        }
    }


    ngOnInit() {
        this._initCellClass();
    }

    private _initCellClass() {
        if (!this.styleClass && this.property) {
            if (/^[a-zA-Z0-9_]+$/.test(this.property)) {
                this.styleClass = 'column-' + this.property;
            } else {
                this.styleClass = 'column-' + this.property.replace(/[^a-zA-Z0-9_]/g, '');
            }
        }

        if (this.styleClass != null) {
            this.styleClassObject = {
                [this.styleClass]: true
            };
        }
    }
}
