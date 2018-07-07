import { Injectable } from '@angular/core';

import { MenuItem } from '../interfaces';

@Injectable({
    providedIn: 'root'
})
export class RouteInformation {
    globalMenu: Array<MenuItem> = [];
    currentMenu: Array<MenuItem> = [];
}
