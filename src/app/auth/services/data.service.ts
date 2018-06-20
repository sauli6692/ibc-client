import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Component, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import * as _ from 'lodash';

import { AbstractDataService } from '../../core/services';

@Injectable()
export class AuthDataService extends AbstractDataService {
    constructor(protected http: Http) { super(http, 'auth'); }

    login(username: string, password: string): Observable<string> {
        const data = { username, password };
        return this.post('login', data).pipe(map(response => response.json().token));
    }

    getURLRoles(url: string): Observable<number[]> {
        return of([]);
    }
}
