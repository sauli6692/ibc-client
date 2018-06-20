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
        const isAuthenticated = this.authService.isAuthenticated() && this.authService.isAuthorized(url);

        if (!isAuthenticated && url !== '/login') {
            this.authService.next = url;
            this.router.navigate(['/login']);
        } else if (isAuthenticated && url === '/login') {
            this.authService.next = '/';
            this.router.navigate([this.authService.next]);
        } else if (url === '/login') {
            return true;
        }

        return isAuthenticated;
    }
}
