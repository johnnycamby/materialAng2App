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
var auth_service_1 = require("./auth.service");
/*
 -------- Route Guards -----------------
 - limit access to a route(s) thus making a route(s) accessible to specific users like
   - an admin
   - login before using an application
   - warm a user before leaving a route like asking a user to save before navigation away to another page
   - retrieve data before accessing a route

 - Guard Processing:
   - router first executes the 'canDeactivate-guard' for the current route to determine if a user can leave that route.
     if a future module is loaded asynchronously then the 'canLoad-guard' is checked before the module is loaded
     then the route checks the 'canActivateChild-guard(s)' and then the 'canActivate-guard(s)' and after
     all other guard(s) are checked then the resolver(s) are executed
   NB
    - don't execute a resolver & retrieve data for a route until one is certain that a user can access that route
    - if any guard returns 'false' all pending guards are canceled and the requested navigation is canceled
  
  - canActivateChild guard:
    - called when a child of a route is activated and not the route itself
    - used to limit access to child routes as it ensures prerequisites for child routes are met
    - it's called any time the url changes and matches the associated child route even when only route
      parameters change.
   NB
   - canActivate guard l'l not re-execute if only the child route is changed
    - checks criteria before activating a child route.
*/
var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canLoad = function (route) {
        return this.checkLoggedIn(route.path);
    };
    AuthGuard.prototype.canActivate = function (route, state) {
        return this.checkLoggedIn(state.url);
    };
    AuthGuard.prototype.checkLoggedIn = function (url) {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        // help with sharing data
        this.authService.redirectUrl = url;
        this.router.navigate(['/login']);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router])
], AuthGuard);
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth-guard.service.js.map