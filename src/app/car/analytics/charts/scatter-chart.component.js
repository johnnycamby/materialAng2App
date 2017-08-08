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
var ScatterChartComponent = (function () {
    function ScatterChartComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ScatterChartComponent.prototype.ngOnInit = function () {
        this.options = {
            chart: {
                type: 'scatterChart',
                height: 450,
                color: d3.scale.category10().range(),
                scatter: {
                    onlyCircles: false
                },
                showDistX: true,
                showDistY: true,
                duration: 350,
                xAxis: {
                    axisLabel: 'X Axis',
                    tickFormat: function (d) {
                        return d3.format('.02f')(d);
                    }
                },
                yAxis: {
                    axisLabel: 'Y Axis',
                    tickFormat: function (d) {
                        return d3.format('.02f')(d);
                    },
                    axisLabelDistance: -5
                }
            }
        };
        this.data = this.generateDataScatter(4, 40);
    };
    ScatterChartComponent.prototype.generateDataScatter = function (groups, points) {
        var data = [], shapes = ['circle', 'cross', 'triangle-up', 'triangle-down', 'diamond', 'square'], random = d3.random.normal();
        for (var i = 0; i < groups; i++) {
            data.push({ key: 'Group ' + i, values: [] });
            for (var j = 0; j < points; j++) {
                data[i].values.push({
                    x: random(),
                    y: random(),
                    size: Math.random(),
                    shape: shapes[j % 6]
                });
            }
        }
        return data;
    };
    return ScatterChartComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ScatterChartComponent.prototype, "data", void 0);
ScatterChartComponent = __decorate([
    core_1.Component({
        templateUrl: './app/car/analytics/charts/scatter-chart.component.html'
    }),
    __metadata("design:paramtypes", [material_1.MdDialogRef])
], ScatterChartComponent);
exports.ScatterChartComponent = ScatterChartComponent;
//# sourceMappingURL=scatter-chart.component.js.map