import { Component, Input, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

import 'd3';
import 'nvd3';

import { IGraphicComponent } from '../graphic.component';

@Component({
    templateUrl: './app/car/analytics/charts/scatter-chart.component.html'
})
export class ScatterChartComponent implements IGraphicComponent, OnInit {

    @Input() data: any;
    private options: any;

    constructor(private dialogRef: MdDialogRef<ScatterChartComponent>) { }

    ngOnInit() {
        this.options = {
            chart: {
                type: 'scatterChart',
                height: 450,
                color: d3.scale.category10().range(),
                scatter: {
                    onlyCircles: false
                },
                showDistX: true,
                showDistY: true,
                duration: 350,
                xAxis: {
                    axisLabel: 'X Axis',
                    tickFormat: function (d: any) {
                        return d3.format('.02f')(d);
                    }
                },
                yAxis: {
                    axisLabel: 'Y Axis',
                    tickFormat: function (d: any) {
                        return d3.format('.02f')(d);
                    },
                    axisLabelDistance: -5
                }
            }
        };

        this.data = this.generateDataScatter(4, 40);
    }

    generateDataScatter(groups: any, points: any) {

        let data: any = [],
            shapes = ['circle', 'cross', 'triangle-up', 'triangle-down', 'diamond', 'square'],
            random = d3.random.normal();

        for (let i = 0; i < groups; i++) {
            data.push({ key: 'Group ' + i, values: [] });

            for (let j = 0; j < points; j++) {
                data[i].values.push({
                    x: random(),
                    y: random(),
                    size: Math.random(),
                    shape: shapes[j % 6]
                });
            }
        }
        return data;
    }


}