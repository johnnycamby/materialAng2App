import { Component, Input, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

import 'd3';
import 'nvd3';

import { IGraphicComponent } from '../graphic.component';

@Component({
    templateUrl: './app/car/analytics/charts/multiBarHorizontal-chart.component.html'
})
export class MultiBarHorizontalChartComponent implements IGraphicComponent, OnInit {

    @Input() data: any;
    private options: any;

    constructor(private dialogRef: MdDialogRef<MultiBarHorizontalChartComponent>) { }

    ngOnInit() {
        this.setUpMultiBarHorizontalChart();
    }

    setUpMultiBarHorizontalChart() {
        this.options = {
            chart: {
                type: 'multiBarHorizontalChart',
                height: 450,
                x: function (d: any) { return d.label; },
                y: function (d: any) { return d.value; },
                showControls: true,
                showValues: true,
                duration: 500,
                xAxis: {
                    showMaxMin: false
                },
                yAxis: {
                    axisLabel: 'Values',
                    tickFormat: function (d: any) {
                        return d3.format(',.2f')(d);
                    }
                }
            }
        };

        this.data = [
            {
                'key': 'Series1',
                'color': '#d62728',
                'values': [
                    {
                        'label': 'Group A',
                        'value': -1.8746444827653
                    },
                    {
                        'label': 'Group B',
                        'value': -8.0961543492239
                    },
                    {
                        'label': 'Group C',
                        'value': -0.57072943117674
                    },
                    {
                        'label': 'Group D',
                        'value': -2.4174010336624
                    }
                ]
            },
            {
                'key': 'Series2',
                'color': '#1f77b4',
                'values': [
                    {
                        'label': 'Group A',
                        'value': 25.307646510375
                    },
                    {
                        'label': 'Group B',
                        'value': 16.756779544553
                    },
                    {
                        'label': 'Group C',
                        'value': 18.451534877007
                    },
                    {
                        'label': 'Group D',
                        'value': 8.6142352811805
                    }
                ]
            }
        ];
    }
}
