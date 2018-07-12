import { TableRowComponent } from '../components/table/row/row.component';
import { TableColumnDirective } from '../components/table/column.directive';

export type RowCallback = (item: any, row: TableRowComponent, index: number) => string;

export type CellCallback = (item: any, row: TableRowComponent, column: TableColumnDirective, index: number) => string;

export interface DataTableTranslations {
    indexColumn: string;
    selectColumn: string;
    expandColumn: string;
    paginationLimit: string;
    paginationRange: string;
}

export interface DataTableParams {
    offset?: number;
    limit?: number;
    sortBy?: string;
    sortAsc?: boolean;
    search?: string;
}

export const defaultTranslations = <DataTableTranslations>{
    indexColumn: 'index',
    selectColumn: 'select',
    expandColumn: 'expand',
    paginationLimit: 'Limit',
    paginationRange: 'Results',
    search: 'Search...'
};
