import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { ICar } from './car';

@Component({
    templateUrl: './app/car/car-edit-info.component.html'
})
export class CarEditInfoComponent implements OnInit {

    @ViewChild(NgForm) carForm: NgForm;

    errorMessage: string;
    car: ICar;

    constructor(private _route: ActivatedRoute) { }

    ngOnInit(): void {
        this._route.parent.data.subscribe(data => {
            this.car = data['car'];

            if (this.carForm) {
                this.carForm.reset();
            }
        });
    }

}
