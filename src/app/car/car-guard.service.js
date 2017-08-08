"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
/*
  - canDeactivate guard:
    - checks criteria before leaving a route.
    - used:
      - check for unsaved changes.
      - confirm leaving an incomplete operation
    - called when the url chnages to a different route even when only route parameters change..
*/
var CarEditGuard = (function () {
    function CarEditGuard() {
    }
    CarEditGuard.prototype.canDeactivate = function (component) {
        if (component.isDirty) {
            var carName = component.car.carName || 'New Car';
            return confirm("Navigate away and lose all changes to " + carName + "?");
        }
        return true;
    };
    return CarEditGuard;
}());
CarEditGuard = __decorate([
    core_1.Injectable()
], CarEditGuard);
exports.CarEditGuard = CarEditGuard;
//# sourceMappingURL=car-guard.service.js.map