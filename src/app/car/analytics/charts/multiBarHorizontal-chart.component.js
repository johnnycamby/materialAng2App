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
var MultiBarHorizontalChartComponent = (function () {
    function MultiBarHorizontalChartComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    MultiBarHorizontalChartComponent.prototype.ngOnInit = function () {
        this.setUpMultiBarHorizontalChart();
    };
    MultiBarHorizontalChartComponent.prototype.setUpMultiBarHorizontalChart = function () {
        this.options = {
            chart: {
                type: 'multiBarHorizontalChart',
                height: 450,
                x: function (d) { return d.label; },
                y: function (d) { return d.value; },
                showControls: true,
                showValues: true,
                duration: 500,
                xAxis: {
                    showMaxMin: false
                },
                yAxis: {
                    axisLabel: 'Values',
                    tickFormat: function (d) {
                        return d3.format(',.2f')(d);
                    }
                }
            }
        };
        this.data = [
            {
                'key': 'Series1',
                'color': '#d62728',
                'values': [
                    {
                        'label': 'Group A',
                        'value': -1.8746444827653
                    },
                    {
                        'label': 'Group B',
                        'value': -8.0961543492239
                    },
                    {
                        'label': 'Group C',
                        'value': -0.57072943117674
                    },
                    {
                        'label': 'Group D',
                        'value': -2.4174010336624
                    }
                ]
            },
            {
                'key': 'Series2',
                'color': '#1f77b4',
                'values': [
                    {
                        'label': 'Group A',
                        'value': 25.307646510375
                    },
                    {
                        'label': 'Group B',
                        'value': 16.756779544553
                    },
                    {
                        'label': 'Group C',
                        'value': 18.451534877007
                    },
                    {
                        'label': 'Group D',
                        'value': 8.6142352811805
                    }
                ]
            }
        ];
    };
    return MultiBarHorizontalChartComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], MultiBarHorizontalChartComponent.prototype, "data", void 0);
MultiBarHorizontalChartComponent = __decorate([
    core_1.Component({
        templateUrl: './app/car/analytics/charts/multiBarHorizontal-chart.component.html'
    }),
    __metadata("design:paramtypes", [material_1.MdDialogRef])
], MultiBarHorizontalChartComponent);
exports.MultiBarHorizontalChartComponent = MultiBarHorizontalChartComponent;
//# sourceMappingURL=multiBarHorizontal-chart.component.js.map