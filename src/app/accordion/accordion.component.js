"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AccordionComponent = (function () {
    function AccordionComponent() {
    }
    AccordionComponent.prototype.selectPanel = function (panel) {
        for (var i in this.panels) {
            if (panel === this.panels[i]) {
                this.panels[i].turnOn();
            }
            else {
                this.panels[i].turnOff();
            }
        }
    };
    AccordionComponent.prototype.addPanel = function (panel) {
        this.panels.push(panel);
        if (this.panels.length > 0) {
            this.panels[0].turnOn();
        }
    };
    return AccordionComponent;
}());
AccordionComponent = __decorate([
    core_1.Component({
        templateUrl: './app/accordion/accordion.component.html'
    })
], AccordionComponent);
exports.AccordionComponent = AccordionComponent;
//# sourceMappingURL=accordion.component.js.map