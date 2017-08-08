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
var forms_1 = require("@angular/forms");
require("rxjs/add/operator/debounceTime");
var help_1 = require("./help");
var HelpComponent = (function () {
    function HelpComponent(fb) {
        this.fb = fb;
        this.help = new help_1.Help();
        this.states = [
            { value: 'state-0', viewValue: 'Baden Württemberg' },
            { value: 'state-1', viewValue: 'Bavaria' },
            { value: 'state-2', viewValue: 'Berlin' },
            { value: 'state-3', viewValue: 'Brandenburg' },
            { value: 'state-4', viewValue: 'Bremen' },
            { value: 'state-5', viewValue: 'Hamburg' },
            { value: 'state-6', viewValue: 'Hesse' },
            { value: 'state-7', viewValue: 'Lower Saxony' },
            { value: 'state-8', viewValue: 'Mecklenburg Vorpommern' },
            { value: 'state-9', viewValue: 'North Rhine Westphalia' },
            { value: 'state-10', viewValue: 'Rhineland Palatinate' },
            { value: 'state-11', viewValue: 'Saarland' },
            { value: 'state-12', viewValue: 'Saxony' },
            { value: 'state-13', viewValue: 'Saxony Anhalt' },
            { value: 'state-14', viewValue: 'Schleswig Holstein' },
            { value: 'state-15', viewValue: 'Thuringia' },
        ];
        this.validationMessages = {
            required: 'Please enter an email address.',
            pattern: 'Please enter a valid email address.'
        };
    }
    Object.defineProperty(HelpComponent.prototype, "addresses", {
        get: function () {
            return this.helpForm.get('addresses');
        },
        enumerable: true,
        configurable: true
    });
    HelpComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.helpForm = this.fb.group({
            email: ['', [forms_1.Validators.required, forms_1.Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]],
            phone: '',
            notification: 'email',
            sendCatalog: true,
            addresses: this.fb.array([this.buildAddress()])
        });
        this.helpForm.get('notification').valueChanges.subscribe(function (value) { return _this.setNotification(value); });
        var emailControl = this.helpForm.get('email');
        emailControl.valueChanges.debounceTime(1000).subscribe(function (value) { return _this.setMessage(emailControl); });
    };
    HelpComponent.prototype.buildAddress = function () {
        return this.fb.group({
            address: 'home',
            street: '',
            city: '',
            zip: ''
        });
    };
    HelpComponent.prototype.addAddress = function () {
        this.addresses.push(this.buildAddress());
    };
    HelpComponent.prototype.setNotification = function (notifyVia) {
        var phoneControl = this.helpForm.get('phone');
        if (notifyVia == 'text') {
            phoneControl.setValidators(forms_1.Validators.required);
        }
        else {
            phoneControl.clearValidators();
        }
        phoneControl.updateValueAndValidity();
    };
    HelpComponent.prototype.setMessage = function (c) {
        var _this = this;
        this.emailMessage = '';
        if ((c.touched || c.dirty) && c.errors) {
            this.emailMessage = Object.keys(c.errors).map(function (key) { return _this.validationMessages[key]; }).join(' ');
        }
    };
    HelpComponent.prototype.save = function () {
        console.log(this.helpForm);
        console.log('Saved: ' + JSON.stringify(this.helpForm.value));
    };
    return HelpComponent;
}());
HelpComponent = __decorate([
    core_1.Component({
        selector: 'x-help',
        templateUrl: './app/help/help.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], HelpComponent);
exports.HelpComponent = HelpComponent;
//# sourceMappingURL=help.component.js.map