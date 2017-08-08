import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

// import { PieChartComponent } from './analytics/charts/pie-chart.component';
import { GraphicsService } from './analytics/graphics.service';
import { GraphicsItem } from './analytics/graphics-item';

@Component({
    templateUrl: './app/car/car-analytics.component.html',
    styleUrls: ['./app/car/car-analytics.component.css']
})
export class CarAnalyticsComponent implements OnInit {

    graphicsItem: GraphicsItem[];

    constructor(private graphicsService: GraphicsService, private dialogRef: MdDialogRef<CarAnalyticsComponent>) { }


    ngOnInit(): void {
        this.dialogRef.updateSize('800px', '700px');
        this.graphicsItem = this.graphicsService.getAllComponents();
    }
}
