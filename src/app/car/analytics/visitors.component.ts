import { Component } from '@angular/core';
import * as d3 from 'd3';

@Component({
    templateUrl: './app/car/analytics/visitors.html'
})
export class VisitorsComponent {

    // TODO: move data to a service 
    visitorsChartData: any[] = [
        { key: 'Mobile', y: 5264 }, { key: 'Desktop', y: 3872 }
    ];
    chartOptions = {
        chart: {
            type: 'pieChart',
            height: 210,
            donut: true,
            x: function (d: any) { return d.key; },
            y: function (d: any) { return d.y; },
            valueFormat: (d3.format('.0f')),
            color: ['rgb(0, 150, 136)', '#E75753'],
            showLabels: false,
            showLegend: false,
            title: 'Over 9K',
            margin: { top: -10 }
        }
    };
}