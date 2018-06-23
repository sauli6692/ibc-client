import { Injectable } from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateChild,
    NavigationExtras,
    CanLoad, Route
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
    constructor(private authService: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        return this.checkLogin(state.url);
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        return this.canActivate(route, state);
    }

    canLoad(route: Route): Observable<boolean> | boolean {
        const url = `/${route.path}`;

        return this.checkLogin(url);
    }

    checkLogin(url: string): Observable<boolean> | boolean {
        if (!this.authService.isAuthenticated()) {
            this.authService.next = url;
            this.router.navigate(['/login']);
            return false;
        }

        const isAuthorized = this.authService.isAuthorized(url);
        if (isAuthorized instanceof Observable) {
            return isAuthorized.pipe(map(response => {
                if (!response) {
                    this.router.navigate(['/forbidden']);
                }
                return response;
            }));
        }

        return isAuthorized;
    }
}
