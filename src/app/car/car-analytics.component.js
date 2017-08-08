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
var material_1 = require("@angular/material");
// import { PieChartComponent } from './analytics/charts/pie-chart.component';
var graphics_service_1 = require("./analytics/graphics.service");
var CarAnalyticsComponent = (function () {
    function CarAnalyticsComponent(graphicsService, dialogRef) {
        this.graphicsService = graphicsService;
        this.dialogRef = dialogRef;
    }
    CarAnalyticsComponent.prototype.ngOnInit = function () {
        this.dialogRef.updateSize('800px', '700px');
        this.graphicsItem = this.graphicsService.getAllComponents();
    };
    return CarAnalyticsComponent;
}());
CarAnalyticsComponent = __decorate([
    core_1.Component({
        templateUrl: './app/car/car-analytics.component.html',
        styleUrls: ['./app/car/car-analytics.component.css']
    }),
    __metadata("design:paramtypes", [graphics_service_1.GraphicsService, material_1.MdDialogRef])
], CarAnalyticsComponent);
exports.CarAnalyticsComponent = CarAnalyticsComponent;
//# sourceMappingURL=car-analytics.component.js.map