import { Component } from '@angular/core';
import {
    Router
} from '@angular/router';

import { AuthService } from '../../services';

@Component({
    selector: 'auth-forbidden',
    templateUrl: './forbidden.component.html',
    styleUrls: ['./forbidden.component.scss']
})
export class ForbiddenComponent {
    title = 'Acceso denegado: No tiene los privilegios necesarios';
}
