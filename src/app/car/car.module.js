"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ng2_nvd3_1 = require("ng2-nvd3");
var car_resolver_service_1 = require("./car-resolver.service");
var car_guard_service_1 = require("./car-guard.service");
var car_list_component_1 = require("./car-list.component");
var car_detail_component_1 = require("./car-detail.component");
var car_edit_component_1 = require("./car-edit.component");
var car_edit_info_component_1 = require("./car-edit-info.component");
var car_edit_tags_component_1 = require("./car-edit-tags.component");
var car_filter_pipe_1 = require("./car-filter.pipe");
var car_service_1 = require("./car.service");
var exception_service_1 = require("./../utilities/exception.service");
var shared_module_1 = require("../shared/shared.module");
var car_analytics_component_1 = require("./car-analytics.component");
var visitors_component_1 = require("./analytics/visitors.component");
var pie_chart_component_1 = require("./analytics/charts/pie-chart.component");
var graphics_service_1 = require("./analytics/graphics.service");
var analytics_banner_component_1 = require("./analytics/analytics-banner.component");
var analytics_directive_1 = require("./analytics/analytics.directive");
var nvd3_chartsComponent_1 = require("./analytics/charts/nvd3-chartsComponent");
var discreteBar_chart_component_1 = require("./analytics/charts/discreteBar-chart.component");
var scatter_chart_component_1 = require("./analytics/charts/scatter-chart.component");
var multiBar_chart_component_1 = require("./analytics/charts/multiBar-chart.component");
var candlestickBar_chart_component_1 = require("./analytics/charts/candlestickBar-chart.component");
var ohlcBar_chart_component_1 = require("./analytics/charts/ohlcBar-chart.component");
var boxPlot_chart_component_1 = require("./analytics/charts/boxPlot-chart.component");
var donut_chart_component_1 = require("./analytics/charts/donut-chart.component");
var multiBarHorizontal_chart_component_1 = require("./analytics/charts/multiBarHorizontal-chart.component");
var linePlusBarWithFocus_chart_component_1 = require("./analytics/charts/linePlusBarWithFocus-chart.component");
var forceDirected_graph_component_1 = require("./analytics/charts/forceDirected-graph.component");
/*
  ----- Ex: Route's Data Property ----------
   RouterModule.forChild([
            { path: '', component: CarListComponent, data: {pageTitle: 'xplicit cars'} }
        ])
  - the 'data-property' is used to pass any arbitary data to a route
  - the data passed in the 'data-property' can be changed throughout the life time of a route
    so only use it for static data. like pageTitle
  - to read the data property in a component class use the 'ActivatedRoute' service by use the its
    snapshot to access the data array using a key to get a specific data element
    E.g this.pageTitle = this.route.snapshot.data['pageTitle'];
    NB:
    - no use of a Observable coz that data property is static and l'l not change thus no need
      to watch for cahanges.
 */
var CarModule = (function () {
    function CarModule() {
    }
    return CarModule;
}());
CarModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule,
            router_1.RouterModule.forChild([
                { path: '', component: car_list_component_1.CarListComponent },
                { path: ':id', component: car_detail_component_1.CarDetailComponent, resolve: { car: car_resolver_service_1.CarResolver } },
                {
                    path: ':id/edit', component: car_edit_component_1.CarEditComponent, canDeactivate: [car_guard_service_1.CarEditGuard], resolve: { car: car_resolver_service_1.CarResolver },
                    children: [
                        { path: '', redirectTo: 'info', pathMatch: 'full' },
                        { path: 'info', component: car_edit_info_component_1.CarEditInfoComponent },
                        { path: 'tags', component: car_edit_tags_component_1.CarEditTagsComponent }
                    ]
                }
            ])
        ],
        declarations: [
            car_list_component_1.CarListComponent,
            car_detail_component_1.CarDetailComponent,
            car_edit_component_1.CarEditComponent,
            car_edit_info_component_1.CarEditInfoComponent,
            car_edit_tags_component_1.CarEditTagsComponent,
            car_filter_pipe_1.CarFilterPipe,
            analytics_banner_component_1.AnalyticsBannerComponent,
            car_analytics_component_1.CarAnalyticsComponent,
            visitors_component_1.VisitorsComponent,
            pie_chart_component_1.PieChartComponent,
            nvd3_chartsComponent_1.Nvd3ChartsComponent,
            discreteBar_chart_component_1.DiscreteBarComponent,
            scatter_chart_component_1.ScatterChartComponent,
            multiBar_chart_component_1.MultiBarChartComponent,
            candlestickBar_chart_component_1.CandleStickBarChartComponent,
            ohlcBar_chart_component_1.OhlcBarChartComponent,
            boxPlot_chart_component_1.BoxPlotChartComponent,
            donut_chart_component_1.DonutChartComponent,
            multiBarHorizontal_chart_component_1.MultiBarHorizontalChartComponent,
            linePlusBarWithFocus_chart_component_1.LinePlusBarWithFocusChartComponent,
            forceDirected_graph_component_1.ForceDirectedGraphComponent,
            analytics_directive_1.AnalyticsDirective,
            ng2_nvd3_1.NvD3Component
        ],
        providers: [car_service_1.CarService, graphics_service_1.GraphicsService, car_resolver_service_1.CarResolver, car_guard_service_1.CarEditGuard, exception_service_1.ExceptionService],
        entryComponents: [
            car_analytics_component_1.CarAnalyticsComponent,
            pie_chart_component_1.PieChartComponent,
            nvd3_chartsComponent_1.Nvd3ChartsComponent,
            discreteBar_chart_component_1.DiscreteBarComponent,
            scatter_chart_component_1.ScatterChartComponent,
            candlestickBar_chart_component_1.CandleStickBarChartComponent,
            ohlcBar_chart_component_1.OhlcBarChartComponent,
            boxPlot_chart_component_1.BoxPlotChartComponent,
            donut_chart_component_1.DonutChartComponent,
            multiBarHorizontal_chart_component_1.MultiBarHorizontalChartComponent,
            linePlusBarWithFocus_chart_component_1.LinePlusBarWithFocusChartComponent,
            forceDirected_graph_component_1.ForceDirectedGraphComponent,
            multiBar_chart_component_1.MultiBarChartComponent
        ]
    })
], CarModule);
exports.CarModule = CarModule;
//# sourceMappingURL=car.module.js.map