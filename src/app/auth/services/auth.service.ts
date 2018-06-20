import { Injectable } from '@angular/core';

import * as _ from 'lodash';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthDataService } from './data.service';
import { User } from '../interfaces';

@Injectable()
export class AuthService {
    // store the URL so we can redirect after logging in
    next: string;
    activeUser: User;

    constructor(
        private jwtHelper: JwtHelperService,
        private dataService: AuthDataService,
    ) {}


    login(username, password): Observable<boolean> {
        return this.dataService.login(username, password)
            .pipe(map(token => {
                if (!!token) {
                    localStorage.setItem('token', token);
                    this.activeUser = this.jwtHelper.decodeToken();
                }
                return !!token;
            }));
    }

    logout(): void {
        localStorage.removeItem('token');
        this.activeUser = null;
    }

    isAuthenticated(): boolean {
        this.activeUser = this.jwtHelper.decodeToken();
        return !this.jwtHelper.isTokenExpired();
    }

    isAuthorized(url: string): Observable<boolean> | boolean {
        if (!this.activeUser) { return false; }

        if (this.activeUser.isSuperuser) { return true; }

        return this.dataService.getURLRoles(url)
            .pipe(map(allowedRoles =>
                _.isEmpty(allowedRoles)
                || !_.isEmpty(_.intersection(this.activeUser.roles, allowedRoles))
            ));
    }
}
