import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

export class AbstractDataService {
    protected app: string;
    protected baseUrl: string;

    constructor(protected http: Http, app: string) {
        this.app = app;
        this.baseUrl = `${environment.serverUrl}/${this.app}`;
    }

    protected post(url: string, body: any, options?: RequestOptions): Observable<Response> {
        return this.http.post(this.fullUrl(url), body, options);
    }

    protected get(url: string, options?: RequestOptions): Observable<Response> {
        return this.http.get(this.fullUrl(url), options);
    }

    private fullUrl(url: string) {
        return `${this.baseUrl}/${url}/`;
    }
}
