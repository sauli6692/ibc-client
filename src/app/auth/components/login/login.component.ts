import { Component } from '@angular/core';
import {
    Router
} from '@angular/router';

import { CoreTile } from '../../../core/interfaces';
import { AuthService } from '../../services';

@Component({
    selector: 'core-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    title = 'Iglesia Bautista El Calvario';
    loginLabel = 'Ingresar';
    passwordLabel = 'Contraseña';
    userLabel = 'Usuario';

    constructor(private authService: AuthService, private router: Router) { }

    onSubmit() {
        this.authService.login('admin', 'admin')
            .subscribe(isLogged => {
                if (isLogged) {
                    this.router.navigate([this.authService.next || '/']);
                }
            });
    }
}
