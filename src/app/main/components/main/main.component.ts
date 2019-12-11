import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { RouteInformation } from '../../../core/services';


@Component({
    selector: 'core-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent {
    title = 'Iglesia Bautista El Calvario';
    constructor(
        private routeInfo: RouteInformation,
        private authService: AuthService,
        private router: Router
    ) { }

    logout(){
        this.authService.logout();
    }
}
