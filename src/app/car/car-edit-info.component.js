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
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var CarEditInfoComponent = (function () {
    function CarEditInfoComponent(_route) {
        this._route = _route;
    }
    CarEditInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.parent.data.subscribe(function (data) {
            _this.car = data['car'];
            if (_this.carForm) {
                _this.carForm.reset();
            }
        });
    };
    return CarEditInfoComponent;
}());
__decorate([
    core_1.ViewChild(forms_1.NgForm),
    __metadata("design:type", forms_1.NgForm)
], CarEditInfoComponent.prototype, "carForm", void 0);
CarEditInfoComponent = __decorate([
    core_1.Component({
        templateUrl: './app/car/car-edit-info.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], CarEditInfoComponent);
exports.CarEditInfoComponent = CarEditInfoComponent;
//# sourceMappingURL=car-edit-info.component.js.map