import { Component, OnInit } from '@angular/core';
import {
    Router
} from '@angular/router';

import { AuthService } from '../../services';

@Component({
    selector: 'auth-login',
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
        this.authService.login('sauli6692', 'qwerty123')
            .subscribe(isLogged => {
                if (isLogged) {
                    this.router.navigate([this.authService.next || '/']);
                }
            });
    }
}
