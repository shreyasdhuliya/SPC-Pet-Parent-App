import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class ApiService {
    public contextRoot: string;

    constructor(protected httpClient: HttpClient) {
        this.contextRoot = environment.apiEndpoint;
    }

    get(url: string, params?: any, options?: any): Observable<any> {
        return this.httpClient.get(this.contextRoot+ url, {params, ...options});
    }

    post(url: string, data: any, options?: any): Observable<any> {
        return this.httpClient.post(this.contextRoot + url, data, options);
    }
}