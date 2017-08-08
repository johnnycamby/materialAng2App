"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var shared_module_1 = require("../shared/shared.module");
var message_component_1 = require("./message.component");
var message_service_1 = require("./message.service");
/**
 * --------- Secondary-route --------------------
 * - used to display another routable panel of information at the same level of the primary-route hierachy
 *   thus displaying a secondary set of routes it's own router-outlet.
 * - it has it's own child-routes.
 * - it's own route parameters.
 * - it's own secondary-routes.
 * - Each secondary-route must have a name.
 * - secondary route must 've an 'outlet' property on configuring associated with the 'name'.
 *
 * - Activate a secondary route using an object and setting its outlets property (key: outlet name, value: link parameters array)
 *   - code: this.router.navigate([{ outlets: { popup: ['messages'] } }]);
 *   - template: <a [routerLink]="[{outlets: {popup: ['messages'] }}]">Messages </a>
 *
 * - Clear a secondary route using an object and setting its outlets property (key: outlet name, value: null)
 *   - code: this.router.navigate([{outlets: {popup: null }}]);
 *   - template: <a [routerLink]="[{outlets: {popup: null }}]">Messages </a>
 * E.g
 * - Secondary route can be used to display
 *   - a dashboard with multiple panel with each supporting multiple routes.
 *   - multi-window user interface like gmail.
 *   - panel for notes or comments display.
 *   - panel to log messages for the end-user.
 *
 */
var MessageModule = (function () {
    function MessageModule() {
    }
    return MessageModule;
}());
MessageModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule,
            router_1.RouterModule.forChild([{ path: 'messages', component: message_component_1.MessageComponent, outlet: 'popup' }])
        ],
        declarations: [message_component_1.MessageComponent],
        providers: [message_service_1.MessageService]
    })
], MessageModule);
exports.MessageModule = MessageModule;
//# sourceMappingURL=message.module.js.map