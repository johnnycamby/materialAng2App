import { Injectable } from '@angular/core';
import { GraphicsItem } from './graphics-item';
import { PieChartComponent } from './charts/pie-chart.component';
 import { Nvd3ChartsComponent } from './charts/nvd3-chartsComponent';
 import { DiscreteBarComponent } from './charts/discreteBar-chart.component';
 import { ScatterChartComponent } from './charts/scatter-chart.component';
 import { MultiBarChartComponent } from './charts/multiBar-chart.component';
 import { CandleStickBarChartComponent } from './charts/candlestickBar-chart.component';
 import { OhlcBarChartComponent } from './charts/ohlcBar-chart.component';
 import { BoxPlotChartComponent } from './charts/boxPlot-chart.component';
 import { DonutChartComponent } from './charts/donut-chart.component';
 import { MultiBarHorizontalChartComponent } from './charts/multiBarHorizontal-chart.component';
 import { LinePlusBarWithFocusChartComponent } from './charts/linePlusBarWithFocus-chart.component';
 import { ForceDirectedGraphComponent } from './charts/forceDirected-graph.component';

@Injectable()
export class GraphicsService {

    getAllComponents() {
        // return [ new GraphicsItem(PieChartComponent, {title: 'Pie Chart' })];
        return [
            new GraphicsItem(PieChartComponent),
            new GraphicsItem(DonutChartComponent),
            new GraphicsItem(Nvd3ChartsComponent),
            new GraphicsItem(DiscreteBarComponent),
            new GraphicsItem(ScatterChartComponent),
            new GraphicsItem(MultiBarChartComponent),
            new GraphicsItem(CandleStickBarChartComponent),
            new GraphicsItem(OhlcBarChartComponent),
            new GraphicsItem(BoxPlotChartComponent),
            new GraphicsItem(MultiBarHorizontalChartComponent),
            new GraphicsItem(LinePlusBarWithFocusChartComponent),
            new GraphicsItem(ForceDirectedGraphComponent)
        ];
    }
}
