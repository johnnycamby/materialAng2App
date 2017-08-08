"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var material_1 = require("@angular/material");
var animations_1 = require("@angular/platform-browser/animations");
var forms_1 = require("@angular/forms");
require("hammerjs");
// Imports for loading & configuring the in-memory web api
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var car_data_1 = require("./car/car-data");
var app_component_1 = require("./app.component");
var help_component_1 = require("./help/help.component");
var auth_module_1 = require("./auth/auth.module");
var page_not_found_component_1 = require("./page-not-found.component");
var welcome_component_1 = require("./home/welcome.component");
var share_info_component_1 = require("./share-info.component");
var app_routing_module_1 = require("./app-routing.module");
var toast_module_1 = require("./utilities/toast/toast.module");
var modal_module_1 = require("./utilities/modal/modal.module");
var message_module_1 = require("./messages/message.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.ReactiveFormsModule, http_1.HttpModule,
            material_1.MaterialModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(car_data_1.CarData, { delay: 1000 }),
            toast_module_1.ToastModule, modal_module_1.ModalModule, auth_module_1.AuthModule,
            message_module_1.MessageModule, app_routing_module_1.AppRoutingModule, animations_1.BrowserAnimationsModule],
        declarations: [app_component_1.AppComponent, help_component_1.HelpComponent, share_info_component_1.ShareInfoComponent, welcome_component_1.WelcomeComponent, page_not_found_component_1.PageNotFoundComponent],
        entryComponents: [share_info_component_1.ShareInfoComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map