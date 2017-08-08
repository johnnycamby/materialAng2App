import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ICar } from './car';
import { CarService } from './car.service';

import { ExceptionService } from './../utilities/exception.service';

@Component({
    templateUrl: './app/car/car-list.component.html',
    styleUrls: ['./app/car/car-list.component.css']
})
export class CarListComponent implements OnInit {

    pageTitle: string = 'Xplicit Car List';
    imageWidth: number = 60;
    imageMargin: number = 2;
    imageLgWidth: number = 250;
    imageLgHeight: number = 180;
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;

    cars: ICar[];

    constructor(private _carService: CarService,
        private _route: ActivatedRoute,
        private _exceptionService: ExceptionService) { }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.listFilter = this._route.snapshot.queryParams['filterBy'] || '';
        // NB: params are always string thus setting a 'true' rather than true
        this.showImage = this._route.snapshot.queryParams['showImage'] === 'true';
        this._carService.getCars().subscribe(cars => this.cars = cars,
            error => this.errorMessage = <any>error);
    }
}
