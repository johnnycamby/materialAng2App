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
var CarEditTagsComponent = (function () {
    function CarEditTagsComponent(_route) {
        this._route = _route;
        this.newTags = '';
    }
    CarEditTagsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.parent.data.subscribe(function (data) {
            _this.car = data['car'];
        });
    };
    CarEditTagsComponent.prototype.addTags = function () {
        var tagArray = this.newTags.split(',');
        this.car.tags = this.car.tags ? this.car.tags.concat(tagArray) : tagArray;
        this.newTags = '';
    };
    CarEditTagsComponent.prototype.removeTag = function (idx) {
        this.car.tags.splice(idx, 1);
    };
    return CarEditTagsComponent;
}());
CarEditTagsComponent = __decorate([
    core_1.Component({
        templateUrl: './app/car/car-edit-tags.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], CarEditTagsComponent);
exports.CarEditTagsComponent = CarEditTagsComponent;
//# sourceMappingURL=car-edit-tags.component.js.map