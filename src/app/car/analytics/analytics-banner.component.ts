import { Component, ViewChild, AfterViewInit, OnDestroy, Input, ComponentFactoryResolver, ChangeDetectorRef } from '@angular/core';
import { GraphicsItem } from './graphics-item';
import { AnalyticsDirective } from './analytics.directive';
import { IGraphicComponent } from './graphic.component';

@Component({
    selector: 'add-graphic',
    template: `
         <div>
             <ng-template x-host></ng-template>
            </div>
    `
})
export class AnalyticsBannerComponent implements AfterViewInit, OnDestroy {

    @Input() graphicsItem: GraphicsItem[];
    currentAddIndex: number = -1;
    @ViewChild(AnalyticsDirective) xHost: AnalyticsDirective;
    subscription: any;
    interval: any;

    constructor(private componentFactoryResolver: ComponentFactoryResolver, private cdr: ChangeDetectorRef) { }

    ngAfterViewInit() {
        this.dynamicLoadComponents();
        this.getGraphicItems();
        this.cdr.detectChanges();
    }

    ngOnDestroy() {
        clearInterval(this.interval);
    }

    dynamicLoadComponents() {
        this.currentAddIndex = (this.currentAddIndex + 1) % this.graphicsItem.length;
        let gItem = this.graphicsItem[this.currentAddIndex];
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(gItem.component);
        let viewContainerRef = this.xHost.viewContainerRef;
        viewContainerRef.clear();

        let componentRef = viewContainerRef.createComponent(componentFactory);
        (<IGraphicComponent>componentRef.instance).data = gItem;
        // (<IGraphicComponent>componentRef.instance).data = gItem.data;
    }

    getGraphicItems() {
      // this.loadComponent();
        this.interval = setInterval(() => {
            this.dynamicLoadComponents();
        }, 3000);
    }

}
