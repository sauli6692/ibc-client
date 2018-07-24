import { Component, Inject, forwardRef } from '@angular/core';
import { TableComponent } from '../table.component';

@Component({
  selector: 'core-table-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class TableHeaderComponent {
    constructor(
      @Inject(forwardRef(() => TableComponent)) public dataTable: TableComponent
    ) {}

    search(value: string) {
        setTimeout(() => this.dataTable.search = value, 300);
    }
}
