"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
/**
 preload the Car feature modules
 */
var XplicitStrategy = (function () {
    function XplicitStrategy() {
    }
    XplicitStrategy.prototype.preload = function (route, load) {
        if (route.data && route.data['preload']) {
            return load();
        }
        return Observable_1.Observable.of(null);
    };
    return XplicitStrategy;
}());
XplicitStrategy = __decorate([
    core_1.Injectable()
], XplicitStrategy);
exports.XplicitStrategy = XplicitStrategy;
//# sourceMappingURL=XplicitStrategy.service.js.map