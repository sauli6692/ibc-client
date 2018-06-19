import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

import { AuthDataService } from './data.service';

@Injectable()
export class AuthService {
    constructor(
        private jwtHelper: JwtHelperService,
        private dataService: AuthDataService,
    ) {}

    // store the URL so we can redirect after logging in
    next: string;

    login(username, password): Observable<boolean> {
        return this.dataService.login(username, password)
            .pipe(map(token => {
                if (!!token) {
                    localStorage.setItem('token', token);
                }
                return !!token;
            }));
    }

    logout(): void {
        localStorage.removeItem('token');
    }

    public isAuthenticated(): boolean {
        return !this.jwtHelper.isTokenExpired();
    }
}
