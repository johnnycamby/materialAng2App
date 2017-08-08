import { Component, Input, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

import 'd3';
import 'nvd3';

import { IGraphicComponent } from '../graphic.component';

@Component({
    templateUrl: './app/car/analytics/charts/pie-chart.component.html'
})
export class PieChartComponent implements IGraphicComponent, OnInit {

    @Input() data: any;
    private options: any;

    constructor(private dialogRef: MdDialogRef<PieChartComponent>) { }

    ngOnInit() {
        this.drawPie();
    }

    drawPie() {
        this.options = {
            chart: {
                type: 'pieChart',
                height: 500,
                x: function (d: any) { return d.key; },
                y: function (d: any) { return d.y; },
                showLabels: true,
                duration: 500,
                labelThreshold: 0.01,
                labelSunbeamLayout: true,
                legend: {
                    margin: {
                        top: 5,
                        right: 35,
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
