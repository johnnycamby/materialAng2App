import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MdDialog } from '@angular/material';

import { ICar } from './car';
import {CarAnalyticsComponent} from './car-analytics.component';
// import {PieChartComponent} from './analytics/charts/pie-chart.component';

@Component({
    templateUrl: './app/car/car-detail.component.html'
})
export class CarDetailComponent implements OnInit {

    pageTitle: string = 'Car Details';
    car: ICar;

    constructor(private _route: ActivatedRoute,  private dialog: MdDialog) { }

    ngOnInit(): void {
        /*
           ------ Read Resolver Data: Snapshot ------------------
          snapshot:
           - used if a resolver is not refetching diferent data unless leaving the page to 
           read the resolver data.
           Access the data property of the snapshot that references the element that uses the name 
           of the data defined in the route configuration.
         */
        this.car = this._route.snapshot.data['car'];
    }

     openDialog() {
         this.dialog.open(CarAnalyticsComponent);
        ////this.dialog.open(PieChartComponent);
    }
}
