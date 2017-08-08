"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var material_1 = require("@angular/material");
var ngx_accordion_1 = require("ngx-accordion");
// import {SqueezeBoxModule} from 'squeezebox';
var star_component_1 = require("./star.component");
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, material_1.MdCardModule, material_1.MdInputModule, material_1.MdDatepickerModule, material_1.MdNativeDateModule],
        exports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            material_1.MdDatepickerModule,
            material_1.MdNativeDateModule,
            material_1.MdCardModule,
            material_1.MdInputModule,
            // SqueezeBoxModule,
            ngx_accordion_1.AccordionModule,
            star_component_1.StarComponent
        ],
        declarations: [star_component_1.StarComponent]
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map