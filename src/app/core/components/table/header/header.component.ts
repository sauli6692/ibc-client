import { Component, Inject, forwardRef, HostListener } from '@angular/core';
import { TableComponent } from '../table.component';

@Component({
  selector: 'core-table-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class TableHeaderComponent {
    columnSelectorOpen = false;

    constructor(@Inject(forwardRef(() => TableComponent)) public dataTable: TableComponent) {}

    @HostListener('document:click') _closeSelector() {
        this.columnSelectorOpen = false;
    }
}
