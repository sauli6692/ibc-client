import { Injectable } from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateChild,
    NavigationExtras,
    CanLoad, Route
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
    constructor(private authService: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.checkLogin(state.url);
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }

    canLoad(route: Route): boolean {
        const url = `/${route.path}`;

        return this.checkLogin(url);
    }

    checkLogin(url: string): boolean {
        const isAuthenticated = this.authService.isAuthenticated();

        if (!isAuthenticated && url !== '/login') {
            this.authService.next = url;
            this.router.navigate(['/login']);
        } else if (isAuthenticated && url === '/login') {
            this.authService.next = '/';
            this.router.navigate([this.authService.next]);
        } else {
            return true;
        }

        return isAuthenticated;
    }
}
