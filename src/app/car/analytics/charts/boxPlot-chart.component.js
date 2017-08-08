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
var BoxPlotChartComponent = (function () {
    function BoxPlotChartComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    BoxPlotChartComponent.prototype.ngOnInit = function () {
        this.setUpBoxPlotChart();
    };
    BoxPlotChartComponent.prototype.setUpBoxPlotChart = function () {
        this.options = {
            chart: {
                type: 'boxPlotChart',
                height: 450,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 30,
                    left: 50
                },
                color: ['darkblue', 'darkorange', 'green', 'darkred', 'darkviolet'],
                x: function (d) { return d.label; },
                //y: function(d){return d.values.Q3;},
                maxBoxWidth: 55,
                yDomain: [0, 500]
            }
        };
        this.data = [
            {
                label: 'Sample A',
                values: {
                    Q1: 180,
                    Q2: 200,
                    Q3: 250,
                    whisker_low: 115,
                    whisker_high: 400,
                    outliers: [50, 100, 425]
                }
            },
            {
                label: 'Sample B',
                values: {
                    Q1: 300,
                    Q2: 350,
                    Q3: 400,
                    whisker_low: 225,
                    whisker_high: 425,
                    outliers: [175, 450, 480]
                }
            },
            {
                label: 'Sample C',
                values: {
                    Q1: 100,
                    Q2: 200,
                    Q3: 300,
                    whisker_low: 25,
                    whisker_high: 400,
                    outliers: [450, 475]
                }
            }
        ];
    };
    return BoxPlotChartComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], BoxPlotChartComponent.prototype, "data", void 0);
BoxPlotChartComponent = __decorate([
    core_1.Component({
        templateUrl: './app/car/analytics/charts/boxPlot-chart.component.html'
    }),
    __metadata("design:paramtypes", [material_1.MdDialogRef])
], BoxPlotChartComponent);
exports.BoxPlotChartComponent = BoxPlotChartComponent;
//# sourceMappingURL=boxPlot-chart.component.js.map