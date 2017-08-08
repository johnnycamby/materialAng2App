import { Component, Input, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

import 'd3';
import 'nvd3';

import { IGraphicComponent } from '../graphic.component';

@Component({
    templateUrl: './app/car/analytics/charts/multiBar-chart.component.html'
})
export class MultiBarChartComponent implements IGraphicComponent, OnInit {

    @Input() data: any;
    private options: any;

    constructor(private dialogRef: MdDialogRef<MultiBarChartComponent>) { }

    ngOnInit() {
        this.setUpMultiBarChart();
    }

    setUpMultiBarChart() {
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
                    tickFormat: function (d: any) {
                        return d3.format(',f')(d);
                    }
                },
                yAxis: {
                    axisLabel: 'Y Axis',
                    axisLabelDistance: -20,
                    tickFormat: function (d: any) {
                        return d3.format(',.1f')(d);
                    }
                }
            }
        };

        this.data = this.generateDataMultiBar();
    }

    generateDataMultiBar() {
        return this.stream_layers(3, 50 + Math.random() * 50, .1).map((data: any, i: any) => {
            return { key: 'stream' + i, values: data };
        });
    }

    stream_layers(n: any, m: any, o: any) {

        if (arguments.length < 3) o = 0;

        function bump(a: any) {
            let x = 1 / (.1 + Math.random()),
                y = 2 * Math.random() - 5,
                z = 10 / (.1 + Math.random());

            for (let i = 0; i < m; i++) {
                let w = (i / m - y) * z;
                a[i] += x * Math.exp(-w * w);
            }
        }

        return d3.range(n).map(() => {
            let a: any = [], i;

            for (i = 0; i < m; i++)
                a[i] = o + o * Math.random();
            for (i = 0; i < 5; i++) bump(a);
            return a.map(this.stream_index);
        });
    }

    stream_index(d: any, i: any) {
        return { x: i, y: Math.max(0, d) };
    }

}