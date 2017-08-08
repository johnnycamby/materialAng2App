import { Component, Input, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

import 'd3';
import 'nvd3';

import { IGraphicComponent } from '../graphic.component';

@Component({
    templateUrl: './app/car/analytics/charts/candlestickBar-chart.component.html'
})
export class CandleStickBarChartComponent implements IGraphicComponent, OnInit {

    @Input() data: any;
    private options: any;

    constructor(private dialogRef: MdDialogRef<CandleStickBarChartComponent>) { }

    ngOnInit() {
        this.setUpCandleStickBarChart();
    }

    setUpCandleStickBarChart() {
        this.options = {
            chart: {
                type: 'candlestickBarChart',
                height: 450,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 40,
                    left: 60
                },
                x: function (d: any) { return d['date']; },
                y: function (d: any) { return d['close']; },
                duration: 100,
                xAxis: {
                    axisLabel: 'Dates',
                    tickFormat: function (d: any) {
                        let date: any = new Date();
                        return d3.time.format('%x')(new Date(date - (20000 * 86400000) + (d * 86400000)));
                    },
                    showMaxMin: false
                },
                yAxis: {
                    axisLabel: 'Stock Price',
                    tickFormat: function (d: any) {
                        return '$' + d3.format(',.1f')(d);
                    },
                    showMaxMin: false
                }
            }

        };

        this.data = [
            {
                values: [
                    { 'date': 15854, 'open': 165.42, 'high': 165.8, 'low': 164.34, 'close': 165.22, 'volume': 160363400, 'adjusted': 164.35 },
                    { 'date': 15855, 'open': 165.35, 'high': 166.59, 'low': 165.22, 'close': 165.83, 'volume': 107793800, 'adjusted': 164.96 },
                    { 'date': 15856, 'open': 165.37, 'high': 166.31, 'low': 163.13, 'close': 163.45, 'volume': 176850100, 'adjusted': 162.59 },
                    { 'date': 15859, 'open': 163.83, 'high': 164.46, 'low': 162.66, 'close': 164.35, 'volume': 168390700, 'adjusted': 163.48 },
                    { 'date': 15860, 'open': 164.44, 'high': 165.1, 'low': 162.73, 'close': 163.56, 'volume': 157631500, 'adjusted': 162.7 },
                    { 'date': 15861, 'open': 163.09, 'high': 163.42, 'low': 161.13, 'close': 161.27, 'volume': 211737800, 'adjusted': 160.42 },
                    { 'date': 15862, 'open': 161.2, 'high': 162.74, 'low': 160.25, 'close': 162.73, 'volume': 200225500, 'adjusted': 161.87 },
                    { 'date': 15863, 'open': 163.85, 'high': 164.95, 'low': 163.14, 'close': 164.8, 'volume': 188337800, 'adjusted': 163.93 },
                    { 'date': 15866, 'open': 165.31, 'high': 165.4, 'low': 164.37, 'close': 164.8, 'volume': 105667100, 'adjusted': 163.93 },
                    { 'date': 15867, 'open': 163.3, 'high': 164.54, 'low': 162.74, 'close': 163.1, 'volume': 159505400, 'adjusted': 162.24 },
                    { 'date': 15868, 'open': 164.22, 'high': 164.39, 'low': 161.6, 'close': 161.75, 'volume': 177361500, 'adjusted': 160.9 },
                    { 'date': 15869, 'open': 161.66, 'high': 164.5, 'low': 161.3, 'close': 164.21, 'volume': 163587800, 'adjusted': 163.35 },
                    { 'date': 15870, 'open': 164.03, 'high': 164.67, 'low': 162.91, 'close': 163.18, 'volume': 141197500, 'adjusted': 162.32 },
                    { 'date': 15873, 'open': 164.29, 'high': 165.22, 'low': 163.22, 'close': 164.44, 'volume': 136295600, 'adjusted': 163.57 },
                    { 'date': 15874, 'open': 164.53, 'high': 165.99, 'low': 164.52, 'close': 165.74, 'volume': 114695600, 'adjusted': 164.87 },
                    { 'date': 15875, 'open': 165.6, 'high': 165.89, 'low': 163.38, 'close': 163.45, 'volume': 206149500, 'adjusted': 162.59 },
                    { 'date': 15876, 'open': 161.86, 'high': 163.47, 'low': 158.98, 'close': 159.4, 'volume': 321255900, 'adjusted': 158.56 },
                    { 'date': 15877, 'open': 159.64, 'high': 159.76, 'low': 157.47, 'close': 159.07, 'volume': 271956800, 'adjusted': 159.07 },
                    { 'date': 15880, 'open': 157.41, 'high': 158.43, 'low': 155.73, 'close': 157.06, 'volume': 222329000, 'adjusted': 157.06 },
                    { 'date': 15881, 'open': 158.48, 'high': 160.1, 'low': 157.42, 'close': 158.57, 'volume': 162262200, 'adjusted': 158.57 },
                    { 'date': 15882, 'open': 159.87, 'high': 160.5, 'low': 159.25, 'close': 160.14, 'volume': 134848000, 'adjusted': 160.14 },
                    { 'date': 15883, 'open': 161.1, 'high': 161.82, 'low': 160.95, 'close': 161.08, 'volume': 129483700, 'adjusted': 161.08 },
                    { 'date': 15884, 'open': 160.63, 'high': 161.4, 'low': 159.86, 'close': 160.42, 'volume': 160402900, 'adjusted': 160.42 },
                    { 'date': 15887, 'open': 161.26, 'high': 162.48, 'low': 161.08, 'close': 161.36, 'volume': 131954800, 'adjusted': 161.36 }
                ]
            }
        ];
    }
}


