import { Component } from '@angular/core';

import { CoreTile } from '../../../core/interfaces';

@Component({
    selector: 'core-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    tiles: CoreTile[] = [
        {
            title: 'Personas',
            description: 'Description de las personas',
            background: '/assets/images/debian_1.png',
            routerLink: ['/home']
        },
        {
            title: 'Personas',
            externalLink: 'https://github.com/'
        }
    ];

    constructor() { }
}
