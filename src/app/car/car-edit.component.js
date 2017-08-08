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
var car_service_1 = require("./car.service");
var modal_service_1 = require("../utilities/modal/modal.service");
var toast_service_1 = require("../utilities/toast/toast.service");
var message_service_1 = require("../messages/message.service");
var CarEditComponent = (function () {
    function CarEditComponent(_carService, _route, _router, messageService, _toast, _modalService) {
        this._carService = _carService;
        this._route = _route;
        this._router = _router;
        this.messageService = messageService;
        this._toast = _toast;
        this._modalService = _modalService;
        this.pageTitle = 'Car Edit';
        // key = tab path name & value = true or false
        this._dataIsValid = {};
    }
    Object.defineProperty(CarEditComponent.prototype, "car", {
        get: function () {
            return this._currentCar;
        },
        set: function (value) {
            this._currentCar = value;
            // clone the object to retain a copy
            this._originalCar = Object.assign({}, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarEditComponent.prototype, "isDirty", {
        get: function () {
            return JSON.stringify(this._originalCar) !== JSON.stringify(this._currentCar);
        },
        enumerable: true,
        configurable: true
    });
    CarEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        // help re-read data from the 'car-route' using Observable
        this._route.data.subscribe(function (data) { _this.onCarRetrieved(data['car']); });
    };
    CarEditComponent.prototype.onCarRetrieved = function (car) {
        this.car = car;
        if (this.car.id === 0) {
            this.pageTitle = 'Add New Car';
        }
        else {
            this.pageTitle = "Edit Old Car: " + this.car.carName;
        }
    };
    CarEditComponent.prototype.saveCar = function () {
        var _this = this;
        if (this.isValid(null)) {
            this._carService.saveCar(this.car)
                .subscribe(function () { return _this.onSaveComplete("Successfully saved " + _this.car.carName); }, function (error) { return _this._handleServiceError('Save', error); }, function () { return console.log('Save Completed'); });
        }
        else {
            this.errorMessage = 'Please correct the validation errors.';
        }
    };
    CarEditComponent.prototype.deleteCar = function () {
        var _this = this;
        if (this.car.id === 0) {
            this.onSaveComplete();
        }
        else {
            if (confirm("Really delete the product: " + this.car.carName + "?")) {
                this._carService.deleteCar(this.car.id)
                    .subscribe(function () { _this.onSaveComplete("You just deleted " + _this.car.carName); }, function (error) { return _this._handleServiceError('Delete', error); }, function () { return console.log('Delete Completed'); });
            }
        }
    };
    CarEditComponent.prototype.onSaveComplete = function (message) {
        if (message) {
            this.messageService.addMessage(message);
        }
        this.reset();
        this._router.navigate(['/cars']);
    };
    CarEditComponent.prototype.reset = function () {
        this._dataIsValid = null;
        this._currentCar = null;
        this._originalCar = null;
    };
    // ------------- Validating Across Child Routes ------------------
    CarEditComponent.prototype.validate = function () {
        // clear validation object
        this._dataIsValid = {};
        if (this.car.carName && this.car.carName.length >= 3 && this.car.carModel) {
            this._dataIsValid['info'] = true;
        }
        else {
            this._dataIsValid['info'] = false;
        }
        if (this.car.company && this.car.company.length >= 3) {
            this._dataIsValid['tags'] = true;
        }
        else {
            this._dataIsValid['tags'] = false;
        }
    };
    CarEditComponent.prototype.isValid = function (path) {
        var _this = this;
        this.validate();
        if (path) {
            return this._dataIsValid[path];
        }
        return (this._dataIsValid && Object.keys(this._dataIsValid).every(function (d) { return _this._dataIsValid[d] === true; }));
    };
    CarEditComponent.prototype._handleServiceError = function (op, error) {
        console.error(op + " error: " + (error.message || error));
    };
    return CarEditComponent;
}());
CarEditComponent = __decorate([
    core_1.Component({
        templateUrl: './app/car/car-edit.component.html',
        styleUrls: ['./app/car/car-edit.component.css']
    }),
    __metadata("design:paramtypes", [car_service_1.CarService,
        router_1.ActivatedRoute,
        router_1.Router,
        message_service_1.MessageService,
        toast_service_1.ToastService,
        modal_service_1.ModalService])
], CarEditComponent);
exports.CarEditComponent = CarEditComponent;
//# sourceMappingURL=car-edit.component.js.map