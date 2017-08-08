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
var DiscreteBarComponent = (function () {
    function DiscreteBarComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    DiscreteBarComponent.prototype.ngOnInit = function () {
        this.drawDiscreteBar();
    };
    DiscreteBarComponent.prototype.drawDiscreteBar = function () {
        this.options = {
            chart: {
                type: 'discreteBarChart',
                height: 450,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 50,
                    left: 55
                },
                x: function (d) { return d.label; },
                y: function (d) { return d.value; },
                showValues: true,
                valueFormat: function (d) {
                    return d3.format(',.4f')(d);
                },
                duration: 500,
                xAxis: {
                    axisLabel: 'X Axis'
                },
                yAxis: {
                    axisLabel: 'Y Axis',
                    axisLabelDistance: -10
                }
            }
        };
        this.data = [
            {
                key: 'Cumulative Return',
                values: [
                    {
                        'label': 'A',
                        'value': -29.765957771107
                    },
                    {
                        'label': 'B',
                        'value': 0
                    },
                    {
                        'label': 'C',
                        'value': 32.807804682612
                    },
                    {
                        'label': 'D',
                        'value': 196.45946739256
                    },
                    {
                        'label': 'E',
                        'value': 0.19434030906893
                    },
                    {
                        'label': 'F',
                        'value': -98.079782601442
                    },
                    {
                        'label': 'G',
                        'value': -13.925743130903
                    },
                    {
                        'label': 'H',
                        'value': -5.1387322875705
                    }
                ]
            }
        ];
    };
    return DiscreteBarComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DiscreteBarComponent.prototype, "data", void 0);
DiscreteBarComponent = __decorate([
    core_1.Component({
        templateUrl: './app/car/analytics/charts/discreteBar-chart.component.html'
    }),
    __metadata("design:paramtypes", [material_1.MdDialogRef])
], DiscreteBarComponent);
exports.DiscreteBarComponent = DiscreteBarComponent;
//# sourceMappingURL=discreteBar-chart.component.js.map