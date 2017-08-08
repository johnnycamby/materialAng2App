import { Component, OnInit, Input } from '@angular/core';
import { MdDialogRef } from '@angular/material';
// import {NvD3Component} from 'ng2-nvd3';

import 'd3';
import 'nvd3';
// import * as d3format from 'd3-format';

import { IGraphicComponent } from '../graphic.component';

@Component({
    templateUrl: '../app/car/analytics/charts/donut-chart.component.html'
})
export class Nvd3ChartsComponent implements IGraphicComponent, OnInit {

    @Input() data: any;
    private options: any;
    // private chartType: any;
    //  private data: any;


    constructor(private dialogRef: MdDialogRef<Nvd3ChartsComponent>) { }


    ngOnInit() {
        this.setUpChart();

    }

    setUpChart() {

        this.options = {
            chart: {
                type: 'lineChart',
                height: 200,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 40,
                    left: 55
                },
                x: function (d: any) { return d.x; },
                y: function (d: any) { return d.y; },
                useInteractiveGuildline: true,
                xAxis: { axisLabel: 'Time (ms)' },
                yAxis: {
                    axisLabel: 'Voltage (v)', tickFormat: function (d: any) {
                        // return d3format.format('.02f');
                        return d3.format('.02f')(d);
                    },
                    axisLabelDistance: -10
                }
            }
        };
        this.data = this.sinAndCos();
    }

    sinAndCos() {
        let sin = [], sin2 = [], cos = [];


        for (let i = 0; i < 100; i++) {
            sin.push({ x: i, y: Math.sin(i / 10) });
            sin2.push({ x: i, y: i % 10 === 5 ? null : Math.sin(i / 10) * 0.25 + 0.5 });
            cos.push({ x: i, y: .5 * Math.cos(i / 10 + 2) + Math.random() / 10 });
        }

        return [
            {
                values: sin,
                key: 'Sine Wave',
                color: '#ff7f0e'
            },
            {
                values: cos,
                key: 'Cosine Wave',
                color: '#2ca02c'
            },
            {
                values: sin2,
                key: 'Another sine wave',
                color: '#7777ff',
                area: true
            }
        ];
    }
}
