import { Component, Inject, forwardRef } from '@angular/core';
import { TableComponent } from '../table.component';

@Component({
  selector: 'core-table-pagination',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class TablePaginatorComponent {
    limitOptions: Array<number> = [5, 10, 15, 20, 25, 30];
    constructor(
      @Inject(forwardRef(() => TableComponent)) public dataTable: TableComponent
    ) {}

    get maxPage() {
        return Math.ceil(this.dataTable.itemCount / this.dataTable.limit);
    }

    get limit() {
        return this.dataTable.limit;
    }

    set limit(value) {
        this.dataTable.limit = value;
    }

    get page() {
        return this.dataTable.page;
    }

    set page(value) {
        this.dataTable.page = Number(<any>value);
    }

    get prevValid() {
        return this.dataTable.offset > 0;
    }

    get nextValid() {
        return (this.dataTable.offset + this.dataTable.limit) < this.dataTable.itemCount;
    }

    pageBack() {
        this.dataTable.offset -= Math.min(this.dataTable.limit, this.dataTable.offset);
    }

    pageForward() {
        this.dataTable.offset += this.dataTable.limit;
    }

    pageFirst() {
        this.dataTable.offset = 0;
    }

    pageLast() {
        this.dataTable.offset = (this.maxPage - 1) * this.dataTable.limit;
    }

    goto(pageInput) {
        const prevValid = pageInput.value < this.page && this.prevValid;
        const nextValid = pageInput.value > this.page && this.nextValid;
        if (prevValid || nextValid) {
            this.page = pageInput.value;
        } else {
          pageInput.value = this.page;
        }
    }
}
