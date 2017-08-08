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
require("d3");
require("nvd3");
var PieChartComponent = (function () {
    function PieChartComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    PieChartComponent.prototype.ngOnInit = function () {
        this.drawPie();
    };
    PieChartComponent.prototype.drawPie = function () {
        this.options = {
            chart: {
                type: 'pieChart',
                height: 500,
                x: function (d) { return d.key; },
                y: function (d) { return d.y; },
                showLabels: true,
                duration: 500,
                labelThreshold: 0.01,
                labelSunbeamLayout: true,
                legend: {
                    margin: {
                        top: 5,
                        right: 35,
                        bottom: 5,
                        left: 0
                    }
                }
            }
        };
        this.data = [
            {
                key: 'One',
                y: 5
            },
            {
                key: 'Two',
                y: 2
            },
            {
                key: 'Three',
                y: 9
            },
            {
                key: 'Four',
                y: 7
            },
            {
                key: 'Five',
                y: 4
            },
            {
                key: 'Six',
                y: 3
            },
            {
                key: 'Seven',
                y: .5
            }
        ];
    };
    return PieChartComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], PieChartComponent.prototype, "data", void 0);
PieChartComponent = __decorate([
    core_1.Component({
        templateUrl: './app/car/analytics/charts/pie-chart.component.html'
    }),
    __metadata("design:paramtypes", [material_1.MdDialogRef])
], PieChartComponent);
exports.PieChartComponent = PieChartComponent;
//# sourceMappingURL=pie-chart.component.js.map