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
var material_1 = require("@angular/material");
var message_service_1 = require("../messages/message.service");
// declare var $: any;
// const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
function emailMatcher(c) {
    var emailControl = c.get('email');
    var confirmControl = c.get('confirmEmail');
    if (emailControl.pristine || confirmControl.pristine) {
        return null;
    }
    if (emailControl.value === confirmControl.value) {
        return null;
    }
    return { 'match': true };
}
var UserInfoDialog = (function () {
    function UserInfoDialog(router, dialogRef, fb, msgService) {
        this.router = router;
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.msgService = msgService;
        this.validationMessages = {
            required: 'Please enter an email address.',
            pattern: 'Please enter a valid email address.'
        };
    }
    UserInfoDialog.prototype.ngOnInit = function () {
        var _this = this;
        this.dialogRef.updateSize('800px', '600px');
        this.userForm = this.fb.group({
            userName: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            emailGroup: this.fb.group({
                // tslint:disable-next-line:max-line-length
                email: ['', [forms_1.Validators.required, forms_1.Validators.pattern('/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/')]],
                confirmEmail: ['', forms_1.Validators.required]
            }, { validator: emailMatcher }),
            isAdmin: true,
            notification: 'email',
            phone: '',
            startDate: [this.datePicker, [forms_1.Validators.required, forms_1.Validators.pattern('/(\d{1,2})[- \/](\d{1,2})[- \/](\d{4})/')]],
            // startDate: this.datePicker,
            bio: ['', [forms_1.Validators.required, forms_1.Validators.maxLength(256)]]
        });
        this.userForm.get('notification').valueChanges.subscribe(function (value) { return _this.setNotification(value); });
        var emailControl = this.userForm.get('emailGroup.email');
        emailControl.valueChanges.debounceTime(1000).subscribe(function (value) { return _this.setMessage(emailControl); });
    };
    UserInfoDialog.prototype.setNotification = function (notifyVia) {
        var phoneControl = this.userForm.get('phone');
        if (notifyVia === 'text') {
            phoneControl.setValidators(forms_1.Validators.required);
        }
        else {
            phoneControl.clearValidators();
        }
        phoneControl.updateValueAndValidity();
    };
    UserInfoDialog.prototype.setMessage = function (c) {
        var _this = this;
        this.emailMessage = '';
        if ((c.touched || c.dirty) && c.errors) {
            this.emailMessage = Object.keys(c.errors).map(function (key) { return _this.validationMessages[key]; }).join(' ');
        }
    };
    UserInfoDialog.prototype.displayMessages = function () {
        this.router.navigate([{ outlets: { popup: ['messages'] } }]);
        this.msgService.isDisplayed = true;
    };
    return UserInfoDialog;
}());
UserInfoDialog = __decorate([
    core_1.Component({
        selector: 'user-results-dialog',
        templateUrl: './app/auth/user-info-dialog.component.html',
        styleUrls: ['./app/auth/user-info-dialog.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        material_1.MdDialogRef,
        forms_1.FormBuilder,
        message_service_1.MessageService])
], UserInfoDialog);
exports.UserInfoDialog = UserInfoDialog;
//# sourceMappingURL=user-info-dialog.component.js.map