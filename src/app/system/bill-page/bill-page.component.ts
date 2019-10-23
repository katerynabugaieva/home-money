import { Component, OnInit, OnDestroy } from '@angular/core';
import { BillService } from '../shared/services/bill.service';
import { Observable, Subscription } from 'rxjs';
import { Bill } from '../shared/models/bill.model';

@Component({
  selector: 'app-bill-page',
  templateUrl: './bill-page.component.html',
  styleUrls: ['./bill-page.component.css']
})
export class BillPageComponent implements OnInit {
  sub1: Subscription;
  sub2: Subscription;
  currency: any;
  bill: Bill
  isLoaded: boolean = false;
  constructor(private billService: BillService) { }

  ngOnInit() {
    Observable.combineLatest(
      this.billService.getBill(),
      this.billService.getCurrency()
    ).subscribe((data: [Bill, any]) => {
      this.bill = data[0];
      this.currency = data[1];
      this.isLoaded = true;
    });
  }

  onRefresh() {
    this.isLoaded = false
    this.sub2 = this.billService.getCurrency()
      .subscribe((currency: any) => {
        this.currency = currency;
      })
  }

  /*
    ngOnDestroy() {
      this.sub1.unsubscribe();
      if (this.sub2) {
        this.sub2.unsubscribe();
      }
    }
  */
}
