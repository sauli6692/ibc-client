import { Component } from '@angular/core';

import * as _ from 'lodash';

@Component({
    selector: 'core-table-use-example',
    templateUrl: './use-example.component.html',
    styleUrls: ['./use-example.component.scss']
})
export class TableUseExampleComponent {
    items = [];
    _items = [{
        'name': 'Aaron 2Moore',
        'email': 'Heath44@hotmail.com',
        'jobTitle': 'Regional Configuration Producer',
        'active': true,
        'phoneNumber': '611-898-6201',
        'date': '2015-11-06T07:21:25.510Z'
    }, {
        'name': 'Yvonne Conroy Mrs.',
        'email': 'Gideon9@yahoo.com',
        'jobTitle': 'Global Mobility Orchestrator',
        'active': false,
        'phoneNumber': '115-850-0969',
        'date': '2014-12-20T00:48:40.276Z'
    }, {
        'name': 'Laron Padberg',
        'email': 'Laney_Huels@hotmail.com',
        'jobTitle': 'Senior Directives Supervisor',
        'active': false,
        'phoneNumber': '632-654-3034',
        'date': '2015-09-29T04:33:38.544Z'
    }, {
        'name': 'Aaron 2Moore 2',
        'email': 'Heath44@hotmail.com',
        'jobTitle': 'Regional Configuration Producer',
        'active': true,
        'phoneNumber': '611-898-6201',
        'date': '2015-11-06T07:21:25.510Z'
    }, {
        'name': 'Yvonne Conroy Mrs. 2',
        'email': 'Gideon9@yahoo.com',
        'jobTitle': 'Global Mobility Orchestrator',
        'active': false,
        'phoneNumber': '115-850-0969',
        'date': '2014-12-20T00:48:40.276Z'
    }, {
        'name': 'Laron Padberg 2',
        'email': 'Laney_Huels@hotmail.com',
        'jobTitle': 'Senior Directives Supervisor',
        'active': false,
        'phoneNumber': '632-654-3034',
        'date': '2015-09-29T04:33:38.544Z'
    }, {
        'name': 'Laron Padberg 3',
        'email': 'Laney_Huels@hotmail.com',
        'jobTitle': 'Senior Directives Supervisor',
        'active': false,
        'phoneNumber': '632-654-3034',
        'date': '2015-09-29T04:33:38.544Z'
    }, {
        'name': 'Laron Padberg 4',
        'email': 'Laney_Huels@hotmail.com',
        'jobTitle': 'Senior Directives Supervisor',
        'active': false,
        'phoneNumber': '632-654-3034',
        'date': '2015-09-29T04:33:38.544Z'
    }];
    itemCount = 0;

    reloadItems(params) {
        let items;
        if (params.search) {
            items = this._items.filter(
                item => _.toLower(item.name).indexOf(_.toLower(params.search)) > -1
            );
        } else {
            items = this._items;
        }
        if (params.ordering) {
            items = _.orderBy(items, [params.ordering.slice(1)], [_.startsWith(params.ordering, '-') ? 'desc' : 'asc']);
        }
        this.items = items.slice(params.offset, params.offset + params.limit);
        this.itemCount = items.length;
    }

    rowClick(rowEvent) {
        console.log('Clicked: ' + rowEvent.row.item.name);
    }

    rowDoubleClick(rowEvent) {
        alert('Double clicked: ' + rowEvent.row.item.name);
    }

    rowTooltip(item) { return item.jobTitle; }
}
