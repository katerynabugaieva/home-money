import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Bill } from '../models/bill.model';
import { BaseApi } from 'src/app/shared/core/base-api';

@Injectable()
export class BillService extends BaseApi {
    constructor(public http: Http) {
        super(http)
    }
    /*
    getBill(): Observable<Bill> {
        return this.get('bill')
        //return this.http.get('http://localhost:3000/')
        //    .map((response: Response) => response.text())
        //  .map((response: Response) => response.json());
    }
    */
    getBill(): Observable<Bill> {
        return this.get('bill');
    }

    getCurrency(base: string = 'UAH'): Observable<any> {
        return this.http.get('https://data.fixer.io/api/latest?base=${base}')
            .map((response: Response) => response.json());
    }
}
