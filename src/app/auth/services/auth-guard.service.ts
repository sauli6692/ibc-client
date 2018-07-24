import { Injectable } from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateChild,
    NavigationExtras,
    CanLoad, Route
} from '@angular/router';

import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthService } from './auth.service';
import { AuthDataService } from './data.service';
import { RouteInformation } from '../../core/services';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
    constructor(
        private router: Router,
        private authService: AuthService,
        private dataService: AuthDataService,
        private routeInfo: RouteInformation
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        return this.checkRouteInformation(state.url);
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        return this.canActivate(route, state);
    }

    canLoad(route: Route): Observable<boolean> | boolean {
        const url = `/${route.path}`;

        return this.checkRouteInformation(url);
    }

    checkRouteInformation(url: string): Observable<boolean> | boolean {
        url = url === '/' ? '/home' : url;

        const isAuthenticated = this.checkAuthentication(url);

        if (_.isBoolean(isAuthenticated)) {
            return isAuthenticated;
        }

        return this.dataService.getRouteMetadata(url)
            .pipe(map(routeData => {
                const isAuthorized = this.authService.isAuthorized(routeData.roles);

                if (isAuthorized) {
                    this.routeInfo.currentMenu = routeData.menu;
                    if (url === '/home') {
                        this.routeInfo.globalMenu = routeData.menu;
                    }
                } else {
                    this.router.navigate(['/forbidden']);
                }

                return isAuthorized;
            }));
    }

    private checkAuthentication(url: string): boolean {
        if (!this.authService.isAuthenticated() && url !== '/login') {
            this.authService.next = url;
            this.router.navigate(['/login']);
            return false;
        } else if (this.authService.isAuthenticated() && url === '/login') {
            this.router.navigate(['/']);
            return false;
        } else if (url === '/login') {
            return true;
        }
    }
}
