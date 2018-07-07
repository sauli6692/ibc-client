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
}
