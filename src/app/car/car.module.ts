import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NvD3Component } from 'ng2-nvd3';


import { CarResolver } from './car-resolver.service';
import { CarEditGuard } from './car-guard.service';

import { CarListComponent } from './car-list.component';
import { CarDetailComponent } from './car-detail.component';
import { CarEditComponent } from './car-edit.component';
import { CarEditInfoComponent } from './car-edit-info.component';
import { CarEditTagsComponent } from './car-edit-tags.component';

import { CarFilterPipe } from './car-filter.pipe';
import { CarService } from './car.service';
import { ExceptionService } from './../utilities/exception.service';
import { SharedModule } from '../shared/shared.module';

import { CarAnalyticsComponent } from './car-analytics.component';
import { VisitorsComponent } from './analytics/visitors.component';
import { PieChartComponent } from './analytics/charts/pie-chart.component';
import { GraphicsService } from './analytics/graphics.service';
import { AnalyticsBannerComponent } from './analytics/analytics-banner.component';
import { AnalyticsDirective } from './analytics/analytics.directive';
import { Nvd3ChartsComponent } from './analytics/charts/nvd3-chartsComponent';
import { DiscreteBarComponent } from './analytics/charts/discreteBar-chart.component';
import { ScatterChartComponent } from './analytics/charts/scatter-chart.component';
import { MultiBarChartComponent } from './analytics/charts/multiBar-chart.component';
import { CandleStickBarChartComponent } from './analytics/charts/candlestickBar-chart.component';
import { OhlcBarChartComponent } from './analytics/charts/ohlcBar-chart.component';
import { BoxPlotChartComponent } from './analytics/charts/boxPlot-chart.component';
import { DonutChartComponent } from './analytics/charts/donut-chart.component';
import { MultiBarHorizontalChartComponent } from './analytics/charts/multiBarHorizontal-chart.component';
import { LinePlusBarWithFocusChartComponent } from './analytics/charts/linePlusBarWithFocus-chart.component';
import { ForceDirectedGraphComponent } from './analytics/charts/forceDirected-graph.component';

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

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: '', component: CarListComponent },
            { path: ':id', component: CarDetailComponent, resolve: { car: CarResolver } },
            {
                path: ':id/edit', component: CarEditComponent, canDeactivate: [CarEditGuard], resolve: { car: CarResolver },
                children: [
                    { path: '', redirectTo: 'info', pathMatch: 'full' },
                    { path: 'info', component: CarEditInfoComponent },
                    { path: 'tags', component: CarEditTagsComponent }
                ]
            }
        ])
    ],
    declarations: [
        CarListComponent,
        CarDetailComponent,
        CarEditComponent,
        CarEditInfoComponent,
        CarEditTagsComponent,
        CarFilterPipe,
        AnalyticsBannerComponent,
        CarAnalyticsComponent,
        VisitorsComponent,
        PieChartComponent,
        Nvd3ChartsComponent,
        DiscreteBarComponent,
        ScatterChartComponent,
        MultiBarChartComponent,
        CandleStickBarChartComponent,
        OhlcBarChartComponent,
        BoxPlotChartComponent,
        DonutChartComponent,
        MultiBarHorizontalChartComponent,
        LinePlusBarWithFocusChartComponent,
        ForceDirectedGraphComponent,
        AnalyticsDirective,
        NvD3Component
    ],
    providers: [CarService, GraphicsService, CarResolver, CarEditGuard, ExceptionService],
    entryComponents: [
        CarAnalyticsComponent,
        PieChartComponent,
        Nvd3ChartsComponent,
        DiscreteBarComponent,
        ScatterChartComponent,
        CandleStickBarChartComponent,
        OhlcBarChartComponent,
        BoxPlotChartComponent,
        DonutChartComponent,
        MultiBarHorizontalChartComponent,
        LinePlusBarWithFocusChartComponent,
        ForceDirectedGraphComponent,
        MultiBarChartComponent]
})
export class CarModule { }
