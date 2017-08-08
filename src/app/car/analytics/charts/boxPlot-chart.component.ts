import { Component, Input, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

import 'd3';
import 'nvd3';

import { IGraphicComponent } from '../graphic.component';

@Component({
    templateUrl: './app/car/analytics/charts/boxPlot-chart.component.html'
})
export class BoxPlotChartComponent implements IGraphicComponent, OnInit {

    @Input() data: any;
    private options: any;

    constructor(private dialogRef: MdDialogRef<BoxPlotChartComponent>) { }

    ngOnInit() {
        this.setUpBoxPlotChart();
    }

    setUpBoxPlotChart() {
        this.options = {
            chart: {
                type: 'boxPlotChart',
                height: 450,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 30,
                    left: 50
                },
                color: ['darkblue', 'darkorange', 'green', 'darkred', 'darkviolet'],
                x: function (d: any) { return d.label; },
                //y: function(d){return d.values.Q3;},
                maxBoxWidth: 55,
                yDomain: [0, 500]
            }
        };

        this.data = [
            {
                label: 'Sample A',
                values: {
                    Q1: 180,
                    Q2: 200,
                    Q3: 250,
                    whisker_low: 115,
                    whisker_high: 400,
                    outliers: [50, 100, 425]
                }
            },
            {
                label: 'Sample B',
                values: {
                    Q1: 300,
                    Q2: 350,
                    Q3: 400,
                    whisker_low: 225,
                    whisker_high: 425,
                    outliers: [175, 450, 480]
                }
            },
            {
                label: 'Sample C',
                values: {
                    Q1: 100,
                    Q2: 200,
                    Q3: 300,
                    whisker_low: 25,
                    whisker_high: 400,
                    outliers: [450, 475]
                }
            }
        ];
    }
}
