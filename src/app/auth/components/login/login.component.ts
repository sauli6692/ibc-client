import { Component, } from '@angular/core';
import {
    Router
} from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
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

    loginForm = new FormGroup({
        user: new FormControl('',[Validators.required]),
        password: new FormControl('',[Validators.required]),
    });

    getUser(){
        return this.loginForm.get('user').value;
    }

    getPassword(){
        return this.loginForm.get('password').value;
    }

    constructor(private authService: AuthService, private router: Router) { }

    onSubmit() {
        this.authService.login(this.getUser(),this.getPassword())
            .subscribe(isLogged => {
                if (isLogged) {
                    this.router.navigate([this.authService.next || '/']);
                }
            });
    }
}
