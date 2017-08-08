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
var router_1 = require("@angular/router");
var car_service_1 = require("./car.service");
var exception_service_1 = require("./../utilities/exception.service");
var CarListComponent = (function () {
    function CarListComponent(_carService, _route, _exceptionService) {
        this._carService = _carService;
        this._route = _route;
        this._exceptionService = _exceptionService;
        this.pageTitle = 'Xplicit Car List';
        this.imageWidth = 60;
        this.imageMargin = 2;
        this.imageLgWidth = 250;
        this.imageLgHeight = 180;
        this.showImage = false;
    }
    CarListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    CarListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listFilter = this._route.snapshot.queryParams['filterBy'] || '';
        // NB: params are always string thus setting a 'true' rather than true
        this.showImage = this._route.snapshot.queryParams['showImage'] === 'true';
        this._carService.getCars().subscribe(function (cars) { return _this.cars = cars; }, function (error) { return _this.errorMessage = error; });
    };
    return CarListComponent;
}());
CarListComponent = __decorate([
    core_1.Component({
        templateUrl: './app/car/car-list.component.html',
        styleUrls: ['./app/car/car-list.component.css']
    }),
    __metadata("design:paramtypes", [car_service_1.CarService,
        router_1.ActivatedRoute,
        exception_service_1.ExceptionService])
], CarListComponent);
exports.CarListComponent = CarListComponent;
//# sourceMappingURL=car-list.component.js.map