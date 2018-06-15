import { Component } from '@angular/core';

import { CoreTile } from '../../../core/interfaces';


@Component({
    selector: 'core-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent {
    tiles: CoreTile[] = [
        {
            title: 'Personas',
            description: 'Description de las personas',
            background: '/assets/images/debian-1.png',
            routerLink: ['/adm']
        },
        {
            title: 'Personas',
            externalLink: 'https://github.com/'
        }
    ];

    constructor() { }
}
