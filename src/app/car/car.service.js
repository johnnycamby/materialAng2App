"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
require("rxjs/add/operator/map");
require("rxjs/add/observable/of");
var exception_service_1 = require("./../utilities/exception.service");
var CarService = (function () {
    function CarService(_http, _exceptionService) {
        this._http = _http;
        this._exceptionService = _exceptionService;
        this.baseUrl = 'api/cars';
    }
    CarService.prototype.getCars = function () {
        return this._http.get(this.baseUrl)
            .map(this.extractData)
            .do(function (data) { return console.log('getCars: ' + JSON.stringify(data)); })
            .catch(this._exceptionService.catchBadResponse);
    };
    CarService.prototype.getCar = function (id) {
        if (id === 0) {
            return Observable_1.Observable.of(this.initializeCar());
        }
        var url = this.baseUrl + "/" + id;
        return this._http.get(url)
            .map(this.extractData)
            .do(function (data) { return console.log('getCar: ' + JSON.stringify(data)); })
            .catch(this._exceptionService.catchBadResponse);
    };
    CarService.prototype.deleteCar = function (id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var url = this.baseUrl + "/" + id;
        return this._http.delete(url, options)
            .do(function (data) { return console.log('deleteCar: ' + JSON.stringify(data)); })
            .catch(this._exceptionService.catchBadResponse);
    };
    CarService.prototype.saveCar = function (car) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        if (car.id === 0) {
            return this.createCar(car, options);
        }
        return this.updateCar(car, options);
    };
    CarService.prototype.createCar = function (car, options) {
        car.id = undefined;
        return this._http.post(this.baseUrl, car, options)
            .map(this.extractData)
            .do(function (data) { return console.log('createCar: ' + JSON.stringify(data)); })
            .catch(this._exceptionService.catchBadResponse);
    };
    CarService.prototype.updateCar = function (car, options) {
        var url = this.baseUrl + "/" + car.id;
        return this._http.put(url, car, options)
            .map(function () { return car; })
            .do(function (data) { return console.log('updateCar: ' + JSON.stringify(data)); })
            .catch(this._exceptionService.catchBadResponse);
    };
    CarService.prototype.extractData = function (response) {
        var body = response.json();
        return body.data || {};
    };
    CarService.prototype.initializeCar = function () {
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
    };
    return CarService;
}());
CarService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        exception_service_1.ExceptionService])
], CarService);
exports.CarService = CarService;
//# sourceMappingURL=car.service.js.map