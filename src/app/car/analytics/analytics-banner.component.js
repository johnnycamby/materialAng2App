"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var analytics_directive_1 = require("./analytics.directive");
var AnalyticsBannerComponent = (function () {
    function AnalyticsBannerComponent(componentFactoryResolver, cdr) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.cdr = cdr;
        this.currentAddIndex = -1;
    }
    AnalyticsBannerComponent.prototype.ngAfterViewInit = function () {
        this.dynamicLoadComponents();
        this.getGraphicItems();
        this.cdr.detectChanges();
    };
    AnalyticsBannerComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.interval);
    };
    AnalyticsBannerComponent.prototype.dynamicLoadComponents = function () {
        this.currentAddIndex = (this.currentAddIndex + 1) % this.graphicsItem.length;
        var gItem = this.graphicsItem[this.currentAddIndex];
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(gItem.component);
        var viewContainerRef = this.xHost.viewContainerRef;
        viewContainerRef.clear();
        var componentRef = viewContainerRef.createComponent(componentFactory);
        componentRef.instance.data = gItem;
        // (<IGraphicComponent>componentRef.instance).data = gItem.data;
    };
    AnalyticsBannerComponent.prototype.getGraphicItems = function () {
        var _this = this;
        // this.loadComponent();
        this.interval = setInterval(function () {
            _this.dynamicLoadComponents();
        }, 3000);
    };
    return AnalyticsBannerComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], AnalyticsBannerComponent.prototype, "graphicsItem", void 0);
__decorate([
    core_1.ViewChild(analytics_directive_1.AnalyticsDirective),
    __metadata("design:type", analytics_directive_1.AnalyticsDirective)
], AnalyticsBannerComponent.prototype, "xHost", void 0);
AnalyticsBannerComponent = __decorate([
    core_1.Component({
        selector: 'add-graphic',
        template: "\n         <div>\n             <ng-template x-host></ng-template>\n            </div>\n    "
    }),
    __metadata("design:paramtypes", [core_1.ComponentFactoryResolver, core_1.ChangeDetectorRef])
], AnalyticsBannerComponent);
exports.AnalyticsBannerComponent = AnalyticsBannerComponent;
//# sourceMappingURL=analytics-banner.component.js.map