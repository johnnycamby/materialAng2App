import { Component, Input, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

import 'd3';
import 'nvd3';

import { IGraphicComponent } from '../graphic.component';

@Component({
    templateUrl: './app/car/analytics/charts/donut-chart.component.html'
})
export class DonutChartComponent implements IGraphicComponent, OnInit {

    @Input() data: any;
    private options: any;

    constructor(private dialogRef: MdDialogRef<DonutChartComponent>) { }

    ngOnInit() {
        this.drawDonut();
    }

    drawDonut() {
        this.options = {
            chart: {
                type: 'pieChart',
                height: 450,
                donut: true,
                x: function (d: any) { return d.key; },
                y: function (d: any) { return d.y; },
                showLabels: true,
                pie: {
                    startAngle: function (d: any) { return d.startAngle / 2 - Math.PI / 2; },
                    endAngle: function (d: any) { return d.endAngle / 2 - Math.PI / 2; }
                },
                duration: 500,
                legend: {
                    margin: {
                        top: 5,
                        right: 140,
                        bottom: 5,
                        left: 0
                    }
                }
            }
        };

        this.data = [
            {
                key: 'One',
                y: 5
            },
            {
                key: 'Two',
                y: 2
            },
            {
                key: 'Three',
                y: 9
            },
            {
                key: 'Four',
                y: 7
            },
            {
                key: 'Five',
                y: 4
            },
            {
                key: 'Six',
                y: 3
            },
            {
                key: 'Seven',
                y: .5
            }
        ];
    }
}
