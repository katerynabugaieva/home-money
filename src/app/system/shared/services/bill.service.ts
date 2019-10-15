import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Bill} from '../models/bill.model';

@Injectable()
export class BillService {
    constructor(private http: Http) {

    }
    getBill(): Observable<Bill> {
        return this.http.get('http://localhost:3000/')
        .map((response: Response) => response.json());
    }

    getCurrency(base: string = 'UAH'): Observable<any> {
        return this.http.get('https://data.fixer.io/api/latest?base=${base}')
        .map((response: Response) => response.json());
    }
}
