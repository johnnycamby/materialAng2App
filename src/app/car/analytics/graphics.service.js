"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var graphics_item_1 = require("./graphics-item");
var pie_chart_component_1 = require("./charts/pie-chart.component");
var nvd3_chartsComponent_1 = require("./charts/nvd3-chartsComponent");
var discreteBar_chart_component_1 = require("./charts/discreteBar-chart.component");
var scatter_chart_component_1 = require("./charts/scatter-chart.component");
var multiBar_chart_component_1 = require("./charts/multiBar-chart.component");
var candlestickBar_chart_component_1 = require("./charts/candlestickBar-chart.component");
var ohlcBar_chart_component_1 = require("./charts/ohlcBar-chart.component");
var boxPlot_chart_component_1 = require("./charts/boxPlot-chart.component");
var donut_chart_component_1 = require("./charts/donut-chart.component");
var multiBarHorizontal_chart_component_1 = require("./charts/multiBarHorizontal-chart.component");
var linePlusBarWithFocus_chart_component_1 = require("./charts/linePlusBarWithFocus-chart.component");
var forceDirected_graph_component_1 = require("./charts/forceDirected-graph.component");
var GraphicsService = (function () {
    function GraphicsService() {
    }
    GraphicsService.prototype.getAllComponents = function () {
        // return [ new GraphicsItem(PieChartComponent, {title: 'Pie Chart' })];
        return [
            new graphics_item_1.GraphicsItem(pie_chart_component_1.PieChartComponent),
            new graphics_item_1.GraphicsItem(donut_chart_component_1.DonutChartComponent),
            new graphics_item_1.GraphicsItem(nvd3_chartsComponent_1.Nvd3ChartsComponent),
            new graphics_item_1.GraphicsItem(discreteBar_chart_component_1.DiscreteBarComponent),
            new graphics_item_1.GraphicsItem(scatter_chart_component_1.ScatterChartComponent),
            new graphics_item_1.GraphicsItem(multiBar_chart_component_1.MultiBarChartComponent),
            new graphics_item_1.GraphicsItem(candlestickBar_chart_component_1.CandleStickBarChartComponent),
            new graphics_item_1.GraphicsItem(ohlcBar_chart_component_1.OhlcBarChartComponent),
            new graphics_item_1.GraphicsItem(boxPlot_chart_component_1.BoxPlotChartComponent),
            new graphics_item_1.GraphicsItem(multiBarHorizontal_chart_component_1.MultiBarHorizontalChartComponent),
            new graphics_item_1.GraphicsItem(linePlusBarWithFocus_chart_component_1.LinePlusBarWithFocusChartComponent),
            new graphics_item_1.GraphicsItem(forceDirected_graph_component_1.ForceDirectedGraphComponent)
        ];
    };
    return GraphicsService;
}());
GraphicsService = __decorate([
    core_1.Injectable()
], GraphicsService);
exports.GraphicsService = GraphicsService;
//# sourceMappingURL=graphics.service.js.map