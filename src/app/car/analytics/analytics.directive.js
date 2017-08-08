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
/**
 * @Directive decorator, notice the selector name, ad-host; that's what you use to apply the
 * directive to the element.
 */
var AnalyticsDirective = (function () {
    /**
     *  injects ViewContainerRef to gain access to the view container of the element that
     *  will host the dynamically added component.
     * @param viewContainerRef
     */
    function AnalyticsDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    return AnalyticsDirective;
}());
AnalyticsDirective = __decorate([
    core_1.Directive({
        selector: '[x-host]'
    }),
    __metadata("design:paramtypes", [core_1.ViewContainerRef])
], AnalyticsDirective);
exports.AnalyticsDirective = AnalyticsDirective;
//# sourceMappingURL=analytics.directive.js.map