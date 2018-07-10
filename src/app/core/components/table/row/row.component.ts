import {
    Component, Input, Inject, forwardRef, Output, EventEmitter, OnDestroy
} from '@angular/core';
import { TableComponent } from '../table.component';

@Component({
    // tslint:disable-next-line
    selector: '[coreTableRow]',
    templateUrl: './row.component.html',
    styleUrls: ['./row.component.scss']
})
export class TableRowComponent implements OnDestroy {
    expanded: boolean;
    private _selected: boolean;

    @Input() item: any;
    @Input() index: number;

    @Output() selectedChange = new EventEmitter();

    _this = this; // FIXME is there no template keyword for this in angular 2?

    get selected() {
        return this._selected;
    }

    set selected(selected) {
        this._selected = selected;
        this.selectedChange.emit(selected);
    }

    get displayIndex() {
        if (this.dataTable.pagination) {
            return this.dataTable.displayParams.offset + this.index + 1;
        } else {
            return this.index + 1;
        }
    }

    constructor(@Inject(forwardRef(() => TableComponent)) public dataTable: TableComponent) {}

    ngOnDestroy() {
        this.selected = false;
    }

    getTooltip() {
        if (this.dataTable.rowTooltip) {
            return this.dataTable.rowTooltip(this.item, this, this.index);
        }
        return '';
    }
}
