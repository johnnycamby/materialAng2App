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
var MultiBarChartComponent = (function () {
    function MultiBarChartComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    MultiBarChartComponent.prototype.ngOnInit = function () {
        this.setUpMultiBarChart();
    };
    MultiBarChartComponent.prototype.setUpMultiBarChart = function () {
        this.options = {
            chart: {
                type: 'multiBarChart',
                height: 450,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 45,
                    left: 45
                },
                clipEdge: true,
                //staggerLabels: true,
                duration: 500,
                stacked: true,
                xAxis: {
                    axisLabel: 'Time (ms)',
                    showMaxMin: false,
                    tickFormat: function (d) {
                        return d3.format(',f')(d);
                    }
                },
                yAxis: {
                    axisLabel: 'Y Axis',
                    axisLabelDistance: -20,
                    tickFormat: function (d) {
                        return d3.format(',.1f')(d);
                    }
                }
            }
        };
        this.data = this.generateDataMultiBar();
    };
    MultiBarChartComponent.prototype.generateDataMultiBar = function () {
        return this.stream_layers(3, 50 + Math.random() * 50, .1).map(function (data, i) {
            return { key: 'stream' + i, values: data };
        });
    };
    MultiBarChartComponent.prototype.stream_layers = function (n, m, o) {
        var _this = this;
        if (arguments.length < 3)
            o = 0;
        function bump(a) {
            var x = 1 / (.1 + Math.random()), y = 2 * Math.random() - 5, z = 10 / (.1 + Math.random());
            for (var i = 0; i < m; i++) {
                var w = (i / m - y) * z;
                a[i] += x * Math.exp(-w * w);
            }
        }
        return d3.range(n).map(function () {
            var a = [], i;
            for (i = 0; i < m; i++)
                a[i] = o + o * Math.random();
            for (i = 0; i < 5; i++)
                bump(a);
            return a.map(_this.stream_index);
        });
    };
    MultiBarChartComponent.prototype.stream_index = function (d, i) {
        return { x: i, y: Math.max(0, d) };
    };
    return MultiBarChartComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], MultiBarChartComponent.prototype, "data", void 0);
MultiBarChartComponent = __decorate([
    core_1.Component({
        templateUrl: './app/car/analytics/charts/multiBar-chart.component.html'
    }),
    __metadata("design:paramtypes", [material_1.MdDialogRef])
], MultiBarChartComponent);
exports.MultiBarChartComponent = MultiBarChartComponent;
//# sourceMappingURL=multiBar-chart.component.js.map