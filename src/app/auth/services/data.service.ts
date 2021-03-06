import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Component, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import * as _ from 'lodash';

import { AbstractDataService } from '../../core/services';
import { RouteMetadata } from '../../core/interfaces';

@Injectable()
export class AuthDataService extends AbstractDataService {
    constructor(protected http: Http) { super(http, 'auth'); }

    login(username: string, password: string): Observable<string> {
        const data = { username, password };
        return this.post('login', data).pipe(map(response => response.json().token));
    }

    getRouteMetadata(url: string): Observable<RouteMetadata> {
        const options = new RequestOptions();
        options.params = new URLSearchParams();
        options.params.append('slug', url);
        return this.get('ui-routes', options)
            .pipe(map(response => response.json()));
    }
}
