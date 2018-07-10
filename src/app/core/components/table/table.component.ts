import {
    Component, Input, Output, EventEmitter, ContentChildren, QueryList,
    TemplateRef, ContentChild, ViewChildren, OnInit
} from '@angular/core';

import { TableColumnDirective } from './column.directive';
import { TableRowComponent } from './row/row.component';
import {
  DataTableParams,
  RowCallback,
  DataTableTranslations,
  defaultTranslations
} from '../../interfaces';
import { UtilitiesService } from '../../services';

@Component({
  selector: 'core-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements DataTableParams, OnInit {
    selectedRow: TableRowComponent;
    indexColumnVisible: boolean;
    selectColumnVisible: boolean;
    expandColumnVisible: boolean;
    selectedRows: TableRowComponent[] = [];
    resizeLimit = 30;

    private _items: any[] = [];
    private _sortBy: string;
    private _sortAsc = true;
    private _offset = 0;
    private _limit = 10;
    private _reloading = false;
    private _displayParams = <DataTableParams>{};
    private _scheduledReload = null;
    private _selectAllCheckbox = false;
    private _resizeInProgress = false;

    @Input() itemCount: number;
    @Input() headerTitle: string;
    @Input() header = true;
    @Input() pagination = true;
    @Input() indexColumn = true;
    @Input() indexColumnHeader = '';
    @Input() rowColors: RowCallback;
    @Input() rowTooltip: RowCallback;
    @Input() selectColumn = false;
    @Input() multiSelect = true;
    @Input() substituteRows = true;
    @Input() expandableRows = false;
    @Input() translations: DataTableTranslations = defaultTranslations;
    @Input() selectOnRowClick = false;
    @Input() autoReload = true;
    @Input() showReloading = false;

    @Output() reload = new EventEmitter();
    @Output() rowClick = new EventEmitter();
    @Output() rowDoubleClick = new EventEmitter();
    @Output() headerClick = new EventEmitter();
    @Output() cellClick = new EventEmitter();

    // UI components:
    @ContentChildren(TableColumnDirective) columns: QueryList<TableColumnDirective>;
    @ViewChildren(TableRowComponent) rows: QueryList<TableRowComponent>;
    @ContentChild('dataTableExpand') expandTemplate: TemplateRef<any>;

    @Input()
    get items() { return this._items; }

    set items(items: any[]) {
        this._items = items;
        this._onReloadFinished();
    }

    @Input()
    get sortBy() { return this._sortBy; }

    set sortBy(value) {
        this._sortBy = value;
        this._triggerReload();
    }

    @Input()
    get sortAsc() { return this._sortAsc; }

    set sortAsc(value) {
        this._sortAsc = value;
        this._triggerReload();
    }

    @Input()
    get offset() { return this._offset; }

    set offset(value) {
        this._offset = value;
        this._triggerReload();
    }

    @Input()
    get limit() { return this._limit; }

    set limit(value) {
        this._limit = value;
        this._triggerReload();
    }

    @Input()
    get page() { return Math.floor(this.offset / this.limit) + 1; }

    set page(value) {
        this.offset = (value - 1) * this.limit;
    }

    get lastPage() { return Math.ceil(this.itemCount / this.limit); }

    get reloading() { return this._reloading; }

    get displayParams() {
        return this._displayParams;
    }

    get selectAllCheckbox() {
        return this._selectAllCheckbox;
    }

    set selectAllCheckbox(value) {
        this._selectAllCheckbox = value;
        this._onSelectAllChanged(value);
    }

    get columnCount() {
        let count = 0;
        count += this.indexColumnVisible ? 1 : 0;
        count += this.selectColumnVisible ? 1 : 0;
        count += this.expandColumnVisible ? 1 : 0;
        this.columns.toArray().forEach(column => {
            count += column.visible ? 1 : 0;
        });
        return count;
    }

    get substituteItems() {
        return Array.from({ length: this.displayParams.limit - this.items.length });
    }

    constructor(private utils: UtilitiesService) {}

    ngOnInit() {
        this._initDefaultValues();
        this._initDefaultClickEvents();
        this._updateDisplayParams();

        if (this.autoReload && this._scheduledReload == null) {
            this.reloadItems();
        }
    }

    sort(sortBy: string, asc: boolean) {
        this.sortBy = sortBy;
        this.sortAsc = asc;
    }

    private _initDefaultValues() {
        this.indexColumnVisible = this.indexColumn;
        this.selectColumnVisible = this.selectColumn;
        this.expandColumnVisible = this.expandableRows;
    }

    private _initDefaultClickEvents() {
        this.headerClick.subscribe(tableEvent => this.sortColumn(tableEvent.column));
        if (this.selectOnRowClick) {
            this.rowClick.subscribe(tableEvent => tableEvent.row.selected = !tableEvent.row.selected);
        }
    }

    reloadItems() {
        this._reloading = true;
        this.reload.emit(this._getRemoteParameters());
    }

    private _onReloadFinished() {
        this._updateDisplayParams();

        this._selectAllCheckbox = false;
        this._reloading = false;
    }

    _updateDisplayParams() {
        this._displayParams = {
            sortBy: this.sortBy,
            sortAsc: this.sortAsc,
            offset: this.offset,
            limit: this.limit
        };
    }

    // for avoiding cascading reloads if multiple params are set at once:
    _triggerReload() {
        if (this._scheduledReload) {
            clearTimeout(this._scheduledReload);
        }
        this._scheduledReload = setTimeout(() => {
            this.reloadItems();
        });
    }

    rowClicked(row: TableRowComponent, event) {
        this.rowClick.emit({ row, event });
    }

    rowDoubleClicked(row: TableRowComponent, event) {
        this.rowDoubleClick.emit({ row, event });
    }

    headerClicked(column: TableColumnDirective, event: MouseEvent) {
        if (!this._resizeInProgress) {
            this.headerClick.emit({ column, event });
        } else {
            this._resizeInProgress = false; // this is because I can't prevent click from mousup of the drag end
        }
    }

    cellClicked(column: TableColumnDirective, row: TableRowComponent, event: MouseEvent) {
        this.cellClick.emit({ row, column, event });
    }

    // functions:

    private _getRemoteParameters(): DataTableParams {
        const params = <DataTableParams>{};

        if (this.sortBy) {
            params.sortBy = this.sortBy;
            params.sortAsc = this.sortAsc;
        }
        if (this.pagination) {
            params.offset = this.offset;
            params.limit = this.limit;
        }
        return params;
    }

    private sortColumn(column: TableColumnDirective) {
        if (column.sortable) {
            const ascending = this.sortBy === column.property ? !this.sortAsc : true;
            this.sort(column.property, ascending);
        }
    }

    getRowColor(item: any, index: number, row: TableRowComponent) {
        if (this.rowColors !== undefined) {
            return (<RowCallback>this.rowColors)(item, row, index);
        }
    }

    private _onSelectAllChanged(value: boolean) {
        this.rows.toArray().forEach(row => row.selected = value);
    }

    onRowSelectChanged(row: TableRowComponent) {

        // maintain the selectedRow(s) view
        if (this.multiSelect) {
            const index = this.selectedRows.indexOf(row);
            if (row.selected && index < 0) {
                this.selectedRows.push(row);
            } else if (!row.selected && index >= 0) {
                this.selectedRows.splice(index, 1);
            }
        } else {
            if (row.selected) {
                this.selectedRow = row;
            } else if (this.selectedRow === row) {
                this.selectedRow = undefined;
            }
        }

        // unselect all other rows:
        if (row.selected && !this.multiSelect) {
            this.rows.toArray().filter(row_ => row_.selected).forEach(row_ => {
                if (row_ !== row) { // avoid endless loop
                    row_.selected = false;
                }
            });
        }
    }

    private resizeColumnStart(event: MouseEvent, column: TableColumnDirective, columnElement: HTMLElement) {
        this._resizeInProgress = true;

        this.utils.drag(event, {
            move: (moveEvent: MouseEvent, dx: number) => {
                if (this._isResizeInLimit(columnElement, dx)) {
                    column.width = columnElement.offsetWidth + dx;
                }
            },
        });
    }

    private _isResizeInLimit(columnElement: HTMLElement, dx: number) {
        /* This is needed because CSS min-width didn't work on table-layout: fixed.
         Without the limits, resizing can make the next column disappear completely,
         and even increase the table width. The current implementation suffers from the fact,
         that offsetWidth sometimes contains out-of-date values. */
        if ((dx < 0 && (columnElement.offsetWidth + dx) <= this.resizeLimit) ||
            !columnElement.nextElementSibling || // resizing doesn't make sense for the last visible column
            (dx >= 0 && ((<HTMLElement> columnElement.nextElementSibling).offsetWidth + dx) <= this.resizeLimit)) {
            return false;
        }
        return true;
    }
}
