import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { ICar } from './car';
import { ExceptionService } from './../utilities/exception.service';

@Injectable()
export class CarService {

    private baseUrl = 'api/cars';

    constructor(private _http: Http,
        private _exceptionService: ExceptionService) { }

    getCars(): Observable<ICar[]> {
        return this._http.get(this.baseUrl)
            .map(this.extractData)
            .do(data => console.log('getCars: ' + JSON.stringify(data)))
            .catch(this._exceptionService.catchBadResponse);
    }

    getCar(id: number): Observable<ICar> {
        if (id === 0) {
            return Observable.of(this.initializeCar());
        }

        const url = `${this.baseUrl}/${id}`;
        return this._http.get(url)
            .map(this.extractData)
            .do(data => console.log('getCar: ' + JSON.stringify(data)))
            .catch(this._exceptionService.catchBadResponse);
    }

    deleteCar(id: number): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        const url = `${this.baseUrl}/${id}`;

        return this._http.delete(url, options)
            .do(data => console.log('deleteCar: ' + JSON.stringify(data)))
            .catch(this._exceptionService.catchBadResponse);
    }

    saveCar(car: ICar): Observable<ICar> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        if (car.id === 0) {
            return this.createCar(car, options);
        }

        return this.updateCar(car, options);
    }

    private createCar(car: ICar, options: RequestOptions): Observable<ICar> {
        car.id = undefined;
        return this._http.post(this.baseUrl, car, options)
            .map(this.extractData)
            .do(data => console.log('createCar: ' + JSON.stringify(data)))
            .catch(this._exceptionService.catchBadResponse);
    }

    private updateCar(car: ICar, options: RequestOptions): Observable<ICar> {
        const url = `${this.baseUrl}/${car.id}`;
        return this._http.put(url, car, options)
            .map(() => car)
            .do(data => console.log('updateCar: ' + JSON.stringify(data)))
            .catch(this._exceptionService.catchBadResponse);
    }

    private extractData(response: Response) {
        let body = response.json();
        return body.data || {};
    }

    initializeCar(): ICar {
        return {
            id: 0,
            carName: null,
            carModel: null,
            description: null,
            rating: null,
            imageUrl: null,
            tags: [],
            company: null
        };
    }
}
