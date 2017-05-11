import { Component, OnInit } from '@angular/core';
import { CashService } from './cash.service';
import {Waiter} from './waiter';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
    waiters: Waiter[];
    constructor(private cashService: CashService) { }
    ngOnInit(): void {
        this.cashService.getWaiter()
            .then(waiters => this.waiters = waiters);
    }
}
