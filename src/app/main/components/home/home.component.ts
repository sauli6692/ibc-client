import { Component, OnInit } from '@angular/core';

import * as _ from 'lodash';

import { CoreTile } from '../../../core/interfaces';
import { RouteInformation } from '../../../core/services';

@Component({
    selector: 'core-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    tiles: CoreTile[];
    items = [];
    _items = [{
        'name': '1 Aaron 2Moore',
        'email': 'Heath44@hotmail.com',
        'jobTitle': 'Regional Configuration Producer',
        'active': true,
        'phoneNumber': '611-898-6201',
        'date': '2015-11-06T07:21:25.510Z'
    }, {
        'name': '2 Yvonne Conroy Mrs.',
        'email': 'Gideon9@yahoo.com',
        'jobTitle': 'Global Mobility Orchestrator',
        'active': false,
        'phoneNumber': '115-850-0969',
        'date': '2014-12-20T00:48:40.276Z'
    }, {
        'name': '3 Laron Padberg',
        'email': 'Laney_Huels@hotmail.com',
        'jobTitle': 'Senior Directives Supervisor',
        'active': false,
        'phoneNumber': '632-654-3034',
        'date': '2015-09-29T04:33:38.544Z'
    }, {
        'name': '4 Aaron 2Moore',
        'email': 'Heath44@hotmail.com',
        'jobTitle': 'Regional Configuration Producer',
        'active': true,
        'phoneNumber': '611-898-6201',
        'date': '2015-11-06T07:21:25.510Z'
    }, {
        'name': '5 Yvonne Conroy Mrs.',
        'email': 'Gideon9@yahoo.com',
        'jobTitle': 'Global Mobility Orchestrator',
        'active': false,
        'phoneNumber': '115-850-0969',
        'date': '2014-12-20T00:48:40.276Z'
    }, {
        'name': '6 Laron Padberg',
        'email': 'Laney_Huels@hotmail.com',
        'jobTitle': 'Senior Directives Supervisor',
        'active': false,
        'phoneNumber': '632-654-3034',
        'date': '2015-09-29T04:33:38.544Z'
    }, {
        'name': '7 Laron Padberg',
        'email': 'Laney_Huels@hotmail.com',
        'jobTitle': 'Senior Directives Supervisor',
        'active': false,
        'phoneNumber': '632-654-3034',
        'date': '2015-09-29T04:33:38.544Z'
    }, {
        'name': '8 Laron Padberg',
        'email': 'Laney_Huels@hotmail.com',
        'jobTitle': 'Senior Directives Supervisor',
        'active': false,
        'phoneNumber': '632-654-3034',
        'date': '2015-09-29T04:33:38.544Z'
    }];
    itemCount = 0;

    constructor(
        private routeInfo: RouteInformation
    ) { }

    ngOnInit() {
        this.tiles = _.reduce(this.routeInfo.currentMenu, (prev, item) => {
            prev.push({
                title: item.label,
                description: item.label,
                routerLink: [item.slug]
            });
            return prev;
        }, []);
    }

    reloadItems(params) {
        let items;
        if (params.search) {
            items = this._items.filter(
                item => _.toLower(item.name).indexOf(_.toLower(params.search)) > -1
            );
        } else {
            items = this._items;
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
