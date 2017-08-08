import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ICar } from './car';
import { CarService } from './car.service';
import { ModalService } from '../utilities/modal/modal.service';
import { ToastService } from '../utilities/toast/toast.service';
import { MessageService } from '../messages/message.service';


@Component({
    templateUrl: './app/car/car-edit.component.html',
    styleUrls: ['./app/car/car-edit.component.css']
})
export class CarEditComponent implements OnInit {

    pageTitle: string = 'Car Edit';
    errorMessage: string;

    private _currentCar: ICar;
    private _originalCar: ICar;
    // key = tab path name & value = true or false
    private _dataIsValid: { [key: string]: boolean } = {};

    constructor(private _carService: CarService,
        private _route: ActivatedRoute,
        private _router: Router,
        private messageService: MessageService,
        private _toast: ToastService,
        private _modalService: ModalService
    ) { }

    get car(): ICar {
        return this._currentCar;
    }

    set car(value: ICar) {
        this._currentCar = value;
        // clone the object to retain a copy
        this._originalCar = Object.assign({}, value);
    }

    get isDirty(): boolean {
        return JSON.stringify(this._originalCar) !== JSON.stringify(this._currentCar);
    }

    ngOnInit(): void {
        // help re-read data from the 'car-route' using Observable
        this._route.data.subscribe(data => { this.onCarRetrieved(data['car']); });
    }

    onCarRetrieved(car: ICar): void {
        this.car = car;
        if (this.car.id === 0) {
            this.pageTitle = 'Add New Car';
        } else {
            this.pageTitle = `Edit Old Car: ${this.car.carName}`;
        }
    }

    saveCar(): void {
        if (this.isValid(null)) {
            this._carService.saveCar(this.car)

                .subscribe(() => this.onSaveComplete(`Successfully saved ${this.car.carName}`),
                (error: any) => this._handleServiceError('Save', error),
                () => console.log('Save Completed'));

        } else {
            this.errorMessage = 'Please correct the validation errors.';
        }
    }

    deleteCar(): void {

        if (this.car.id === 0) {
            this.onSaveComplete();
        } else {
            if (confirm(`Really delete the product: ${this.car.carName}?`)) {
                this._carService.deleteCar(this.car.id)
                    .subscribe(
                    () => { this.onSaveComplete(`You just deleted ${this.car.carName}`); },
                    (error: any) => this._handleServiceError('Delete', error),
                    () => console.log('Delete Completed'));
            }
        }
    }

    onSaveComplete(message?: string): void {
        if (message) {
            this.messageService.addMessage(message);
        }
        this.reset();
        this._router.navigate(['/cars']);
    }

    reset(): void {
        this._dataIsValid = null;
        this._currentCar = null;
        this._originalCar = null;
    }

    // ------------- Validating Across Child Routes ------------------
    validate(): void {
        // clear validation object
        this._dataIsValid = {};

        if (this.car.carName && this.car.carName.length >= 3 && this.car.carModel) {
            this._dataIsValid['info'] = true;
        } else {
            this._dataIsValid['info'] = false;
        }

        if (this.car.company && this.car.company.length >= 3) {
            this._dataIsValid['tags'] = true;
        } else {
            this._dataIsValid['tags'] = false;
        }
    }

    isValid(path: string): boolean {
        this.validate();
        if (path) {
            return this._dataIsValid[path];
        }
        return (this._dataIsValid && Object.keys(this._dataIsValid).every(d => this._dataIsValid[d] === true));
    }

    private _handleServiceError(op: string, error: any) {
        console.error(`${op} error: ${error.message || error}`);
    }

}
