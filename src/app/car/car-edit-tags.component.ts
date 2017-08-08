import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ICar } from './car';

@Component({
    templateUrl: './app/car/car-edit-tags.component.html'
})
export class CarEditTagsComponent implements OnInit {

    errorMessage: string;
    newTags = '';
    car: ICar;

    constructor(private _route: ActivatedRoute) { }

    ngOnInit(): void {
        this._route.parent.data.subscribe(data => {
            this.car = data['car'];
        });
    }

    addTags(): void {
        let tagArray = this.newTags.split(',');
        this.car.tags = this.car.tags ? this.car.tags.concat(tagArray) : tagArray;
        this.newTags = '';
    }

    removeTag(idx: number): void {
        this.car.tags.splice(idx, 1);
    }

}
