"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var d3 = require("d3");
var VisitorsComponent = (function () {
    function VisitorsComponent() {
        // TODO: move data to a service 
        this.visitorsChartData = [
            { key: 'Mobile', y: 5264 }, { key: 'Desktop', y: 3872 }
        ];
        this.chartOptions = {
            chart: {
                type: 'pieChart',
                height: 210,
                donut: true,
                x: function (d) { return d.key; },
                y: function (d) { return d.y; },
                valueFormat: (d3.format('.0f')),
                color: ['rgb(0, 150, 136)', '#E75753'],
                showLabels: false,
                showLegend: false,
                title: 'Over 9K',
                margin: { top: -10 }
            }
        };
    }
    return VisitorsComponent;
}());
VisitorsComponent = __decorate([
    core_1.Component({
        templateUrl: './app/car/analytics/visitors.html'
    })
], VisitorsComponent);
exports.VisitorsComponent = VisitorsComponent;
//# sourceMappingURL=visitors.component.js.map