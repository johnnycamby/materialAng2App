"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
core_1.Component({
    templateUrl: './app/accordion/accordion-panel.component.html'
});
var AccordionPanelComponent = (function () {
    function AccordionPanelComponent() {
        this.selected = false;
        this.heading = '';
    }
    AccordionPanelComponent.prototype.ngOnInit = function () {
        this.accordion.addPanel(this);
    };
    AccordionPanelComponent.prototype.turnOn = function () {
        this.selected = true;
    };
    AccordionPanelComponent.prototype.turnOff = function () {
        this.selected = false;
    };
    AccordionPanelComponent.prototype.select = function () {
        this.accordion.selectPanel(this);
    };
    return AccordionPanelComponent;
}());
exports.AccordionPanelComponent = AccordionPanelComponent;
//# sourceMappingURL=accordion-panel.component.js.map