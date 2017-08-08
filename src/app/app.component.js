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
var material_1 = require("@angular/material");
var auth_service_1 = require("./auth/auth.service");
var message_service_1 = require("./messages/message.service");
var user_info_dialog_component_1 = require("./auth/user-info-dialog.component");
var share_info_component_1 = require("./share-info.component");
var AppComponent = (function () {
    function AppComponent(route, router, authService, messageService, dialog, snackBar) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.messageService = messageService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.pageTitle = 'Xplicit Cars';
        this.isMobile = false;
        this.loading = true;
        // do the subscription here to watch routing event on application start. 
        router.events.subscribe(function (routerEvent) { _this.checkRouterEvent(routerEvent); });
    }
    // window resize check for the device dimenions
    AppComponent.prototype.onResize = function (event) {
        this.detectDevice();
    };
    /**
     ----------  Reacting routing events ------------
     - watch for some Navigation events and react to them with a spinner.
     * @param routerEvent
     */
    AppComponent.prototype.checkRouterEvent = function (routerEvent) {
        if (routerEvent instanceof router_1.NavigationStart) {
            this.loading = true;
        }
        if (routerEvent instanceof router_1.NavigationEnd || routerEvent instanceof router_1.NavigationCancel || routerEvent instanceof router_1.NavigationError) {
            this.loading = false;
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        this.detectDevice();
    };
    AppComponent.prototype.hideNav = function () {
        this.start.toggle();
    };
    // device specifications for mobile
    AppComponent.prototype.detectDevice = function () {
        if (window.innerWidth <= 800) {
            this.isMobile = true;
        }
        else {
            this.isMobile = false;
        }
    };
    AppComponent.prototype.displayMessages = function () {
        // Activate Secondary Route
        this.router.navigate([{ outlets: { popup: ['messages'] } }]);
        this.messageService.isDisplayed = true;
    };
    AppComponent.prototype.hideMessages = function () {
        this.router.navigate([{ outlets: { popup: null } }]);
        this.messageService.isDisplayed = false;
    };
    AppComponent.prototype.openDialog = function () {
        this.dialog.open(user_info_dialog_component_1.UserInfoDialog);
    };
    AppComponent.prototype.openShareBar = function () {
        this.snackBar.openFromComponent(share_info_component_1.ShareInfoComponent, { duration: 2000 });
    };
    AppComponent.prototype.logOut = function () {
        this.authService.logout();
        this.router.navigateByUrl('/welcome');
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChild('start'),
    __metadata("design:type", material_1.MdSidenav)
], AppComponent.prototype, "start", void 0);
__decorate([
    core_1.HostListener('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppComponent.prototype, "onResize", null);
AppComponent = __decorate([
    core_1.Component({
        selector: 'x-app',
        templateUrl: './app/app.component.html',
        styleUrls: ['./app/app.component.scss']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        auth_service_1.AuthService,
        message_service_1.MessageService,
        material_1.MdDialog,
        material_1.MdSnackBar])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map