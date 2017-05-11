import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Waiter} from './waiter';

@Injectable()
export class CashService {
    private cashUrl = 'http://192.168.100.131:8091/GetTables?Type=';  // URL to web api GetTables?Type=
    private headers = new Headers({'Content-Type': 'application/json'});
    constructor(private http: Http) { }
    getWaiter(): Promise<Waiter[]> {
        return this.http.get(this.cashUrl)
            .toPromise()
            .then(response => response.json() as Waiter[])
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
