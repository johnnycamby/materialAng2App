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
// Angular Service code
var XService = (function () {
    function XService() {
    }
    return XService;
}());
XService = __decorate([
    Injectable()
], XService);
exports.XService = XService;
// Angular component code
var CarEditComponent = (function () {
    function CarEditComponent(_xService) {
        this._xService = _xService;
    }
    CarEditComponent.prototype.deleteCar = function () {
        var msg = "Do you really want to delete the " + this.car.carName;
        this._xService.activate(msg).then(function (responseOk) {
            //.....
        });
    };
    return CarEditComponent;
}());
CarEditComponent = __decorate([
    Component({
        templateUrl: './app/car/x.html',
        styleUrls: ['./app/car/x.component.css']
    }),
    __metadata("design:paramtypes", [XService])
], CarEditComponent);
exports.CarEditComponent = CarEditComponent;
//# sourceMappingURL=x.js.map