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
var material_1 = require("@angular/material");
var car_analytics_component_1 = require("./car-analytics.component");
// import {PieChartComponent} from './analytics/charts/pie-chart.component';
var CarDetailComponent = (function () {
    function CarDetailComponent(_route, dialog) {
        this._route = _route;
        this.dialog = dialog;
        this.pageTitle = 'Car Details';
    }
    CarDetailComponent.prototype.ngOnInit = function () {
        /*
           ------ Read Resolver Data: Snapshot ------------------
          snapshot:
           - used if a resolver is not refetching diferent data unless leaving the page to
           read the resolver data.
           Access the data property of the snapshot that references the element that uses the name
           of the data defined in the route configuration.
         */
        this.car = this._route.snapshot.data['car'];
    };
    CarDetailComponent.prototype.openDialog = function () {
        this.dialog.open(car_analytics_component_1.CarAnalyticsComponent);
        ////this.dialog.open(PieChartComponent);
    };
    return CarDetailComponent;
}());
CarDetailComponent = __decorate([
    core_1.Component({
        templateUrl: './app/car/car-detail.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, material_1.MdDialog])
], CarDetailComponent);
exports.CarDetailComponent = CarDetailComponent;
//# sourceMappingURL=car-detail.component.js.map