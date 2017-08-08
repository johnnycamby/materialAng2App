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
// import {NvD3Component} from 'ng2-nvd3';
require("d3");
require("nvd3");
var Nvd3ChartsComponent = (function () {
    // private chartType: any;
    //  private data: any;
    function Nvd3ChartsComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    Nvd3ChartsComponent.prototype.ngOnInit = function () {
        this.setUpChart();
    };
    Nvd3ChartsComponent.prototype.setUpChart = function () {
        this.options = {
            chart: {
                type: 'lineChart',
                height: 200,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 40,
                    left: 55
                },
                x: function (d) { return d.x; },
                y: function (d) { return d.y; },
                useInteractiveGuildline: true,
                xAxis: { axisLabel: 'Time (ms)' },
                yAxis: {
                    axisLabel: 'Voltage (v)', tickFormat: function (d) {
                        // return d3format.format('.02f');
                        return d3.format('.02f')(d);
                    },
                    axisLabelDistance: -10
                }
            }
        };
        this.data = this.sinAndCos();
    };
    Nvd3ChartsComponent.prototype.sinAndCos = function () {
        var sin = [], sin2 = [], cos = [];
        for (var i = 0; i < 100; i++) {
            sin.push({ x: i, y: Math.sin(i / 10) });
            sin2.push({ x: i, y: i % 10 === 5 ? null : Math.sin(i / 10) * 0.25 + 0.5 });
            cos.push({ x: i, y: .5 * Math.cos(i / 10 + 2) + Math.random() / 10 });
        }
        return [
            {
                values: sin,
                key: 'Sine Wave',
                color: '#ff7f0e'
            },
            {
                values: cos,
                key: 'Cosine Wave',
                color: '#2ca02c'
            },
            {
                values: sin2,
                key: 'Another sine wave',
                color: '#7777ff',
                area: true
            }
        ];
    };
    return Nvd3ChartsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], Nvd3ChartsComponent.prototype, "data", void 0);
Nvd3ChartsComponent = __decorate([
    core_1.Component({
        templateUrl: '../app/car/analytics/charts/donut-chart.component.html'
    }),
    __metadata("design:paramtypes", [material_1.MdDialogRef])
], Nvd3ChartsComponent);
exports.Nvd3ChartsComponent = Nvd3ChartsComponent;
//# sourceMappingURL=nvd3-chartsComponent.js.map